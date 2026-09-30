import type { Metadata } from 'next';
import { ArticleHero } from '@/components/ArticleHero';
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

// DE-005 (Wave 1) — Answer Owner do diferencial CNJ Emenda 06/2024 (FASE2_ARQUITETURA.md).
// Texto sobre a Emenda 06/2024 reaproveitado literalmente do FAQ ja validado na LP —
// conteudo juridico sensivel, nao reformulado pra evitar risco de imprecisao.

export const metadata: Metadata = {
  title: 'Divórcio extrajudicial com filhos menores',
  description:
    'Desde 2024 o CNJ admite hipóteses de divórcio consensual extrajudicial mesmo com filhos menores ou incapazes, quando guarda, convivência e alimentos já estão resolvidos. Entenda.',
};

export default function FilhosMenoresPage() {
  return (
    <main className="wrap" style={{ paddingBottom: 64 }}>
      <ArticleHero
        eyebrow="Situações específicas"
        title="Divórcio extrajudicial com filhos menores"
        breadcrumbs={[
          { href: '/', label: 'Início' },
          { href: '/divorcio-extrajudicial', label: 'Divórcio Extrajudicial' },
          { href: '/divorcio-extrajudicial/filhos-menores', label: 'Filhos menores' },
        ]}
        author="Elaine Cristina Advocacia"
        published="28 set 2026"
        image={{
          src: '/img/filhos-menores/hero.webp',
          alt: 'Adulto caminhando de mãos dadas com uma criança, em um passeio tranquilo',
          credit: { photographer: 'Atlantic Ambience', photographerUrl: 'https://www.pexels.com/@freestockpro' },
        }}
      />

      <DirectAnswer>
        Desde 2024 o CNJ passou a admitir determinadas hipóteses de divórcio consensual
        extrajudicial mesmo havendo filhos menores ou incapazes, desde que guarda, convivência e
        alimentos já tenham sido resolvidos previamente. Por isso, cada caso precisa de uma
        verificação específica — não existe uma regra fixa e universal.
      </DirectAnswer>

      <TableOfContents
        items={[
          { id: 'regra-geral', label: 'A regra geral' },
          { id: 'mudanca-2024', label: 'A mudança de 2024' },
          { id: 'requisitos', label: 'O que precisa estar resolvido antes' },
          { id: 'cada-caso', label: 'Por que cada caso exige análise' },
        ]}
      />

      <section id="regra-geral">
        <h2>A regra geral</h2>
        <p>
          Tradicionalmente, a Resolução CNJ nº 35/2007 exigia que, havendo filhos menores ou
          incapazes do casal, o divórcio passasse necessariamente pela via judicial — mesmo que
          houvesse consenso entre os pais sobre tudo. A justificativa era a proteção dos
          interesses dos filhos, que exigiria a participação do Ministério Público e do Poder
          Judiciário.
        </p>
      </section>

      <SummaryBox>
        A regra de que &quot;filhos menores sempre exigem via judicial&quot; deixou de ser
        absoluta em 2024 — mas continua sendo o ponto de partida da análise, não uma exceção
        automática.
      </SummaryBox>

      <section id="mudanca-2024">
        <h2>A mudança de 2024</h2>
        <p>
          Em 2024, o CNJ atualizou o entendimento sobre o tema, passando a admitir, em
          determinadas hipóteses, o divórcio consensual por via extrajudicial mesmo havendo
          filhos menores ou incapazes. Essa é uma mudança relativamente recente e ainda pouco
          conhecida — por isso vale confirmar a situação específica do seu caso com uma
          advogada atualizada sobre o tema.
        </p>
      </section>

      <section id="requisitos">
        <h2>O que precisa estar resolvido antes</h2>
        <p>Para que essa hipótese se aplique, as questões relacionadas aos filhos precisam já estar resolvidas, entre elas:</p>
        <ul>
          <li>Guarda</li>
          <li>Convivência (o antigo &quot;regime de visitas&quot;)</li>
          <li>Alimentos</li>
        </ul>
        <p>
          Isso normalmente significa que esses pontos já foram definidos anteriormente — por
          acordo homologado judicialmente, por exemplo — e o que resta é formalizar o divórcio
          em si.
        </p>
      </section>

      <section id="cada-caso">
        <h2>Por que cada caso exige análise</h2>
        <p>
          Não existe uma regra fixa e universal: a possibilidade de usar a via extrajudicial
          nesses casos depende de como cada um dos requisitos está preenchido. Por isso a
          verificação é sempre feita caso a caso, durante o atendimento com a advogada — nunca
          por uma resposta padronizada.{' '}
          <a href="/divorcio-extrajudicial/extrajudicial-x-judicial">
            Veja a diferença entre a via extrajudicial e a judicial
          </a>
          .
        </p>
      </section>

      <FAQ
        items={[
          {
            question: 'É possível fazer divórcio consensual mesmo tendo filhos?',
            answer:
              'Em determinadas hipóteses, sim — inclusive com filhos menores ou incapazes, desde que guarda, convivência e alimentos já tenham sido resolvidas previamente. É uma atualização de 2024 do CNJ, e por isso vale confirmar a situação específica do seu caso.',
          },
        ]}
      />

      <LegalSource
        sources={[
          {
            label: 'Resolução CNJ nº 35/2007 (com atualizações, incluindo a Emenda nº 06/2024)',
            url: 'https://www.cnj.jus.br',
          },
        ]}
      />

      <AuthorBox />
      <LastUpdated published="28/09/2026" />

      <RelatedArticles
        items={[
          { href: '/divorcio-extrajudicial', title: 'Divórcio Extrajudicial: Guia Completo' },
          {
            href: '/divorcio-extrajudicial/documentos-necessarios',
            title: 'Documentos necessários para o divórcio extrajudicial',
          },
          {
            href: '/divorcio-extrajudicial/extrajudicial-x-judicial',
            title: 'Divórcio extrajudicial x judicial: qual a diferença',
          },
          {
            href: '/elaine-cristina-advogada-de-familia',
            title: 'Sobre a Elaine Cristina — Advogada de Família (OAB/SP 215.743)',
          },
        ]}
      />

      <ContextualCTA />
      <Disclaimer />
    </main>
  );
}
