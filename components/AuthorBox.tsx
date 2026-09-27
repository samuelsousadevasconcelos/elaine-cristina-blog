// Dados reais apenas — nunca inventar credenciais, premios ou anos de experiencia.
export function AuthorBox() {
  return (
    <section
      style={{
        display: 'flex',
        gap: 14,
        alignItems: 'flex-start',
        background: 'var(--paper-raised)',
        border: '1px solid var(--line)',
        borderRadius: 8,
        padding: '16px 18px',
        margin: '28px 0',
      }}
    >
      <div>
        <p style={{ margin: '0 0 2px', fontWeight: 600, color: 'var(--navy)' }}>Elaine Cristina Alves de Souza</p>
        <p style={{ margin: '0 0 6px', fontSize: 13, color: 'var(--ink-soft)' }}>OAB/SP 215.743 — Direito de Família</p>
        <p style={{ margin: 0, fontSize: 13, color: 'var(--ink-faint)' }}>
          Escritório em Vila Nova Curuçá, São Paulo/SP. Conteúdo de caráter informativo — não substitui a análise jurídica individual do caso.
        </p>
      </div>
    </section>
  );
}
