type Props = {
  children: React.ReactNode;
};

// Resposta curta e autocontida logo apos o H1 — principio "Answer First" da diretriz.
export function DirectAnswer({ children }: Props) {
  return (
    <div
      style={{
        background: 'var(--paper-raised)',
        border: '1px solid var(--line-strong)',
        borderLeft: '4px solid var(--navy)',
        borderRadius: 6,
        padding: '16px 20px',
        margin: '20px 0',
        fontSize: 17,
      }}
    >
      <strong style={{ display: 'block', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--ink-faint)', marginBottom: 6 }}>
        Resposta curta
      </strong>
      {children}
    </div>
  );
}
