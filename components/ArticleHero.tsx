type Props = {
  eyebrow?: string;
  title: string;
};

export function ArticleHero({ eyebrow, title }: Props) {
  return (
    <header style={{ padding: '32px 0 16px', borderBottom: '1px solid var(--line)' }}>
      {eyebrow && (
        <p
          style={{
            fontSize: 12,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            fontWeight: 600,
            margin: '0 0 8px',
          }}
        >
          {eyebrow}
        </p>
      )}
      <h1 style={{ fontSize: 32, lineHeight: 1.25, margin: 0, color: 'var(--navy)' }}>{title}</h1>
    </header>
  );
}
