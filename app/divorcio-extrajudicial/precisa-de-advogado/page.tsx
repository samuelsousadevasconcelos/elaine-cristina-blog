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

// DE-002 (Wave 1) — merge de "precisa de advogado" (cartorio) + "amigavel precisa de
// advogado" (canibalizacao evitada na Fase 2/FASE2_ARQUITETURA.md).

export const metadata: Metadata = {
  title: 'Divórcio extrajudicial/amigável precisa de advogado?',
  description:
    'Sim: a lei exige assistência de advogado mesmo no divórcio consensual em cartório. Entenda o motivo e o que acontece se não houver acordo entre as partes.',
};

export default function PrecisaDeAdvogadoPage() {
  return (
    <main className="wrap" style={{ paddingBottom: 64 }}>
      <ArticleHero
        eyebrow="Processo"
        title="Divórcio extrajudicial/amigável precisa de advogado?"
        breadcrumbs={[
          { href: '/', label: 'Início' },
          { href: '/divorcio-extrajudicial', label: 'Divórcio Extrajudicial' },
          { href: '/divorcio-extrajudicial/precisa-de-advogado', label: 'Precisa de advogado?' },
        ]}
        author="Elaine Cristina Advocacia"
        published="28 set 2026"
        image={{
          src: '/img/precisa-de-advogado/hero.webp',
          alt: 'Advogada explicando documentos legais para clientes em ambiente de escritório',
          credit: { photographer: 'Pavel Danilyuk', photographerUrl: 'https://www.pexels.com/@pavel-danilyuk' },
        }}
      />

      <DirectAnswer>
        Sim. Mesmo sendo um procedimento extrajudicial — seja chamado de &quot;divórcio no
        cartório&quot; ou &quot;divórcio amigável&quot; — a lei exige a assistência de advogado
        para orientar as partes e auxiliar na elaboração dos termos da escritura. O tabelião não
        pode lavrar a escritura de divórcio sem essa assistência.
      </DirectAnswer>

      <TableOfContents
        items={[
          { id: 'por-que', label: 'Por que a lei exige advogado' },
          { id: 'papel', label: 'O que o advogado faz no processo' },
          { id: 'mesmo-advogado', label: 'Pode ser um advogado só para o casal?' },
          { id: 'sem-consenso', label: 'E se não houver consenso?' },
        ]}
      />

      <section id="por-que">
        <h2>Por que a lei exige advogado</h2>
        <p>
          A Lei nº 11.441/2007, regulamentada pela Resolução CNJ nº 35/2007, criou a
          possibilidade de fazer o divórcio consensual por escritura pública, sem processo
          judicial. Mas a mesma lei condicionou essa possibilidade à assistência de advogado —
          justamente porque, mesmo havendo acordo entre as partes, é preciso alguém tecnicamente
          habilitado para verificar se os requisitos legais estão preenchidos e esclarecer as
          consequências jurídicas do que está sendo assinado.
        </p>
      </section>

      <SummaryBox>
        Consenso entre o casal não dispensa advogado — dispensa apenas o processo judicial.
        A assistência jurídica continua obrigatória, seja o divórcio &quot;no cartório&quot; ou
        &quot;amigável&quot;.
      </SummaryBox>

      <section id="papel">
        <h2>O que o advogado faz no processo</h2>
        <ul>
          <li>Verifica se o caso preenche os requisitos legais para a via extrajudicial</li>
          <li>Orienta as partes sobre as consequências jurídicas do acordo</li>
          <li>Elabora os termos que vão para a escritura pública</li>
          <li>Acompanha a assinatura no cartório de notas</li>
        </ul>
      </section>

      <section id="mesmo-advogado">
        <h2>Pode ser um advogado só para o casal?</h2>
        <p>
          Essa é uma dúvida comum e depende das particularidades do caso — não é uma resposta
          padrão para todas as situações. A avaliação é feita pela advogada durante o
          atendimento, considerando os interesses de ambas as partes.
        </p>
      </section>

      <section id="sem-consenso">
        <h2>E se não houver consenso?</h2>
        <p>
          O consenso entre as partes é um dos requisitos centrais da via extrajudicial. Quando
          não há acordo, a situação normalmente segue por outro caminho jurídico — o que não
          significa que o divórcio não seja possível, apenas que a via muda.{' '}
          <a href="/divorcio-extrajudicial/extrajudicial-x-judicial">
            Entenda a diferença entre as duas vias
          </a>
          .
        </p>
      </section>

      <FAQ
        items={[
          {
            question: 'Divórcio em cartório precisa de advogado?',
            answer:
              'Sim. Mesmo sendo um procedimento extrajudicial, a lei exige a assistência de advogado para orientar as partes e auxiliar na elaboração dos termos da escritura.',
          },
          {
            question: 'Preciso estar de acordo com meu cônjuge?',
            answer:
              'O consenso entre as partes é um dos requisitos centrais da via extrajudicial. Quando não há acordo, a situação normalmente segue por outro caminho jurídico.',
          },
        ]}
      />

      <LegalSource
        sources={[
          { label: 'Lei nº 11.441/2007 (divórcio consensual extrajudicial)', url: 'https://www.planalto.gov.br' },
          { label: 'Resolução CNJ nº 35/2007', url: 'https://www.cnj.jus.br' },
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
