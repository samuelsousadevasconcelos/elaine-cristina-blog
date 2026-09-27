type Item = { id: string; label: string };

export function TableOfContents({ items }: { items: Item[] }) {
  if (!items.length) return null;
  return (
    <nav aria-label="Neste artigo" style={{ background: 'var(--paper-raised)', border: '1px solid var(--line)', borderRadius: 6, padding: '14px 18px', margin: '20px 0' }}>
      <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--ink-faint)', margin: '0 0 8px' }}>Neste artigo</p>
      <ol style={{ margin: 0, paddingLeft: 18 }}>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: 4 }}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
