import { ArticleHero } from '@/components/ArticleHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DirectAnswer } from '@/components/DirectAnswer';
import { TableOfContents } from '@/components/TableOfContents';
import { SummaryBox } from '@/components/SummaryBox';
import { LegalSource } from '@/components/LegalSource';
import { AuthorBox } from '@/components/AuthorBox';
import { FAQ } from '@/components/FAQ';
import { RelatedArticles } from '@/components/RelatedArticles';
import { ContextualCTA } from '@/components/ContextualCTA';
import { LastUpdated } from '@/components/LastUpdated';
import { Disclaimer } from '@/components/Disclaimer';

// Pagina de demonstracao do sistema de template (Fase 4).
// Texto de exemplo, claramente marcado como tal — NAO e conteudo real do site
// (a redacao do Wave 1 e Fase 6, ainda nao autorizada).

export default function ExemploTemplatePage() {
  return (
    <main className="wrap" style={{ paddingBottom: 64 }}>
      <Breadcrumbs
        items={[
          { href: '/', label: 'Início' },
          { href: '/exemplo-template', label: 'Exemplo de template' },
        ]}
      />

      <div style={{ background: '#fff3cd', border: '1px solid #e0c46b', borderRadius: 6, padding: '10px 14px', marginBottom: 16, fontSize: 13 }}>
        Página de demonstração do sistema de template — texto de exemplo, não é conteúdo publicado do site.
      </div>

      <ArticleHero eyebrow="Exemplo — Cluster Processo" title="[Exemplo] Título de artigo no padrão do template" />

      <DirectAnswer>
        Este bloco mostra onde entra a resposta direta e autocontida, respondendo a pergunta do título
        logo no início — sem introdução genérica antes.
      </DirectAnswer>

      <TableOfContents
        items={[
          { id: 'secao-1', label: 'Primeira seção' },
          { id: 'secao-2', label: 'Segunda seção' },
        ]}
      />

      <section id="secao-1">
        <h2>Primeira seção (exemplo)</h2>
        <p>Texto de exemplo — cada H2 funciona quase como uma resposta independente (passage-level optimization).</p>
      </section>

      <SummaryBox>Texto de exemplo de um resumo autocontido, que faz sentido mesmo lido isoladamente.</SummaryBox>

      <section id="secao-2">
        <h2>Segunda seção (exemplo)</h2>
        <p>Mais um trecho de exemplo, com espaço pra citar fonte quando a afirmação exigir.</p>
      </section>

      <FAQ
        items={[
          { question: 'Pergunta de exemplo 1?', answer: 'Resposta direta de exemplo.' },
          { question: 'Pergunta de exemplo 2?', answer: 'Resposta direta de exemplo.' },
        ]}
      />

      <LegalSource
        sources={[{ label: 'Exemplo de fonte primária (CNJ/OAB)', url: 'https://www.cnj.jus.br' }]}
      />

      <AuthorBox />
      <LastUpdated published="27/09/2026" />
      <RelatedArticles items={[{ href: '/', title: 'Artigo relacionado de exemplo' }]} />
      <ContextualCTA />
      <Disclaimer />
    </main>
  );
}
