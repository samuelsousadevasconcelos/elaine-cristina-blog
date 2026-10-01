# Elaine Cristina Blog — Hub editorial (Divórcio Extrajudicial)

Hospedado na VPS do Samuel (Easypanel, projeto `simulador-thaonseguros`, serviços
`elaine-blog` + `elaine-blog-db`), com o domínio real da Elaine
(`blog.advocaciaelainecristina.com.br`) apontado via DNS.

- Wave 1 (Fase 6) publicada: 8 artigos sobre Divórcio Extrajudicial +
  página da autora. Ver `CONTENT_MAP.md` no Kit pra lista completa.
- Componentes de template em `components/` (ArticleHero, DirectAnswer, FAQ, etc.) —
  ver demonstração em `/exemplo-template`.
- Indexação liberada em 2026-10-01 (autorização do Samuel). `robots.txt`/sitemap
  são gerados por `app/robots.ts`/`app/sitemap.ts` — não existe mais toggle por
  env var (`NOINDEX_ALL`): descobrimos que o Easypanel só injeta env vars em
  runtime do container, não no build, e o Next.js resolve essas rotas (e o
  Middleware) em build time — então a env var nunca refletia de verdade sem
  rebuild. Pra bloquear indexação de novo no futuro, edite `app/robots.ts`
  direto.
