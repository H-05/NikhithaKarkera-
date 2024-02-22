// App.js
import React, { useState } from 'react';
import './App.css';
import Product from './Product';
import Cart from './Cart';
import Img from './img.png';
import Img2 from './WP 5.png';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(cartItems.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping Cart</h1>
      </header>
      <div className="content">
      <div className='product-heading'>
          <h2>Products</h2>
          </div>
        <div className="product-list">
          
          <Product id={1} name="Ghost" img={Img} price={10} addToCart={addToCart} />
          <Product id={2} name="Nature" img={Img2}  price={20} addToCart={addToCart} />
          <Product id={3} name="Product 3" img={Img}  price={30} addToCart={addToCart} />
          
          <Product id={1} name="Ghost" img={Img} price={10} addToCart={addToCart} />
          <Product id={2} name="Nature" img={Img2}  price={20} addToCart={addToCart} />
          <Product id={3} name="Product 3" img={Img}  price={30} addToCart={addToCart} />

          <Product id={1} name="Ghost" img={Img} price={10} addToCart={addToCart} />
          <Product id={2} name="Nature" img={Img2}  price={20} addToCart={addToCart} />
          <Product id={3} name="Product 3" img={Img}  price={30} addToCart={addToCart} />

          <Product id={1} name="Ghost" img={Img} price={10} addToCart={addToCart} />
          <Product id={2} name="Nature" img={Img2}  price={20} addToCart={addToCart} />
          <Product id={3} name="Product 3" img={Img}  price={30} addToCart={addToCart} />
        </div>
        <div className="cart">
          <h2>Cart</h2>
          <Cart items={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
        </div>
      </div>
    </div>
  );
}
export default App;
/* App.css */
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 6vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* App.css */

/* General styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Header styles */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header h1 {
  font-size: 24px;
  color: #333;
}

.search-bar {
  display: flex;
}

.search-bar input[type="text"] {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

.search-bar button {
  padding: 8px 20px;
  background-color: #f0c040;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.search-bar button:hover {
  background-color: #d8b230;
}

/* Product list styles */
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
.product-heading{
  color: #282c34;
  background-color: antiquewhite;
  padding: 5px;
}
.product {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 4px;
  background-color: #fff;
}

.product img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.product h3 {
  font-size: 16px;
  margin-bottom: 10px;
}

.product p {
  font-size: 14px;
  margin-bottom: 10px;
}

.product button {
  padding: 8px 20px;
  background-color: #f0c040;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.product button:hover {
  background-color: #d8b230;
}
// Cart.js
import React from 'react';
import './Cart.css';
import './img.png';

const Cart = ({ items, removeFromCart, updateQuantity }) => {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-items" align='center'>
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <div className="item-details">
            <h4>{item.name}</h4>
            <p>{item.img}</p>
            <p>Price: ${item.price}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              min="0"
            />
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <h3>Total: ${total}</h3>
      </div>
    </div>
  );
};

export default Cart;
/* Cart.css */

.cart-items {
    border: 1px solid #ccc;
    padding: 10px;
  }
  
  .cart-item {
    
    border-bottom: 1px solid #ccc;
    padding: 10px;
  }
  
  .item-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .item-details h4 {
    margin: 0;
  }
  
  .item-details p {
    margin: 5px 0;
  }
  
  .item-details input {
    width: 50px;
    margin-right: 10px;
  }
  
  .item-details button {
    background-color: #dc3545;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .total {
    margin-top: 10px;
  }
  
  .total h3 {
    margin: 0;
  }
// Product.js
import React from 'react';
import './Product.css';

const Product = ({ id, name, img, price, addToCart }) => {
  return (
    <div align='center'>
    <div className="product" align='center'>
      <h3>{name}</h3>
      <img src={img} alt={name} />
      <p>Price: ${price}</p>
      <button onClick={() => addToCart({ id, name, price })}>Add to Cart</button>
    </div>
    </div>
  );
};

export default Product;
/* Product.css */
.product {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 10px;
    border: solid 0.5px;
  }
