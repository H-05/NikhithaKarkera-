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
