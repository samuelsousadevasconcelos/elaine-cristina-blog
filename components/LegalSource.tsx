type Source = { label: string; url: string };

// Nunca usar como fonte blogs de terceiros — so legislacao/CNJ/OAB/orgaos oficiais,
// conforme a diretriz (secao 38).
export function LegalSource({ sources }: { sources: Source[] }) {
  if (!sources.length) return null;
  return (
    <section style={{ marginTop: 28, paddingTop: 16, borderTop: '1px solid var(--line)' }}>
      <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--ink-faint)', margin: '0 0 8px' }}>
        Fontes e referências
      </p>
      <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, color: 'var(--ink-soft)' }}>
        {sources.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
