type Crumb = { href: string; label: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: 'var(--ink-faint)', margin: '16px 0' }}>
      {items.map((item, i) => (
        <span key={item.href}>
          <a href={item.href}>{item.label}</a>
          {i < items.length - 1 && <span style={{ margin: '0 6px' }}>/</span>}
        </span>
      ))}
    </nav>
  );
}
