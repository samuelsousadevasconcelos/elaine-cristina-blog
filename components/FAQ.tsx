type QA = { question: string; answer: string };

export function FAQ({ items }: { items: QA[] }) {
  if (!items.length) return null;
  return (
    <section style={{ margin: '28px 0' }}>
      <h2 style={{ fontSize: 20, color: 'var(--navy)' }}>Perguntas frequentes</h2>
      <div>
        {items.map((item) => (
          <details key={item.question} style={{ borderBottom: '1px solid var(--line)', padding: '10px 0' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600 }}>{item.question}</summary>
            <p style={{ marginTop: 8, color: 'var(--ink-soft)' }}>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
