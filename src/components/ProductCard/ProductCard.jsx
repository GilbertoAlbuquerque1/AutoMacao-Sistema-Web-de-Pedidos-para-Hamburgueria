import React from 'react';
import './ProductCard.css';

function ProductCard({ produto, onAddToCart }) {
  const formatarPreco = (valor) => {
    return `€ ${valor.toFixed(2).replace('.', ',')}`;
  };

  return (
    <div className="product-card">
      <div className="product-image-box">
        <img src={produto.imagem} alt={`Imagem do lanche ${produto.nome}`} />
      </div>
      
      <div className="product-info">
        <h3>{produto.nome}</h3>
        <p>{produto.descricao}</p>
        
        <div className="product-footer">
          <span className="price">{formatarPreco(produto.preco)}</span>
          <button 
            className="btn-add" 
            onClick={() => onAddToCart(produto)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;