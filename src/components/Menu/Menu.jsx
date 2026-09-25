import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Menu.css';

function Menu({ onAddToCart }) {
  const produtos = [
    { id: 1, nome: "LORD Clássico", preco: 13.90, imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80", descricao: "Pão brioche, hambúrguer 180g, queijo cheddar, alface, tomate e molho da casa." },
    { id: 2, nome: "LORD Bacon", preco: 15.90, imagem: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=300&q=80", descricao: "Pão brioche, hambúrguer 180g, queijo cheddar, bacon crocante, cebola caramelizada e molho." },
    { id: 3, nome: "LORD X-Tudo", preco: 17.90, imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descricao: "Pão brioche, hambúrguer 180g, queijo cheddar, bacon, ovo, alface, tomate e molho." },
    { id: 4, nome: "Batata Frita", preco: 6.90, imagem: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=300&q=80", descricao: "Porção crocante e sequinha." },
    { id: 5, nome: "Milk Chicken", preco: 12.90, imagem: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=300&q=80", descricao: "Pão brioche, frango empanado, queijo cheddar, alface, tomate e molho da casa." },
    { id: 6, nome: "Refrigerante", preco: 4.90, imagem: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&q=80", descricao: "Lata 350ml gelada." }
  ];

  return (
    <section id="cardapio" className="menu-section">
      <div className="menu-header">
        <span className="subtitle">NOSSO CARDÁPIO</span>
        <h2>Escolha seu favorito</h2>
      </div>
      
      <div className="produtos-grid">
        {produtos.map((produto) => (
          <ProductCard 
            key={produto.id} 
            produto={produto} 
            onAddToCart={onAddToCart} 
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;