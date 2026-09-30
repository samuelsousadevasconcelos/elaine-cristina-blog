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

// DE-006 (Wave 1) — comparacao extrajudicial x judicial (FASE2_ARQUITETURA.md).

export const metadata: Metadata = {
  title: 'Divórcio extrajudicial x judicial: qual a diferença',
  description:
    'Quando o divórcio pode ser feito em cartório e quando precisa passar pelo processo judicial. Entenda os requisitos de cada via e como saber qual se aplica ao seu caso.',
};

export default function ExtrajudicialXJudicialPage() {
  return (
    <main className="wrap" style={{ paddingBottom: 64 }}>
      <ArticleHero
        eyebrow="Comparação"
        title="Divórcio extrajudicial x judicial: qual a diferença"
        breadcrumbs={[
          { href: '/', label: 'Início' },
          { href: '/divorcio-extrajudicial', label: 'Divórcio Extrajudicial' },
          { href: '/divorcio-extrajudicial/extrajudicial-x-judicial', label: 'Extrajudicial x judicial' },
        ]}
        author="Elaine Cristina Advocacia"
        published="28 set 2026"
        image={{
          src: '/img/extrajudicial-x-judicial/hero.webp',
          alt: 'Colunas arquitetônicas clássicas, remetendo a um prédio institucional',
          credit: { photographer: 'Brett Sayles', photographerUrl: 'https://www.pexels.com/@brett-sayles' },
        }}
      />

      <DirectAnswer>
        O divórcio extrajudicial é feito por escritura pública em cartório, exige consenso entre
        as partes e, em regra, ausência de filhos menores ou incapazes (salvo a hipótese admitida
        pelo CNJ desde 2024). Já o divórcio judicial passa por um processo no Poder Judiciário e
        é o caminho necessário quando não há consenso ou quando a situação não preenche os
        requisitos da via extrajudicial.
      </DirectAnswer>

      <TableOfContents
        items={[
          { id: 'quando-cabe', label: 'Quando cabe cada via' },
          { id: 'requisitos', label: 'Requisitos comuns e diferentes' },
          { id: 'formalidade', label: 'Formalidade e etapas' },
          { id: 'como-saber', label: 'Como saber qual se aplica ao seu caso' },
        ]}
      />

      <section id="quando-cabe">
        <h2>Quando cabe cada via</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '2px solid var(--line-strong)' }}>
              <th style={{ padding: '8px 6px' }}></th>
              <th style={{ padding: '8px 6px' }}>Extrajudicial (cartório)</th>
              <th style={{ padding: '8px 6px' }}>Judicial</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--line)' }}>
              <td style={{ padding: '8px 6px', fontWeight: 600 }}>Consenso</td>
              <td style={{ padding: '8px 6px' }}>Obrigatório</td>
              <td style={{ padding: '8px 6px' }}>Não é exigido</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--line)' }}>
              <td style={{ padding: '8px 6px', fontWeight: 600 }}>Filhos menores/incapazes</td>
              <td style={{ padding: '8px 6px' }}>
                Só em hipóteses específicas (
                <a href="/divorcio-extrajudicial/filhos-menores">Emenda CNJ 2024</a>)
              </td>
              <td style={{ padding: '8px 6px' }}>Sempre admitido</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--line)' }}>
              <td style={{ padding: '8px 6px', fontWeight: 600 }}>Onde é formalizado</td>
              <td style={{ padding: '8px 6px' }}>Cartório de notas (escritura pública)</td>
              <td style={{ padding: '8px 6px' }}>Poder Judiciário (processo)</td>
            </tr>
            <tr>
              <td style={{ padding: '8px 6px', fontWeight: 600 }}>Assistência de advogado</td>
              <td style={{ padding: '8px 6px' }}>Obrigatória</td>
              <td style={{ padding: '8px 6px' }}>Obrigatória</td>
            </tr>
          </tbody>
        </table>
      </section>

      <SummaryBox>
        A via extrajudicial não é &quot;mais fraca&quot; nem &quot;menos oficial&quot; que a
        judicial — é apenas o caminho previsto em lei para situações de consenso pleno. Fora
        desse cenário, a via judicial é quem garante que a situação seja adequadamente resolvida.
      </SummaryBox>

      <section id="requisitos">
        <h2>Requisitos comuns e diferentes</h2>
        <p>
          Em ambas as vias, a assistência de advogado é obrigatória. A diferença central está no
          consenso: sem acordo entre as partes sobre todos os pontos (filhos, bens, alimentos,
          quando aplicáveis), a via extrajudicial não é possível, e o caso segue para o
          Judiciário — que tem instrumentos próprios para resolver os pontos em que não há
          acordo.
        </p>
      </section>

      <section id="formalidade">
        <h2>Formalidade e etapas</h2>
        <p>
          O divórcio extrajudicial é formalizado por escritura pública, assinada
          presencialmente no cartório de notas ou por videoconferência, conforme o procedimento
          aplicável ao caso. O divórcio judicial segue o rito processual próprio, com
          participação do juiz e, quando há filhos menores envolvidos, do Ministério Público.
          Cada caso tem seu próprio andamento — não há um prazo padrão válido para todos.
        </p>
      </section>

      <section id="como-saber">
        <h2>Como saber qual se aplica ao seu caso</h2>
        <p>
          A resposta depende da situação concreta: existência de consenso, situação dos filhos,
          bens e demais pontos que precisam ser resolvidos. Essa verificação é feita pela
          advogada durante o atendimento.{' '}
          <a href="/divorcio-extrajudicial/ferramenta-cartorio">
            Use a ferramenta de autoavaliação
          </a>{' '}
          para uma orientação inicial.
        </p>
      </section>

      <FAQ
        items={[
          {
            question: 'E se meu caso não puder ser resolvido em cartório?',
            answer:
              'Isso não significa que o divórcio não seja possível — significa que a situação precisa de uma análise jurídica específica para identificar o caminho adequado, normalmente a via judicial.',
          },
        ]}
      />

      <LegalSource
        sources={[{ label: 'Resolução CNJ nº 35/2007', url: 'https://www.cnj.jus.br' }]}
      />

      <AuthorBox />
      <LastUpdated published="28/09/2026" />

      <RelatedArticles
        items={[
          { href: '/divorcio-extrajudicial', title: 'Divórcio Extrajudicial: Guia Completo' },
          {
            href: '/divorcio-extrajudicial/filhos-menores',
            title: 'Divórcio extrajudicial com filhos menores',
          },
          { href: '/divorcio-extrajudicial/quanto-custa', title: 'Quanto custa um divórcio extrajudicial' },
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
