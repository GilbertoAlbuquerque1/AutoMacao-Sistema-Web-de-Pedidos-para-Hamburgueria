import React, { useState } from 'react';
import './Cart.css';

function Cart({ cartItems, onClose, onUpdateQuantity, onClearCart }) {
  const [isCheckout, setIsCheckout] = useState(false);
  

  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    telefone: '',
    endereco: '',
    observacoes: '',
    metodoPagamento: 'MB WAY'
  });

  const total = cartItems.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);

  const formatarPreco = (valor) => `€ ${valor.toFixed(2).replace('.', ',')}`;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const enviarPedidoWhatsApp = (e) => {
    e.preventDefault();

    const numeroWhatsApp = "+351969879718"; 

    let texto = `*NOVO PEDIDO - DOM HAMBÚRGUERES* 🍔\n\n`;
    texto += `*Cliente:* ${formData.nome} ${formData.sobrenome}\n`;
    texto += `*Telefone:* ${formData.telefone}\n`;
    texto += `*Endereço:* ${formData.endereco}\n`;
    texto += `*Método de Pagamento:* ${formData.metodoPagamento}\n`;
    
    if (formData.observacoes) {
      texto += `*Observações:* ${formData.observacoes}\n`;
    }
    
    texto += `\n*RESUMO DO PEDIDO:*\n`;
    
    cartItems.forEach(item => {
      texto += `- ${item.quantidade}x ${item.nome} (${formatarPreco(item.preco * item.quantidade)})\n`;
    });

    texto += `\n*TOTAL: ${formatarPreco(total)}*`;

    const textoCodificado = encodeURIComponent(texto);
    const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

    window.open(url, '_blank');
    
    onClearCart();
    onClose();
  };

  return (
    <div className="cart-overlay">
      <div className="cart-sidebar">
        
        <div className="cart-header">
          <h2>{isCheckout ? 'Finalizar Pedido' : 'Seu Pedido'}</h2>
          <button className="close-btn" onClick={onClose}>X</button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Seu carrinho está vazio.</p>
            <button className="btn-primary" onClick={onClose}>Continuar Comprando</button>
          </div>
        ) : (
          <>
            {!isCheckout ? (
              <div className="cart-body">
                <div className="cart-items">
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-info">
                        <h4>{item.nome}</h4>
                        <span className="cart-item-price">{formatarPreco(item.preco * item.quantidade)}</span>
                      </div>
                      <div className="cart-item-actions">
                        <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
                        <span>{item.quantidade}</span>
                        <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="cart-footer">
                  <div className="cart-total">
                    <span>Subtotal:</span>
                    <span>{formatarPreco(total)}</span>
                  </div>
                  <button className="btn-primary full-width" onClick={() => setIsCheckout(true)}>
                    Avançar para Entrega
                  </button>
                </div>
              </div>
            ) : (
              <form className="checkout-form" onSubmit={enviarPedidoWhatsApp}>
                <div className="form-group-row">
                  <div className="form-group">
                    <label>Nome *</label>
                    <input type="text" name="nome" required value={formData.nome} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label>Sobrenome *</label>
                    <input type="text" name="sobrenome" required value={formData.sobrenome} onChange={handleInputChange} />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Telefone (WhatsApp) *</label>
                  <input type="tel" name="telefone" required value={formData.telefone} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                  <label>Endereço Completo *</label>
                  <textarea name="endereco" rows="2" required placeholder="Rua, Número, Porta, Freguesia..." value={formData.endereco} onChange={handleInputChange}></textarea>
                </div>

                <div className="form-group">
                  <label>Método de Pagamento *</label>
                  <select name="metodoPagamento" required value={formData.metodoPagamento} onChange={handleInputChange}>
                    <option value="MB WAY">MB WAY</option>
                    <option value="Multibanco">Multibanco</option>
                    <option value="Dinheiro">Dinheiro</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Observações do Pedido</label>
                  <textarea name="observacoes" rows="2" placeholder="Ex: Tirar cebola, levar troco para €20..." value={formData.observacoes} onChange={handleInputChange}></textarea>
                </div>

                <div className="cart-footer">
                  <div className="cart-total">
                    <span>Total a Pagar:</span>
                    <span>{formatarPreco(total)}</span>
                  </div>
                  <button type="button" className="btn-secondary" onClick={() => setIsCheckout(false)}>
                    Voltar
                  </button>
                  <button type="submit" className="btn-primary full-width mt-1">
                    Enviar Pedido via WhatsApp
                  </button>
                </div>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;