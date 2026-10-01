import type { MetadataRoute } from 'next';

// Indexacao LIBERADA em 2026-10-01 (autorizacao explicita do Samuel apos a
// Wave 1 publicada). Antes disso, este arquivo bloqueava tudo condicionado a
// NOINDEX_ALL — removido porque o Easypanel so injeta env var em runtime do
// container, e o Next.js grava process.env no bundle do build (nao e lido de
// novo depois), entao esse tipo de toggle nunca refletia a env var real sem
// rebuild. Se precisar bloquear de novo no futuro, mude este arquivo direto.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://blog.advocaciaelainecristina.com.br/sitemap.xml',
  };
}
