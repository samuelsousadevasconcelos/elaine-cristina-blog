# Elaine Cristina Blog — Hub editorial (Divórcio Extrajudicial)

Infraestrutura provisória (Fase 4/5 da diretriz de crescimento orgânico). Hospedado
temporariamente na VPS do Samuel (Easypanel, projeto `simulador-thaonseguros`, serviços
`elaine-blog` + `elaine-blog-db`), **não** na VPS de produção da Elaine — enquanto a
proposta comercial não for aprovada/paga.

- `noindex`/`robots.txt` bloqueando tudo por padrão (`NOINDEX_ALL=true`).
- Componentes de template em `components/` (ArticleHero, DirectAnswer, FAQ, etc.) —
  ver demonstração em `/exemplo-template`.
- Nenhum artigo do CONTENT_MAP (Fase 3) foi escrito ainda — isso é Fase 6, ainda não autorizada.
- Migração futura: anexar domínio/subdomínio da Elaine ao mesmo serviço Easypanel,
  trocar `NOINDEX_ALL` para `false`, enviar sitemap ao Search Console.
