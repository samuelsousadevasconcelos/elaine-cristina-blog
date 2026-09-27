-- Schema inicial do hub editorial (Divorcio Extrajudicial).
-- Espelha as colunas do CONTENT_MAP.csv (Fase 3) para facilitar a migracao do plano pro banco.

create table if not exists contents (
  id text primary key,               -- ex: DE-001
  slug text unique not null,
  h1 text not null,
  cluster text not null,
  primary_intent text,
  priority text not null,            -- P0..P3
  status text not null default 'PROPOSED', -- PROPOSED | DRAFT_AI | READY_FOR_LEGAL_REVIEW | APPROVED | PUBLISHED
  answer_owner boolean not null default false,
  body_json jsonb,
  published_at timestamptz,
  updated_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists contents_status_idx on contents (status);
create index if not exists contents_cluster_idx on contents (cluster);
