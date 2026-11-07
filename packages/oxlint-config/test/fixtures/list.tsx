import { QueryClient, useQuery } from '@tanstack/react-query';

export function List({ items }: { items: string[] }) {
    const client = new QueryClient();
    const { data } = useQuery({ queryFn: () => fetch('/x'), queryKey: ['x'] });
    return items.map((item, index) => <div key={index}>{item}{String(data)}{String(client)}</div>);
}
