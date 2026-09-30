import type { Metadata } from 'next';
import { ArticleHero } from '@/components/ArticleHero';
import { DirectAnswer } from '@/components/DirectAnswer';
import { FerramentaAutoavaliacao } from '@/components/FerramentaAutoavaliacao';
import { LegalSource } from '@/components/LegalSource';
import { AuthorBox } from '@/components/AuthorBox';
import { RelatedArticles } from '@/components/RelatedArticles';
import { ContextualCTA } from '@/components/ContextualCTA';
import { LastUpdated } from '@/components/LastUpdated';
import { Disclaimer } from '@/components/Disclaimer';

// DE-008 (Wave 1) — "ferramenta orientativa, com disclaimer, sem parecer automatico"
// (CONTENT_MAP.md). Checklist de base identico ao ja publicado na LP (secao #checklist).

export const metadata: Metadata = {
  title: 'Ferramenta: Meu caso pode ser feito em cartório?',
  description:
    'Ferramenta orientativa para entender, de forma inicial, se o seu divórcio pode se enquadrar na via extrajudicial. Não substitui a análise jurídica individual do caso.',
};

export default function FerramentaCartorioPage() {
  return (
    <main className="wrap" style={{ paddingBottom: 64 }}>
      <ArticleHero
        eyebrow="Ferramenta orientativa"
        title="Meu caso pode ser feito em cartório?"
        breadcrumbs={[
          { href: '/', label: 'Início' },
          { href: '/divorcio-extrajudicial', label: 'Divórcio Extrajudicial' },
          { href: '/divorcio-extrajudicial/ferramenta-cartorio', label: 'Ferramenta de autoavaliação' },
        ]}
        author="Elaine Cristina Advocacia"
        published="28 set 2026"
        image={{
          src: '/img/ferramenta-cartorio/hero.webp',
          alt: 'Lista de verificação organizada em uma prancheta sobre a mesa',
          credit: { photographer: 'RDNE Stock project', photographerUrl: 'https://www.pexels.com/@rdne' },
        }}
      />

      <DirectAnswer>
        A possibilidade de fazer o divórcio pela via extrajudicial depende de alguns fatores —
        principalmente o consenso entre as partes e a situação dos filhos, quando houver.
        Responda as perguntas abaixo para uma orientação inicial. Essa ferramenta não substitui a
        análise jurídica do seu caso.
      </DirectAnswer>

      <FerramentaAutoavaliacao />

      <section id="o-que-avaliar">
        <h2>O que é avaliado, de forma completa, no atendimento</h2>
        <p>Além do consenso e da situação dos filhos, a verificação completa considera:</p>
        <ul>
          <li>Concordância sobre os pontos que precisam ser formalizados</li>
          <li>Existência e situação dos bens</li>
          <li>Questões relacionadas a alimentos, quando aplicáveis</li>
          <li>Uso ou alteração do sobrenome</li>
          <li>Eventual situação de gravidez</li>
          <li>Demais requisitos legais aplicáveis ao caso</li>
        </ul>
        <p>
          Quer entender melhor cada um desses pontos antes de conversar com a advogada?{' '}
          <a href="/divorcio-extrajudicial">Leia o guia completo sobre divórcio extrajudicial</a>.
        </p>
      </section>

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
          {
            href: '/divorcio-extrajudicial/extrajudicial-x-judicial',
            title: 'Divórcio extrajudicial x judicial: qual a diferença',
          },
        ]}
      />

      <ContextualCTA text="Fale com a advogada para uma análise completa do seu caso." />
      <Disclaimer />
    </main>
  );
}
