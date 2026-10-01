import type { MetadataRoute } from 'next';

// Sitemap da Wave 1 (Fase 6) — gerado so com as paginas reais ja publicadas.
// Datas batem com o "Publicado em" exibido em cada artigo (LastUpdated).

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://blog.advocaciaelainecristina.com.br';

const articles = [
  { path: '/divorcio-extrajudicial', priority: 1.0 },
  { path: '/divorcio-extrajudicial/precisa-de-advogado', priority: 0.8 },
  { path: '/divorcio-extrajudicial/documentos-necessarios', priority: 0.8 },
  { path: '/divorcio-extrajudicial/quanto-custa', priority: 0.8 },
  { path: '/divorcio-extrajudicial/filhos-menores', priority: 0.8 },
  { path: '/divorcio-extrajudicial/extrajudicial-x-judicial', priority: 0.8 },
  { path: '/divorcio-extrajudicial/ferramenta-cartorio', priority: 0.7 },
  { path: '/elaine-cristina-advogada-de-familia', priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: '2026-09-30',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...articles.map((a) => ({
      url: `${BASE_URL}${a.path}`,
      lastModified: '2026-09-28',
      changeFrequency: 'monthly' as const,
      priority: a.priority,
    })),
  ];
}
