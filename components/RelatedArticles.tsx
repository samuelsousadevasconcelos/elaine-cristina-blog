type Item = { href: string; title: string };

export function RelatedArticles({ items }: { items: Item[] }) {
  if (!items.length) return null;
  return (
    <section style={{ margin: '28px 0' }}>
      <h2 style={{ fontSize: 18, color: 'var(--navy)' }}>Leia também</h2>
      <ul style={{ margin: 0, paddingLeft: 18 }}>
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
