import type { Metadata } from 'next';
import './globals.css';

const noindexAll = process.env.NOINDEX_ALL !== 'false';

export const metadata: Metadata = {
  title: {
    default: 'Divórcio Extrajudicial | Elaine Cristina Advocacia',
    template: '%s | Elaine Cristina Advocacia',
  },
  description:
    'Conteúdo informativo sobre divórcio extrajudicial em cartório — Elaine Cristina Advocacia, OAB/SP 215.743.',
  robots: noindexAll
    ? { index: false, follow: false }
    : { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {noindexAll && (
          <div
            style={{
              background: '#93813f',
              color: '#fff',
              textAlign: 'center',
              fontSize: '13px',
              padding: '6px 12px',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            Ambiente de demonstração — não indexado — uso interno
          </div>
        )}
        {children}
      </body>
    </html>
  );
}
