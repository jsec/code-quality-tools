const settings = { delay: 2, retries: 1 };

if (settings.delay == 2) {
    settings.retries = 3;
}

Promise.resolve(settings);

export default settings;
