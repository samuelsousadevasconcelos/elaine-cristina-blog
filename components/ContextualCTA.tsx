// CTA contextual — nunca prometer resultado (compliance OAB, secao 8/39 da diretriz).
export function ContextualCTA({
  text = 'Entenda se o seu caso pode ser analisado para divórcio extrajudicial.',
  href = 'https://advocaciaelainecristina.com.br#fale-conosco',
}: {
  text?: string;
  href?: string;
}) {
  return (
    <div
      style={{
        background: 'var(--navy)',
        color: '#fff',
        borderRadius: 8,
        padding: '18px 20px',
        margin: '28px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap',
      }}
    >
      <p style={{ margin: 0 }}>{text}</p>
      <a
        href={href}
        style={{
          background: 'var(--gold)',
          color: '#1b2430',
          padding: '10px 18px',
          borderRadius: 6,
          fontWeight: 600,
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        Fale com a advogada
      </a>
    </div>
  );
}
