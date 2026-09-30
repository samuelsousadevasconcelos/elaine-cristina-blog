// Indice do blog, no mesmo sistema visual da LP (Playfair Display + Poppins,
// navy/gold reais — ver globals.css) e no padrao de card usado no blog da
// Consultoria Trafego ADS (foto + badge + data + titulo + resumo + "Ler artigo").
// Tempo de leitura calculado por contagem real de palavras de cada pagina
// (~200 palavras/min) — nao e um numero inventado.

type Item = {
  href: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  readMinutes: number;
};

const wave1: Item[] = [
  {
    href: '/divorcio-extrajudicial',
    category: 'Guia completo',
    title: 'Divórcio Extrajudicial: Guia Completo',
    excerpt:
      'Como funciona o divórcio extrajudicial em cartório, quem pode fazer, documentos, custos e quando é preciso ir à via judicial.',
    image: '/img/divorcio-extrajudicial/thumb.webp',
    readMinutes: 2,
  },
  {
    href: '/divorcio-extrajudicial/precisa-de-advogado',
    category: 'Processo',
    title: 'Divórcio extrajudicial/amigável precisa de advogado?',
    excerpt:
      'Sim: a lei exige assistência de advogado mesmo no divórcio consensual em cartório. Entenda o motivo e o que muda sem consenso.',
    image: '/img/precisa-de-advogado/thumb.webp',
    readMinutes: 1,
  },
  {
    href: '/divorcio-extrajudicial/documentos-necessarios',
    category: 'Processo',
    title: 'Documentos necessários para o divórcio extrajudicial',
    excerpt:
      'Identificação, certidão de casamento e, quando aplicável, documentos dos filhos e dos bens. O que muda de caso para caso.',
    image: '/img/documentos-necessarios/thumb.webp',
    readMinutes: 1,
  },
  {
    href: '/divorcio-extrajudicial/quanto-custa',
    category: 'Custos',
    title: 'Quanto custa um divórcio extrajudicial',
    excerpt:
      'Emolumentos do cartório (tabela oficial do estado) e honorários advocatícios, definidos caso a caso. Entenda os dois componentes.',
    image: '/img/quanto-custa/thumb.webp',
    readMinutes: 2,
  },
  {
    href: '/divorcio-extrajudicial/filhos-menores',
    category: 'Situações específicas',
    title: 'Divórcio extrajudicial com filhos menores',
    excerpt:
      'Desde 2024 o CNJ admite hipóteses extrajudiciais mesmo com filhos menores, quando guarda, convivência e alimentos já estão resolvidos.',
    image: '/img/filhos-menores/thumb.webp',
    readMinutes: 1,
  },
  {
    href: '/divorcio-extrajudicial/extrajudicial-x-judicial',
    category: 'Comparação',
    title: 'Divórcio extrajudicial x judicial: qual a diferença',
    excerpt:
      'Quando o divórcio pode ser feito em cartório e quando precisa passar pelo processo judicial. Os requisitos de cada via.',
    image: '/img/extrajudicial-x-judicial/thumb.webp',
    readMinutes: 1,
  },
  {
    href: '/divorcio-extrajudicial/ferramenta-cartorio',
    category: 'Ferramenta orientativa',
    title: 'Ferramenta: Meu caso pode ser feito em cartório?',
    excerpt:
      'Responda 2 perguntas para uma orientação inicial sobre o seu caso. Não substitui a análise jurídica individual.',
    image: '/img/ferramenta-cartorio/thumb.webp',
    readMinutes: 1,
  },
  {
    href: '/elaine-cristina-advogada-de-familia',
    category: 'Sobre a advogada',
    title: 'Elaine Cristina — Advogada de Família (OAB/SP 215.743)',
    excerpt: 'Atuação em Direito de Família, localização do escritório em Vila Nova Curuçá e como falar com a advogada.',
    image: '/img/elaine-cristina-advogada-de-familia/thumb.webp',
    readMinutes: 1,
  },
];

const PUBLISHED = '28 set 2026';

export default function Home() {
  return (
    <main style={{ paddingBottom: 24 }}>
      <div className="blog-hero">
        <div className="wrap-wide">
          <p className="eyebrow">Elaine Cristina Advocacia</p>
          <h1>Divórcio Extrajudicial — Conteúdo Completo</h1>
          <p>
            Guias e orientações sobre divórcio extrajudicial em cartório, escritos pela Elaine
            Cristina Advocacia (OAB/SP 215.743).
          </p>
        </div>
      </div>

      <div className="wrap-wide">
        <div className="blog-grid">
          {wave1.map((item) => (
            <article key={item.href} className="blog-card">
              <a href={item.href} className="blog-card-photo" style={{ backgroundImage: `url(${item.image})` }}>
                <span className="blog-card-badge">{item.category}</span>
              </a>
              <div className="blog-card-body">
                <p className="blog-card-meta">
                  {PUBLISHED} · {item.readMinutes} min de leitura
                </p>
                <h2>
                  <a href={item.href}>{item.title}</a>
                </h2>
                <p>{item.excerpt}</p>
                <a href={item.href} className="blog-card-readmore">
                  Ler artigo →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta-band">
          <div>
            <h2>Pronto para conversar sobre o seu caso?</h2>
            <p>Atendimento presencial e online, com análise individual antes de qualquer orientação.</p>
          </div>
          <a href="https://advocaciaelainecristina.com.br#fale-conosco" className="btn btn-gold">
            Falar com a advogada
          </a>
        </div>
      </div>
    </main>
  );
}
