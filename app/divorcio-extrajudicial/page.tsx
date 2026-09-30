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

// DE-001 (Wave 1, pilar) — CONTENT_MAP.md / FASE2_ARQUITETURA.md.
// Fatos juridicos (CNJ 35/2007, Emenda 06/2024, requisitos, documentos, passo a passo)
// reaproveitados literalmente do FAQ/copy ja publicado e validado na LP
// (elaine-cristina-advocacia-lp/frontend/public/index.html) — nada novo foi inventado.

export const metadata: Metadata = {
  title: 'Divórcio Extrajudicial: Guia Completo',
  description:
    'Como funciona o divórcio extrajudicial em cartório, quem pode fazer, documentos, custos e quando é preciso ir à via judicial. Guia da Elaine Cristina Advocacia, OAB/SP 215.743.',
};

export default function PilarDivorcioExtrajudicialPage() {
  return (
    <main className="wrap" style={{ paddingBottom: 64 }}>
      <ArticleHero
        eyebrow="Guia completo"
        title="Divórcio Extrajudicial: Guia Completo"
        breadcrumbs={[
          { href: '/', label: 'Início' },
          { href: '/divorcio-extrajudicial', label: 'Divórcio Extrajudicial' },
        ]}
        author="Elaine Cristina Advocacia"
        published="28 set 2026"
        image={{
          src: '/img/divorcio-extrajudicial/hero.webp',
          alt: 'Cliente revisando e assinando documentos em ambiente profissional, ilustrando a formalização do divórcio extrajudicial',
          credit: { photographer: 'Mikhail Nilov', photographerUrl: 'https://www.pexels.com/@mikhail-nilov' },
        }}
      />

      <DirectAnswer>
        O divórcio extrajudicial é feito por escritura pública em cartório de notas, sem
        processo judicial, quando o casal está de acordo e a situação preenche os requisitos
        legais aplicáveis. Mesmo pela via extrajudicial, a assistência de um advogado é
        obrigatória por lei — é ele quem orienta as partes, verifica os requisitos e elabora os
        termos da escritura.
      </DirectAnswer>

      <TableOfContents
        items={[
          { id: 'o-que-e', label: 'O que é o divórcio extrajudicial' },
          { id: 'requisitos', label: 'Quem pode fazer' },
          { id: 'como-funciona', label: 'Como funciona (passo a passo)' },
          { id: 'precisa-advogado', label: 'Precisa de advogado?' },
          { id: 'documentos', label: 'Documentos necessários' },
          { id: 'custos', label: 'Quanto custa' },
          { id: 'filhos-menores', label: 'E se houver filhos menores?' },
          { id: 'quando-nao-cabe', label: 'Quando não cabe a via extrajudicial' },
        ]}
      />

      <section id="o-que-e">
        <h2>O que é o divórcio extrajudicial</h2>
        <p>
          O divórcio extrajudicial é realizado por meio de escritura pública em cartório,
          substituindo a necessidade de um processo judicial para formalizar o divórcio, desde
          que a situação do casal esteja de acordo com os requisitos legais aplicáveis. A base
          legal é a Resolução CNJ nº 35/2007, que regulamenta a aplicação da Lei nº 11.441/2007
          pelos serviços notariais e de registro.
        </p>
      </section>

      <SummaryBox>
        Consenso entre as partes + requisitos legais preenchidos + orientação de um advogado +
        lavratura da escritura em cartório de notas — esses são os quatro elementos que, juntos,
        permitem o divórcio pela via extrajudicial.
      </SummaryBox>

      <section id="requisitos">
        <h2>Quem pode fazer divórcio extrajudicial</h2>
        <p>A verificação é sempre individual, mas os pontos avaliados costumam incluir:</p>
        <ul>
          <li>Existência de consenso entre os envolvidos</li>
          <li>Concordância sobre os pontos que precisam ser formalizados</li>
          <li>Situação dos filhos, quando houver</li>
          <li>Existência e situação dos bens</li>
          <li>Questões relacionadas a alimentos, quando aplicáveis</li>
          <li>Uso ou alteração do sobrenome</li>
          <li>Eventual situação de gravidez</li>
          <li>Demais requisitos legais aplicáveis ao caso</li>
        </ul>
        <p>
          Quer verificar seu caso de forma orientativa antes de falar com a advogada?{' '}
          <a href="/divorcio-extrajudicial/ferramenta-cartorio">
            Use a ferramenta de autoavaliação
          </a>
          .
        </p>
      </section>

      <section id="como-funciona">
        <h2>Como funciona o divórcio extrajudicial (passo a passo)</h2>
        <ol>
          <li>
            <strong>Conversa inicial</strong> — contato com o escritório para combinar o
            atendimento.
          </li>
          <li>
            <strong>Definição dos termos</strong> — verificação dos requisitos legais e
            definição dos pontos do acordo: filhos, bens e demais questões, quando houver.
          </li>
          <li>
            <strong>Preparação da documentação</strong> — reunião da documentação necessária, que
            varia conforme a situação do casal.
          </li>
          <li>
            <strong>Assinatura da escritura pública</strong> — presencialmente no cartório de
            notas ou por videoconferência, conforme o procedimento aplicável ao caso.
          </li>
        </ol>
      </section>

      <section id="precisa-advogado">
        <h2>Precisa de advogado?</h2>
        <p>
          Sim. Mesmo sendo um procedimento extrajudicial, a lei exige a assistência de advogado
          para orientar as partes e auxiliar na elaboração dos termos da escritura — o tabelião
          não pode lavrar a escritura sem essa assistência.{' '}
          <a href="/divorcio-extrajudicial/precisa-de-advogado">Entenda em detalhes</a>.
        </p>
      </section>

      <section id="documentos">
        <h2>Documentos necessários</h2>
        <p>
          Em geral: documento de identificação, CPF, certidão de casamento atualizada e, quando
          aplicável, documentos dos filhos e dos bens. A lista exata depende das particularidades
          de cada caso.{' '}
          <a href="/divorcio-extrajudicial/documentos-necessarios">Veja a lista completa</a>.
        </p>
      </section>

      <section id="custos">
        <h2>Quanto custa</h2>
        <p>
          O custo tem duas partes: os emolumentos do cartório (tabela oficial do estado) e os
          honorários advocatícios (definidos individualmente conforme o caso).{' '}
          <a href="/divorcio-extrajudicial/quanto-custa">Entenda como o valor é composto</a>.
        </p>
      </section>

      <section id="filhos-menores">
        <h2>E se houver filhos menores?</h2>
        <p>
          Desde 2024 o CNJ passou a admitir determinadas hipóteses de divórcio consensual
          extrajudicial mesmo havendo filhos menores ou incapazes, desde que guarda, convivência
          e alimentos já tenham sido resolvidos previamente. Por isso, cada caso precisa de uma
          verificação específica — não existe uma regra fixa e universal.{' '}
          <a href="/divorcio-extrajudicial/filhos-menores">Saiba mais sobre essa hipótese</a>.
        </p>
      </section>

      <section id="quando-nao-cabe">
        <h2>Quando não cabe a via extrajudicial</h2>
        <p>
          Se não há consenso entre as partes, ou se a situação não preenche os requisitos legais
          aplicáveis, o caminho passa a ser o processo judicial. Isso não significa que o
          divórcio não seja possível — significa que a situação precisa de uma análise jurídica
          específica para identificar o caminho adequado.{' '}
          <a href="/divorcio-extrajudicial/extrajudicial-x-judicial">
            Compare as duas vias
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
            question: 'Meu divórcio pode ser feito em cartório?',
            answer:
              'Depende das características do caso, especialmente do consenso entre os cônjuges e do preenchimento dos requisitos legais aplicáveis. Essa verificação é realizada pela advogada durante o atendimento.',
          },
          {
            question: 'É possível fazer divórcio consensual mesmo tendo filhos?',
            answer:
              'Em determinadas hipóteses, sim — inclusive com filhos menores ou incapazes, desde que guarda, convivência e alimentos já tenham sido resolvidas previamente. É uma atualização de 2024 do CNJ, e por isso vale confirmar a situação específica do seu caso.',
          },
          {
            question: 'E se meu caso não puder ser resolvido em cartório?',
            answer:
              'Isso não significa que o divórcio não seja possível — significa que a situação precisa de uma análise jurídica específica para identificar o caminho adequado.',
          },
        ]}
      />

      <LegalSource
        sources={[
          {
            label: 'Resolução CNJ nº 35/2007 (base legal do divórcio extrajudicial)',
            url: 'https://www.cnj.jus.br',
          },
          {
            label: 'Provimento nº 205/2021 da OAB (publicidade da advocacia)',
            url: 'https://www.oab.org.br',
          },
        ]}
      />

      <AuthorBox />
      <LastUpdated published="28/09/2026" />

      <RelatedArticles
        items={[
          {
            href: '/divorcio-extrajudicial/precisa-de-advogado',
            title: 'Divórcio extrajudicial/amigável precisa de advogado?',
          },
          {
            href: '/divorcio-extrajudicial/documentos-necessarios',
            title: 'Documentos necessários para o divórcio extrajudicial',
          },
          { href: '/divorcio-extrajudicial/quanto-custa', title: 'Quanto custa um divórcio extrajudicial' },
          {
            href: '/divorcio-extrajudicial/filhos-menores',
            title: 'Divórcio extrajudicial com filhos menores',
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
