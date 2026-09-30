import type { Metadata } from 'next';
import { ArticleHero } from '@/components/ArticleHero';
import { DirectAnswer } from '@/components/DirectAnswer';
import { LegalSource } from '@/components/LegalSource';
import { RelatedArticles } from '@/components/RelatedArticles';
import { ContextualCTA } from '@/components/ContextualCTA';
import { LastUpdated } from '@/components/LastUpdated';
import { Disclaimer } from '@/components/Disclaimer';

// DE-007 (Wave 1) — pagina de entidade/autora (ENTITY_MAP, FASE2_ARQUITETURA.md).
// NAP identico ao GBP e ao site principal (dado real, nunca inventado). A foto do hero
// e generica (estante/escritorio juridico) e NAO pretende ser um retrato da Elaine —
// evita qualquer risco de personificacao com foto de banco de imagens.

export const metadata: Metadata = {
  title: 'Elaine Cristina — Advogada de Família (OAB/SP 215.743)',
  description:
    'Elaine Cristina Alves de Souza, advogada inscrita na OAB/SP sob o nº 215.743, com atuação em Direito de Família em São Paulo/SP.',
};

export default function AutoraPage() {
  return (
    <main className="wrap" style={{ paddingBottom: 64 }}>
      <ArticleHero
        eyebrow="Sobre a advogada"
        title="Elaine Cristina — Advogada de Família (OAB/SP 215.743)"
        breadcrumbs={[
          { href: '/', label: 'Início' },
          { href: '/elaine-cristina-advogada-de-familia', label: 'Sobre a Elaine Cristina' },
        ]}
        published="28 set 2026"
        image={{
          src: '/img/elaine-cristina-advogada-de-familia/hero.webp',
          alt: 'Estante de escritório jurídico com livros e estatueta da Justiça, ambiente institucional',
          credit: { photographer: 'Katrin Bolovtsova', photographerUrl: 'https://www.pexels.com/@ekaterina-bolovtsova' },
        }}
      />

      <DirectAnswer>
        Elaine Cristina Alves de Souza é advogada inscrita na OAB/SP sob o nº 215.743, com
        atuação em Direito de Família, atendendo em seu escritório em Vila Nova Curuçá, na zona
        leste de São Paulo/SP.
      </DirectAnswer>

      <section id="atuacao">
        <h2>Atuação em Direito de Família</h2>
        <p>
          A atuação da advogada é voltada ao Direito de Família, com foco em divórcio
          extrajudicial — orientação e assistência jurídica para casais que já estão de acordo e
          querem formalizar o divórcio de maneira amigável e segura, conforme os requisitos
          legais aplicáveis a cada caso. Todo atendimento inclui uma análise individualizada
          antes de qualquer orientação.
        </p>
      </section>

      <section id="localizacao">
        <h2>Localização e atendimento</h2>
        <p>
          Escritório físico em Vila Nova Curuçá, na zona leste de São Paulo/SP — atendendo
          também clientes de regiões próximas, como São Miguel Paulista. Atendimento presencial
          e online, conforme a preferência e a necessidade de cada caso.
        </p>
        <address style={{ fontStyle: 'normal', marginTop: 12 }}>
          Elaine Cristina Alves de Souza — OAB/SP 215.743
          <br />
          Av. Nordestina, 4946-A, Sala 05
          <br />
          Vila Nova Curuçá, São Paulo/SP — CEP 08032-000
          <br />
          <a href="tel:+5511983134086">(11) 98313-4086</a>
          <br />
          <a href="mailto:elainecristinnaadv@gmail.com">elainecristinnaadv@gmail.com</a>
        </address>
      </section>

      <section id="atualizacao">
        <h2>Compromisso com atualização jurídica</h2>
        <p>
          A atuação acompanha as normas mais recentes do CNJ e da OAB aplicáveis ao Direito de
          Família — incluindo mudanças recentes, como a atualização de 2024 do CNJ sobre{' '}
          <a href="/divorcio-extrajudicial/filhos-menores">
            divórcio extrajudicial com filhos menores
          </a>
          .
        </p>
      </section>

      <LegalSource
        sources={[{ label: 'Consulta de advogados — OAB/SP (verificação de inscrição)', url: 'https://www.oabsp.org.br' }]}
      />

      <LastUpdated published="28/09/2026" />

      <RelatedArticles
        items={[
          { href: '/divorcio-extrajudicial', title: 'Divórcio Extrajudicial: Guia Completo' },
          {
            href: '/divorcio-extrajudicial/extrajudicial-x-judicial',
            title: 'Divórcio extrajudicial x judicial: qual a diferença',
          },
        ]}
      />

      <ContextualCTA text="Fale com a advogada para tirar dúvidas sobre o seu caso." />
      <Disclaimer />
    </main>
  );
}
