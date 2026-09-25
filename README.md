# AutoNação — Sistema Web de Pedidos

Aplicação web de pedidos para hamburgueria desenvolvida com React e Vite, criada para proporcionar uma experiência simples e rápida de escolha de produtos, montagem do pedido e envio das informações para o estabelecimento através do WhatsApp.

O projeto foi desenvolvido como um MVP frontend e também como projeto de portfólio para demonstrar conceitos fundamentais de desenvolvimento web moderno com React.

---

## Sobre o Projeto

O AutoNação simula o fluxo digital de pedidos de uma hamburgueria.

O cliente pode:

1. Visualizar o cardápio;
2. Consultar produtos e preços;
3. Adicionar produtos ao carrinho;
4. Alterar quantidades;
5. Visualizar o valor total;
6. Preencher seus dados;
7. Escolher o método de pagamento;
8. Enviar o pedido diretamente para o WhatsApp do estabelecimento.

Atualmente, a aplicação funciona inteiramente no frontend, sem banco de dados ou backend.

---

## Objetivo

O objetivo do projeto é demonstrar, através de uma aplicação prática, conhecimentos em:

* React;
* JavaScript;
* Componentização;
* Props;
* Gerenciamento de estado;
* Eventos;
* Formulários;
* Manipulação de arrays e objetos;
* Renderização dinâmica;
* CSS;
* Organização de projetos frontend;
* Integração com serviços externos através de URL.

---

## Funcionalidades

### Cardápio

* Exibição dos produtos;
* Nome;
* Descrição;
* Preço;
* Imagem;
* Botão para adicionar ao carrinho.

### Carrinho

* Adição de produtos;
* Controle de quantidade;
* Remoção automática quando a quantidade chega a zero;
* Cálculo automático do total;
* Contagem total dos itens.

### Checkout

O cliente pode informar:

* Nome;
* Sobrenome;
* Telefone;
* Endereço;
* Observações;
* Método de pagamento.

### Integração com WhatsApp

Após finalizar o pedido, a aplicação monta automaticamente uma mensagem contendo:

* Dados do cliente;
* Produtos selecionados;
* Quantidades;
* Valor total;
* Método de pagamento;
* Observações.

A mensagem é então enviada para o WhatsApp configurado no projeto.

---

## Conceitos de React utilizados

Este projeto foi construído para colocar em prática conceitos fundamentais do React.

### Componentização

A interface foi dividida em componentes independentes:

```text
Header
Hero
Menu
ProductCard
Cart
Footer
```

Cada componente possui uma responsabilidade específica.

### Props

Os componentes recebem informações e funções através de props.

Exemplo:

```jsx
<ProductCard
    produto={produto}
    onAddToCart={onAddToCart}
/>
```

O componente `ProductCard` recebe os dados do produto e a função responsável por adicioná-lo ao carrinho.

### useState

O estado principal do carrinho é controlado no componente `App`.

```jsx
const [cartItems, setCartItems] = useState([]);
```

Também existe controle para abrir e fechar o carrinho:

```jsx
const [isCartOpen, setIsCartOpen] = useState(false);
```

### Manipulação de arrays

O projeto utiliza métodos importantes do JavaScript:

```javascript
map()
find()
filter()
reduce()
```

Exemplos de utilização:

* `map()` para atualização e renderização de produtos;
* `find()` para verificar se um produto já está no carrinho;
* `filter()` para remover itens;
* `reduce()` para calcular quantidade e valor total.

### Renderização condicional

O carrinho e algumas partes do checkout são exibidos de acordo com o estado da aplicação.

Exemplo:

```jsx
{isCartOpen && <Cart />}
```

### Formulários controlados

Os campos do checkout possuem seus valores controlados pelo estado do React.

Isso permite acompanhar e manipular os dados preenchidos pelo usuário antes do envio.

---

## Arquitetura do Projeto

Fluxo principal da aplicação:

```text
Cliente
   |
   v
Cardápio
   |
   v
Produto
   |
   v
Carrinho
   |
   v
Checkout
   |
   v
WhatsApp
   |
   v
Estabelecimento
```

---

## Estrutura do Projeto

```text
src/
|
├── assets/
|
├── components/
│   ├── Cart/
│   │   ├── Cart.jsx
│   │   └── Cart.css
│   │
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   │
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.css
│   │
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.css
│   │
│   ├── Menu/
│   │   ├── Menu.jsx
│   │   └── Menu.css
│   │
│   └── ProductCard/
│       ├── ProductCard.jsx
│       └── ProductCard.css
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

A estrutura utiliza componentes separados para facilitar manutenção, reutilização e evolução da aplicação.

---

## Tecnologias

| Tecnologia | Utilização                          |
| ---------- | ----------------------------------- |
| React      | Construção da interface             |
| JavaScript | Lógica da aplicação                 |
| Vite       | Ambiente de desenvolvimento e build |
| HTML5      | Estrutura                           |
| CSS3       | Estilização                         |
| NPM        | Gerenciamento de dependências       |
| Git        | Controle de versão                  |
| GitHub     | Hospedagem do código                |
| WhatsApp   | Recebimento dos pedidos             |

---

## Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/GilbertoAlbuquerque1/autonacao-pedidos-haburgueiria.git
```

### 2. Entrar na pasta

```bash
cd autonacao-pedidos-haburgueiria
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar o projeto

```bash
npm run dev
```

O Vite irá disponibilizar a aplicação no endereço local informado pelo terminal.

---

## Scripts disponíveis

```bash
npm run dev
```

Executa o ambiente de desenvolvimento.

```bash
npm run build
```

Gera a versão de produção.

```bash
npm run preview
```

Executa uma pré-visualização da build.

```bash
npm run lint
```

Executa a verificação de código utilizando Oxlint.

---

## Como utilizar

### Cliente

1. Acesse a aplicação;
2. Navegue pelo cardápio;
3. Escolha um produto;
4. Clique em adicionar ao carrinho;
5. Ajuste as quantidades;
6. Confira o total;
7. Avance para o checkout;
8. Preencha seus dados;
9. Escolha o método de pagamento;
10. Envie o pedido pelo WhatsApp.

### Estabelecimento

O estabelecimento recebe o pedido diretamente através do WhatsApp configurado na aplicação.

Isso permite utilizar a aplicação como uma solução simples de MVP sem necessidade de um sistema backend neste estágio.

---

## Estado atual do projeto

O projeto encontra-se em estágio de MVP / Portfólio.

Atualmente:

* Os produtos estão definidos no frontend;
* Não existe banco de dados;
* Não existe API própria;
* Não existe autenticação;
* Não existe painel administrativo;
* Não existe processamento de pagamentos;
* Os pedidos não são armazenados em banco;
* O envio do pedido é realizado através do WhatsApp.

Essas limitações são intencionais nesta primeira versão, permitindo concentrar o desenvolvimento nos fundamentos do frontend e React.

---

## Considerações para uma versão de produção

Para transformar o projeto em uma solução comercial completa, seria necessá
