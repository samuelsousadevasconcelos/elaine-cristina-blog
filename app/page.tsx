const wave1 = [
  { href: '/divorcio-extrajudicial', title: 'Divórcio Extrajudicial: Guia Completo' },
  {
    href: '/divorcio-extrajudicial/precisa-de-advogado',
    title: 'Divórcio extrajudicial/amigável precisa de advogado?',
  },
  {
    href: '/divorcio-extrajudicial/documentos-necessarios',
    title: 'Documentos necessários para o divórcio extrajudicial',
  },
  { href: '/divorcio-extrajudicial/quanto-custa', title: 'Quanto custa um divórcio extrajudicial' },
  { href: '/divorcio-extrajudicial/filhos-menores', title: 'Divórcio extrajudicial com filhos menores' },
  {
    href: '/divorcio-extrajudicial/extrajudicial-x-judicial',
    title: 'Divórcio extrajudicial x judicial: qual a diferença',
  },
  {
    href: '/divorcio-extrajudicial/ferramenta-cartorio',
    title: 'Ferramenta: Meu caso pode ser feito em cartório?',
  },
  {
    href: '/elaine-cristina-advogada-de-familia',
    title: 'Sobre a Elaine Cristina — Advogada de Família (OAB/SP 215.743)',
  },
];

export default function Home() {
  return (
    <main className="wrap" style={{ paddingTop: 48, paddingBottom: 64 }}>
      <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold)', fontWeight: 600 }}>
        Elaine Cristina Advocacia
      </p>
      <h1 style={{ color: 'var(--navy)', fontSize: 30 }}>Divórcio Extrajudicial — Conteúdo Completo</h1>
      <p style={{ color: 'var(--ink-soft)' }}>
        Guias e orientações sobre divórcio extrajudicial em cartório, escritos pela Elaine
        Cristina Advocacia (OAB/SP 215.743).
      </p>
      <ul style={{ paddingLeft: 18, marginTop: 24 }}>
        {wave1.map((item) => (
          <li key={item.href} style={{ margin: '8px 0' }}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
