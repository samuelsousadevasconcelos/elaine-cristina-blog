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

// DE-004 (Wave 1) — "fonte OAB/institucional, nunca preco da Elaine" (CONTENT_MAP.md).
// Nenhum valor em R$ especifico e citado aqui: a tabela de emolumentos varia por faixa de
// bens e e definida pelo Estado (ANOREG-SP), e honorarios sao vedados de divulgacao
// publica pelo Codigo de Etica da OAB (Provimento 205/2021) — anti-fabricacao (secao 38
// da diretriz mestre).

export const metadata: Metadata = {
  title: 'Quanto custa um divórcio extrajudicial',
  description:
    'O custo do divórcio extrajudicial tem duas partes: os emolumentos do cartório (tabela oficial do estado) e os honorários advocatícios, definidos caso a caso. Entenda como funciona.',
};

export default function QuantoCustaPage() {
  return (
    <main className="wrap" style={{ paddingBottom: 64 }}>
      <ArticleHero
        eyebrow="Custos"
        title="Quanto custa um divórcio extrajudicial"
        breadcrumbs={[
          { href: '/', label: 'Início' },
          { href: '/divorcio-extrajudicial', label: 'Divórcio Extrajudicial' },
          { href: '/divorcio-extrajudicial/quanto-custa', label: 'Quanto custa' },
        ]}
        author="Elaine Cristina Advocacia"
        published="28 set 2026"
        image={{
          src: '/img/quanto-custa/hero.webp',
          alt: 'Pessoa usando calculadora e assinando papéis em uma análise financeira',
          credit: { photographer: 'Mikhail Nilov', photographerUrl: 'https://www.pexels.com/@mikhail-nilov' },
        }}
      />

      <DirectAnswer>
        O custo do divórcio extrajudicial tem duas partes: os <strong>emolumentos do cartório</strong>{' '}
        (valores fixados por tabela oficial do estado, que variam conforme o valor dos bens
        envolvidos) e os <strong>honorários advocatícios</strong> (definidos individualmente,
        conforme a complexidade do caso). Não existe um valor único válido para todos os casos.
      </DirectAnswer>

      <TableOfContents
        items={[
          { id: 'duas-partes', label: 'Os dois componentes do custo' },
          { id: 'emolumentos', label: 'Emolumentos do cartório' },
          { id: 'honorarios', label: 'Honorários advocatícios' },
          { id: 'como-saber', label: 'Como saber o valor do seu caso' },
        ]}
      />

      <section id="duas-partes">
        <h2>Os dois componentes do custo</h2>
        <p>
          Quando se fala em &quot;custo do divórcio em cartório&quot;, na prática está se falando
          de duas cobranças distintas, de naturezas diferentes:
        </p>
        <ul>
          <li>
            <strong>Emolumentos</strong> — a taxa cobrada pelo próprio cartório de notas pela
            lavratura da escritura pública, fixada por lei estadual.
          </li>
          <li>
            <strong>Honorários advocatícios</strong> — o valor cobrado pelo advogado pela
            orientação jurídica e elaboração dos termos, definido individualmente.
          </li>
        </ul>
      </section>

      <SummaryBox>
        Emolumentos são tabelados pelo estado e variam conforme o valor dos bens partilhados.
        Honorários são definidos caso a caso e não são divulgados publicamente, por vedação do
        próprio Código de Ética da advocacia.
      </SummaryBox>

      <section id="emolumentos">
        <h2>Emolumentos do cartório</h2>
        <p>
          Os valores cobrados pelos cartórios de notas em São Paulo seguem a tabela de custas e
          emolumentos publicada anualmente pela ANOREG-SP (Associação dos Notários e
          Registradores do Estado de São Paulo), a mesma para todos os cartórios do estado. O
          valor final varia principalmente conforme a faixa de valor dos bens envolvidos na
          partilha — por isso não é possível informar um número fixo sem conhecer os detalhes do
          caso.
        </p>
      </section>

      <section id="honorarios">
        <h2>Honorários advocatícios</h2>
        <p>
          Os honorários são combinados diretamente com a advogada, considerando a complexidade
          do caso (existência de bens, filhos, urgência, entre outros fatores). O Código de
          Ética e Disciplina da OAB e o Provimento nº 205/2021 restringem a divulgação pública de
          valores de honorários em publicidade da advocacia — por isso esse valor não é
          informado neste site, e não deve ser esperado em nenhum material de publicidade de
          advogados que siga as normas da profissão.
        </p>
      </section>

      <section id="como-saber">
        <h2>Como saber o valor do seu caso</h2>
        <p>
          Como cada situação tem características próprias (bens, filhos, urgência, documentação
          já organizada ou não), o valor exato — tanto do cartório quanto dos honorários — só é
          possível de estimar depois de uma conversa inicial sobre o seu caso.
        </p>
      </section>

      <LegalSource
        sources={[
          {
            label: 'ANOREG-SP — Tabela de Custas e Emolumentos do Estado de São Paulo',
            url: 'https://www.anoregsp.org.br/paginas/1022/tabelas-custas',
          },
          { label: 'Provimento nº 205/2021 da OAB (publicidade da advocacia)', url: 'https://www.oab.org.br' },
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

      <ContextualCTA text="Fale com a advogada para entender os custos do seu caso específico." />
      <Disclaimer />
    </main>
  );
}
