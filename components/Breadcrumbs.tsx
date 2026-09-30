type Crumb = { href: string; label: string };

// onDark: usado quando o breadcrumb fica sobreposto na imagem do hero (ArticleHero.image).
export function Breadcrumbs({ items, onDark }: { items: Crumb[]; onDark?: boolean }) {
  const color = onDark ? 'rgba(255,255,255,0.78)' : 'var(--ink-faint)';
  const linkColor = onDark ? '#fff' : 'var(--navy)';
  return (
    <nav aria-label="Breadcrumb" style={{ fontSize: 13, color, margin: '16px 0' }}>
      {items.map((item, i) => (
        <span key={item.href}>
          <a href={item.href} style={{ color: linkColor }}>
            {item.label}
          </a>
          {i < items.length - 1 && <span style={{ margin: '0 6px' }}>/</span>}
        </span>
      ))}
    </nav>
  );
}
