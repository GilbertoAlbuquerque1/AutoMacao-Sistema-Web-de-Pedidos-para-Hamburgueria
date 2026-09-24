import React from 'react';
import './Header.css';

function Header({ cartCount, onOpenCart }) {
  return (
    <header className="header">
      <div className="logo">
        <h1>👑 DOM</h1>
        <span>HAMBÚRGUERES</span>
      </div>
      
      <nav className="nav-desktop">
        <a href="#inicio">Início</a>
        <a href="#cardapio">Cardápio</a>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
      </nav>
      
      <button className="btn-primary" onClick={onOpenCart}>
        Fazer Pedido {cartCount > 0 && `(${cartCount})`}
      </button>
    </header>
  );
}

export default Header;