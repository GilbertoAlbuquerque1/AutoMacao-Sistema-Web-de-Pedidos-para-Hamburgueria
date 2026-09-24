import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>👑 DOM</h2>
          <span>HAMBÚRGUERES</span>
          <p>O verdadeiro sabor do fogo.</p>
        </div>
        
        <div className="footer-links">
          <h3>Navegação</h3>
          <a href="#inicio">Início</a>
          <a href="#cardapio">Cardápio</a>
          <a href="#sobre">Sobre</a>
        </div>

        <div className="footer-social">
          <h3>Redes Sociais</h3>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">WhatsApp</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DOM Hambúrgueres. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;