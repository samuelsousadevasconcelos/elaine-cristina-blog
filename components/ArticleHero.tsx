import { Breadcrumbs } from './Breadcrumbs';

type Crumb = { href: string; label: string };

type Props = {
  eyebrow?: string;
  title: string;
  image?: { src: string; alt: string; credit?: { photographer: string; photographerUrl: string } };
  breadcrumbs?: Crumb[];
  author?: string;
  published?: string;
};

// Banner full-bleed com imagem + overlay, no padrao aprovado pelo Samuel
// (referencia: samuelvasconcelos.com.br/blog). Quando "image" nao e passada,
// cai no cabecalho simples anterior (compat com paginas sem foto, ex. ferramenta).
export function ArticleHero({ eyebrow, title, image, breadcrumbs, author, published }: Props) {
  if (!image) {
    return (
      <header style={{ padding: '32px 0 16px', borderBottom: '1px solid var(--line)' }}>
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
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

  return (
    <header
      className="full-bleed"
      style={{
        position: 'relative',
        minHeight: 480,
        display: 'flex',
        alignItems: 'flex-end',
        backgroundImage: `linear-gradient(180deg, rgba(0,20,54,0.45) 0%, rgba(0,20,54,0.68) 60%, rgba(0,20,54,0.88) 100%), url(${image.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 20%',
        color: '#fff',
      }}
    >
      <div className="wrap" style={{ padding: '28px 20px 32px', width: '100%' }}>
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} onDark />}
        {eyebrow && (
          <span
            style={{
              display: 'inline-block',
              fontSize: 12,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#1b2430',
              fontWeight: 700,
              background: 'var(--gold)',
              borderRadius: 4,
              padding: '4px 10px',
              margin: '4px 0 14px',
            }}
          >
            {eyebrow}
          </span>
        )}
        <h1 style={{ fontSize: 36, lineHeight: 1.2, margin: 0, color: '#fff' }}>{title}</h1>
        {(author || published) && (
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.78)', margin: '16px 0 0' }}>
            {author && <>Por {author}</>}
            {author && published && ' · '}
            {published && <>{published}</>}
          </p>
        )}
      </div>
      {image.credit && (
        <p
          style={{
            fontSize: 11,
            color: 'rgba(255,255,255,0.55)',
            textAlign: 'right',
            margin: 0,
            padding: '0 20px 8px',
          }}
        >
          Foto: {image.credit.photographer} no{' '}
          <a href="https://www.pexels.com" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Pexels
          </a>
        </p>
      )}
    </header>
  );
}
