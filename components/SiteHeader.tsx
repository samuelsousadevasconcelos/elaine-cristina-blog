// Header identico ao da LP (elaine-cristina-advocacia-lp), com os links de
// navegacao apontando de volta pro site principal — pedido do Samuel:
// "coloque para ter como ir para a landing page".

const LP = 'https://advocaciaelainecristina.com.br';
const WHATSAPP =
  'https://wa.me/5511983134086?text=Ol%C3%A1!%20Vim%20pelo%20blog%20da%20Elaine%20Cristina%20Advocacia%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20div%C3%B3rcio%20extrajudicial.';

export function SiteHeader() {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar-links">
            <span className="topbar-email">elainecristinnaadv@gmail.com</span>
            <a className="topbar-phone" href="tel:+5511983134086">
              (11) 98313-4086
            </a>
          </div>
          <div className="topbar-links">
            <a className="topbar-whatsapp" href={WHATSAPP} target="_blank" rel="noopener">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container">
          <a className="brand brand-logo" href={LP}>
            <img src="/assets/logo-elaine-cristina.png" alt="Elaine Cristina Advocacia" />
          </a>
          <nav className="main-nav">
            <a href={LP}>Início</a>
            <a href={`${LP}#sobre`}>Sobre</a>
            <a href="/" style={{ color: 'var(--gold)' }}>
              Conteúdo
            </a>
            <a href={`${LP}#contato`}>Contato</a>
          </nav>
          <div className="header-right">
            <a className="btn btn-gold" href={WHATSAPP} target="_blank" rel="noopener">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
