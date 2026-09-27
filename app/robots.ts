import type { MetadataRoute } from 'next';

// Bloqueia indexação enquanto o projeto estiver na infraestrutura provisória
// (fora da VPS da Elaine, aguardando aprovação/pagamento da proposta).
// Quando migrar pro domínio dela, remover este disallow global.
export default function robots(): MetadataRoute.Robots {
  const noindexAll = process.env.NOINDEX_ALL !== 'false';

  if (noindexAll) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL ?? ''}/sitemap.xml`,
  };
}
