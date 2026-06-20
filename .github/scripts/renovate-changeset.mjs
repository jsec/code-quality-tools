#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";

function bumpLevel(from, to) {
  if (from === to) {
    return null;
  }

  const before = parseVersion(from);
  const after = parseVersion(to);

  if (before === null || after === null) {
    return "patch";
  }

  if (before.major !== after.major) {
    return "major";
  }

  if (before.minor !== after.minor) {
    return "minor";
  }

  if (before.patch !== after.patch) {
    return "patch";
  }

  return null;
}

function changedDependencies(beforePkg, afterPkg) {
  const changes = [];

  for (const field of ["dependencies", "peerDependencies", "devDependencies"]) {
    const before = beforePkg[field] || {};
    const after = afterPkg[field] || {};

    for (const [name, to] of Object.entries(after)) {
      const from = before[name];
      const level = bumpLevel(from, to);
      if (level === null) {
        continue;
      }

      changes.push({ from: from || "(added)", level, name, to });
    }
  }

  return changes;
}

function collectBumps(base, head) {
  const diff = git("diff", "--name-only", base, head, "--", "packages/*/package.json");
  const files = diff.split("\n").filter(Boolean);

  const bumps = [];

  for (const path of files) {
    const beforePkg = readJson(base, path);
    const afterPkg = readJson(head, path);
    if (beforePkg === null || afterPkg === null) {
      continue;
    }
    if (afterPkg.private) {
      continue;
    }

    const deps = changedDependencies(beforePkg, afterPkg);
    if (deps.length === 0) {
      continue;
    }

    const hasMajor = deps.some((dep) => dep.level === "major");
    const level = hasMajor ? "minor" : "patch";

    bumps.push({ deps, level, name: afterPkg.name });
  }

  return bumps;
}

function commitRange() {
  const before = process.env.BEFORE_SHA?.trim();
  const after = process.env.AFTER_SHA?.trim();

  const head = isZero(after) ? "HEAD" : after;
  const base = isZero(before) ? `${head}^` : before;

  return { base, head };
}

function git(...args) {
  return execFileSync("git", args, { encoding: "utf8" }).trim();
}

function isZero(sha) {
  return !sha || /^0+$/.test(sha);
}

function parseVersion(range) {
  if (typeof range !== "string") {
    return null;
  }

  if (range.startsWith("workspace:")) {
    return null;
  }

  const match = range.match(/(\d+)\.(\d+)\.(\d+)/);
  if (!match) {
    return null;
  }

  return { major: Number(match[1]), minor: Number(match[2]), patch: Number(match[3]) };
}

function readJson(ref, path) {
  try {
    return JSON.parse(git("show", `${ref}:${path}`));
  } catch {
    return null;
  }
}

function renderChangeset(bumps) {
  const header = bumps.map((bump) => `"${bump.name}": ${bump.level}`).join("\n");

  const lines = bumps.flatMap((bump) =>
    bump.deps.map((dep) => `- ${dep.name} ${dep.from} -> ${dep.to}`),
  );

  const summary = [...new Set(lines)].join("\n");

  return `---\n${header}\n---\n\nUpdate dependencies:\n\n${summary}\n`;
}

const { base, head } = commitRange();
const bumps = collectBumps(base, head);

if (bumps.length === 0) {
  console.log("No dependency changes detected; no changeset written.");
  process.exit(0);
}

const shortSha = git("rev-parse", "--short", head);
const path = `.changeset/renovate-${shortSha}.md`;

writeFileSync(path, renderChangeset(bumps));
console.log(`Wrote ${path}`);
