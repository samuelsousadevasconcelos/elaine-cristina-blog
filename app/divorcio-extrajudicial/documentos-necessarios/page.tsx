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

// DE-003 (Wave 1) — merge de "documentos para divorcio extrajudicial" +
// "documentos necessarios para divorcio" (canibalizacao evitada na Fase 2).

export const metadata: Metadata = {
  title: 'Documentos necessários para o divórcio extrajudicial',
  description:
    'Lista dos documentos geralmente exigidos para o divórcio extrajudicial em cartório: identificação, certidão de casamento e, quando aplicável, documentos dos filhos e dos bens.',
};

export default function DocumentosNecessariosPage() {
  return (
    <main className="wrap" style={{ paddingBottom: 64 }}>
      <ArticleHero
        eyebrow="Processo"
        title="Documentos necessários para o divórcio extrajudicial"
        breadcrumbs={[
          { href: '/', label: 'Início' },
          { href: '/divorcio-extrajudicial', label: 'Divórcio Extrajudicial' },
          { href: '/divorcio-extrajudicial/documentos-necessarios', label: 'Documentos necessários' },
        ]}
        author="Elaine Cristina Advocacia"
        published="28 set 2026"
        image={{
          src: '/img/documentos-necessarios/hero.webp',
          alt: 'Vista de cima de uma pasta de documentos organizada sobre uma mesa de madeira',
          credit: { photographer: 'Anete Lusina', photographerUrl: 'https://www.pexels.com/@anete-lusina' },
        }}
      />

      <DirectAnswer>
        Em geral, os documentos básicos são: documento de identificação, CPF e certidão de
        casamento atualizada. Quando aplicável, também são necessários documentos dos filhos e
        dos bens. A lista exata depende das particularidades de cada caso e é confirmada durante
        o atendimento.
      </DirectAnswer>

      <TableOfContents
        items={[
          { id: 'pessoais', label: 'Documentos pessoais' },
          { id: 'casamento', label: 'Documentos do casamento' },
          { id: 'filhos', label: 'Quando há filhos' },
          { id: 'bens', label: 'Quando há bens a partilhar' },
          { id: 'varia', label: 'Por que a lista pode variar' },
        ]}
      />

      <section id="pessoais">
        <h2>Documentos pessoais</h2>
        <ul>
          <li>Documento de identificação (RG ou outro documento oficial com foto)</li>
          <li>CPF</li>
        </ul>
      </section>

      <section id="casamento">
        <h2>Documentos do casamento</h2>
        <ul>
          <li>Certidão de casamento atualizada (emitida recentemente)</li>
          <li>Pacto antenupcial, se houver</li>
        </ul>
      </section>

      <SummaryBox>
        Identificação + CPF + certidão de casamento atualizada formam a base documental de
        qualquer caso. A partir daí, a lista cresce conforme existam filhos e bens envolvidos.
      </SummaryBox>

      <section id="filhos">
        <h2>Quando há filhos</h2>
        <p>
          Se o casal tem filhos maiores e capazes, geralmente são solicitados os documentos de
          identificação deles. Já quando há filhos menores ou incapazes, a situação exige uma
          verificação jurídica específica antes de definir se e quais documentos adicionais são
          necessários.{' '}
          <a href="/divorcio-extrajudicial/filhos-menores">
            Entenda o que muda quando há filhos menores
          </a>
          .
        </p>
      </section>

      <section id="bens">
        <h2>Quando há bens a partilhar</h2>
        <p>
          Havendo bens a serem partilhados — como imóveis, veículos ou contas conjuntas — são
          necessários os documentos que comprovem a titularidade e a situação de cada bem. A
          advogada indica a documentação específica conforme o que existir no caso.
        </p>
      </section>

      <section id="varia">
        <h2>Por que a lista pode variar</h2>
        <p>
          Cada cartório pode ter exigências próprias além dos documentos legalmente previstos, e
          cada caso tem particularidades (filhos, bens, alteração de nome, entre outros pontos)
          que mudam a lista final. Por isso a confirmação exata é sempre feita durante o
          atendimento com a advogada.
        </p>
      </section>

      <FAQ
        items={[
          {
            question: 'Quais documentos preciso apresentar?',
            answer:
              'Em geral: documento de identificação, CPF, certidão de casamento atualizada e, quando aplicável, documentos dos filhos e dos bens. A lista exata depende das particularidades de cada caso e é informada durante o atendimento.',
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
            href: '/divorcio-extrajudicial/precisa-de-advogado',
            title: 'Divórcio extrajudicial/amigável precisa de advogado?',
          },
          { href: '/divorcio-extrajudicial/quanto-custa', title: 'Quanto custa um divórcio extrajudicial' },
          {
            href: '/divorcio-extrajudicial/filhos-menores',
            title: 'Divórcio extrajudicial com filhos menores',
          },
        ]}
      />

      <ContextualCTA />
      <Disclaimer />
    </main>
  );
}
