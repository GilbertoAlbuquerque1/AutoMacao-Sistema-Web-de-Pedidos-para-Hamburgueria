import React, { useState } from 'react';
import Header from '/src/components/Header/Header';
import Hero from '/src/components/Hero/Hero';
import Menu from '/src/components/Menu/Menu';
import Footer from '/src/components/Footer/Footer';
import Cart from '/src/components/Cart/Cart';

import './App.css';

function App() {
  // Estado do carrinho de compras (lista de itens)
  const [cartItems, setCartItems] = useState([]);
  // Estado para controlar se o carrinho está aberto ou fechado
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Função para adicionar ao carrinho
  const addToCart = (produto) => {
    setCartItems((prevItems) => {
      // Verifica se o produto já está no carrinho
      const itemExiste = prevItems.find((item) => item.id === produto.id);
      
      if (itemExiste) {
        // Se existe, aumenta a quantidade
        return prevItems.map((item) => 
          item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      }
      // Se não existe, adiciona com quantidade 1
      return [...prevItems, { ...produto, quantidade: 1 }];
    });
    
    // Opcional: abrir o carrinho automaticamente ao adicionar
    // setIsCartOpen(true); 
  };

  // Função para alterar quantidade (aumentar ou diminuir)
  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) => 
      prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantidade: item.quantidade + delta };
        }
        return item;
      }).filter((item) => item.quantidade > 0) // Remove se a quantidade for menor que 1
    );
  };

  // Calcula a quantidade total de itens para mostrar no Header
  const cartTotalItems = cartItems.reduce((total, item) => total + item.quantidade, 0);

  return (
    <div className="app-container">
      {/* Passamos as informações necessárias como props */}
      <Header cartCount={cartTotalItems} onOpenCart={() => setIsCartOpen(true)} />
      
      <Hero />
      
      {/* Passamos a função de adicionar ao carrinho para o Menu */}
      <Menu onAddToCart={addToCart} />
      
      <section id="sobre" className="sobre-section">
        <div className="sobre-content">
          <h2>Sobre Nós</h2>
          <p>A DOM Hambúrgueres nasceu da paixão por hambúrgueres artesanais de verdade. Utilizamos apenas ingredientes selecionados e carne fresca, garantindo o autêntico sabor do fogo em cada mordida. Nossa missão é proporcionar a melhor experiência para você!</p>
        </div>
      </section>

      <Footer />

      {/* Renderizamos o Carrinho condicionalmente */}
      {isCartOpen && (
        <Cart 
          cartItems={cartItems} 
          onClose={() => setIsCartOpen(false)} 
          onUpdateQuantity={updateQuantity}
          onClearCart={() => setCartItems([])}
        />
      )}
    </div>
  );
}

export default App;