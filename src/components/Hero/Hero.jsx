import React from 'react';
import './Hero.css';

function Hero() {
  const heroImgUrl = "https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=800&q=80";

  return (
    <section id="inicio" className="hero">
      <div className="hero-text">
        <span className="subtitle">Bem-vindo ao LORD DOS HAMBÚRGUERES</span>
        <h1 className="title">O Verdadeiro<br /><span className="highlight">Sabor do Fogo</span></h1>
        <p className="description">
          Hambúrgueres artesanais, ingredientes selecionados e muito sabor em cada mordida.
        </p>
        <a href="#cardapio" className="btn-primary">
          Ver Cardápio
        </a>
      </div>
      
      <div className="hero-image-container">
        <img src={heroImgUrl} alt="Hambúrguer artesanal delicioso" />
      </div>
    </section>
  );
}

export default Hero;