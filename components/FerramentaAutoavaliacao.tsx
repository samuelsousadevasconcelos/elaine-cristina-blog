'use client';

import { useState } from 'react';

// DE-008 (Wave 1) — "ferramenta orientativa, com disclaimer, sem parecer automatico"
// (CONTENT_MAP.md). Nunca emite um veredito definitivo ("seu caso pode/nao pode") —
// so agrupa a resposta em faixas que sempre terminam recomendando falar com a advogada.

type Consenso = 'sim' | 'nao' | 'nao-sei' | null;
type Filhos = 'nao-tem' | 'resolvido' | 'nao-resolvido' | null;

export function FerramentaAutoavaliacao() {
  const [consenso, setConsenso] = useState<Consenso>(null);
  const [filhos, setFilhos] = useState<Filhos>(null);

  const respondido = consenso !== null && filhos !== null;

  function resultado() {
    if (!respondido) return null;

    if (consenso === 'sim' && (filhos === 'nao-tem' || filhos === 'resolvido')) {
      return {
        tom: 'positivo' as const,
        texto:
          'Pelo que você indicou, seu caso reúne alguns dos elementos centrais avaliados para a via extrajudicial (consenso e situação dos filhos, quando houver). Isso não é uma confirmação — a verificação completa dos requisitos legais só é feita pela advogada, em atendimento.',
      };
    }

    if (consenso === 'nao') {
      return {
        tom: 'atencao' as const,
        texto:
          'A falta de consenso entre as partes normalmente direciona o caso para a via judicial, não a extrajudicial. Isso não significa que o divórcio não seja possível — apenas que o caminho costuma ser outro. Vale conversar com a advogada para entender as opções.',
      };
    }

    if (filhos === 'nao-resolvido') {
      return {
        tom: 'atencao' as const,
        texto:
          'Quando há filhos menores ou incapazes e as questões de guarda, convivência e alimentos ainda não foram resolvidas, o caso normalmente exige uma análise mais aprofundada antes de definir a via aplicável. Uma conversa com a advogada é o próximo passo indicado.',
      };
    }

    return {
      tom: 'neutro' as const,
      texto:
        'Sua situação tem pontos que precisam de uma verificação mais detalhada antes de saber se a via extrajudicial se aplica. Isso é normal — a maioria dos casos precisa dessa conversa inicial.',
    };
  }

  const res = resultado();

  return (
    <div
      style={{
        background: 'var(--paper-raised)',
        border: '1px solid var(--line)',
        borderRadius: 8,
        padding: '20px 22px',
        margin: '20px 0',
      }}
    >
      <p style={{ margin: '0 0 14px', fontWeight: 600, color: 'var(--navy)' }}>
        Responda 2 perguntas para uma orientação inicial
      </p>

      <fieldset style={{ border: 'none', padding: 0, margin: '0 0 18px' }}>
        <legend style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, padding: 0 }}>
          Você e a outra parte estão de acordo sobre tudo (filhos, bens, alimentos, sobrenome)?
        </legend>
        {(
          [
            ['sim', 'Sim, estamos de acordo'],
            ['nao', 'Não, ainda há pontos em desacordo'],
            ['nao-sei', 'Ainda não sei / não conversamos sobre tudo'],
          ] as const
        ).map(([value, label]) => (
          <label key={value} style={{ display: 'block', fontSize: 14, margin: '6px 0', cursor: 'pointer' }}>
            <input
              type="radio"
              name="consenso"
              value={value}
              checked={consenso === value}
              onChange={() => setConsenso(value)}
              style={{ marginRight: 8 }}
            />
            {label}
          </label>
        ))}
      </fieldset>

      <fieldset style={{ border: 'none', padding: 0, margin: '0 0 18px' }}>
        <legend style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, padding: 0 }}>
          Há filhos menores de idade ou incapazes do casal?
        </legend>
        {(
          [
            ['nao-tem', 'Não há filhos menores/incapazes'],
            ['resolvido', 'Sim, mas guarda, convivência e alimentos já estão resolvidos'],
            ['nao-resolvido', 'Sim, e esses pontos ainda não foram resolvidos'],
          ] as const
        ).map(([value, label]) => (
          <label key={value} style={{ display: 'block', fontSize: 14, margin: '6px 0', cursor: 'pointer' }}>
            <input
              type="radio"
              name="filhos"
              value={value}
              checked={filhos === value}
              onChange={() => setFilhos(value)}
              style={{ marginRight: 8 }}
            />
            {label}
          </label>
        ))}
      </fieldset>

      {res && (
        <div
          style={{
            borderLeft: `4px solid ${res.tom === 'positivo' ? 'var(--ok)' : 'var(--gold)'}`,
            background: 'var(--paper)',
            borderRadius: 4,
            padding: '12px 16px',
            fontSize: 14,
          }}
        >
          {res.texto}
        </div>
      )}

      <p style={{ fontSize: 12, color: 'var(--ink-faint)', margin: '14px 0 0' }}>
        Esta ferramenta é orientativa e não substitui a análise jurídica individual do caso —
        não é um parecer automático nem uma decisão sobre a viabilidade do seu divórcio.
      </p>
    </div>
  );
}
