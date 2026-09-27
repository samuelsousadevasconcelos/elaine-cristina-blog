// Datas reais apenas. Uma atualizacao deve representar mudanca real de conteudo
// (secao 21 da diretriz) — nunca alterar dateModified artificialmente.
export function LastUpdated({ published, updated }: { published: string; updated?: string }) {
  return (
    <p style={{ fontSize: 13, color: 'var(--ink-faint)', margin: '8px 0 0' }}>
      Publicado em {published}
      {updated && updated !== published ? ` · Atualizado em ${updated}` : ''}
    </p>
  );
}
