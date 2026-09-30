// Footer identico ao da LP (mesma marca, mesmo NAP real — nada inventado).

const LP = 'https://advocaciaelainecristina.com.br';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a className="brand brand-logo" href={LP}>
              <img src="/assets/logo-elaine-cristina-dourado.png" alt="Elaine Cristina Advocacia" />
            </a>
            <p style={{ maxWidth: '32ch', marginTop: 16 }}>
              Sociedade Individual de Advocacia. Direito de Família, Sucessões e Previdenciário.
            </p>
          </div>
          <div>
            <h4>Navegação</h4>
            <a href={`${LP}#sobre`}>Sobre</a>
            <a href={`${LP}#fale-conosco`}>Fale conosco</a>
            <a href="/">Conteúdo</a>
          </div>
          <div>
            <h4>Contato</h4>
            <p>
              Elaine Cristina Alves de Souza — OAB/SP 215.743
              <br />
              Av. Nordestina, 4946-A, Sala 05
              <br />
              Vila Nova Curuçá, São Paulo/SP, CEP 08032-000
            </p>
            <p>
              <a href="tel:+5511983134086">(11) 98313-4086</a>
              <br />
              <a href="mailto:elainecristinnaadv@gmail.com">elainecristinnaadv@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Elaine Cristina Advocacia. Todos os direitos reservados.</span>
          <a href={`${LP}/privacidade.html`} style={{ color: 'var(--gold)' }}>
            Política de Privacidade
          </a>
        </div>
        <p style={{ opacity: 0.6, fontSize: '0.76rem', marginTop: 16 }}>
          Publicidade em conformidade com o Provimento nº 205/2021 da OAB. Este conteúdo possui
          caráter exclusivamente informativo e não substitui a análise jurídica individual do
          caso.
        </p>
      </div>
    </footer>
  );
}
