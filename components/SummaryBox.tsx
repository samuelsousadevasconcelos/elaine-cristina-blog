export function SummaryBox({ children }: { children: React.ReactNode }) {
  return (
    <aside
      style={{
        background: '#f2f4f9',
        border: '1px solid var(--line)',
        borderRadius: 6,
        padding: '14px 18px',
        margin: '18px 0',
      }}
    >
      <strong style={{ display: 'block', color: 'var(--navy)', marginBottom: 6 }}>Em resumo</strong>
      {children}
    </aside>
  );
}
