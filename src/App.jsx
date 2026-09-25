import React, { useState } from 'react';
import Header from '/src/components/Header/Header';
import Hero from '/src/components/Hero/Hero';
import Menu from '/src/components/Menu/Menu';
import Footer from '/src/components/Footer/Footer';
import Cart from '/src/components/Cart/Cart';

import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
 
  const addToCart = (produto) => {
    setCartItems((prevItems) => {
      const itemExiste = prevItems.find((item) => item.id === produto.id);
      
      if (itemExiste) {
        return prevItems.map((item) => 
          item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      }
      return [...prevItems, { ...produto, quantidade: 1 }];
    }); 
  };

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) => 
      prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantidade: item.quantidade + delta };
        }
        return item;
      }).filter((item) => item.quantidade > 0)
    );
  };

  const cartTotalItems = cartItems.reduce((total, item) => total + item.quantidade, 0);

  return (
    <div className="app-container">
      <Header cartCount={cartTotalItems} onOpenCart={() => setIsCartOpen(true)} />
      
      <Hero />
      
      <Menu onAddToCart={addToCart} />
      
      <section id="sobre" className="sobre-section">
        <div className="sobre-content">
          <h2>Sobre Nós</h2>
          <p>A LORD DO HAMBÚRGUER nasceu da paixão por hambúrgueres artesanais de verdade. Utilizamos apenas ingredientes selecionados e carne fresca, garantindo o autêntico sabor do fogo em cada mordida. Nossa missão é proporcionar a melhor experiência para você!</p>
        </div>
      </section>

      <Footer />

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