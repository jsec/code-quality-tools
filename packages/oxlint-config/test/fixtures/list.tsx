export function List({ items }: { items: string[] }) {
    return items.map((item, index) => <div key={index}>{item}</div>);
}
