import './App.css';
import {Button, Badge, Navbar } from 'react-bootstrap';
import Logo from './assets/7.png'
import Home from './components/Home';
import { useState, useEffect } from 'react';
import Login from './components/Login'
import Signup from './components/Signup';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProductGallery from './components/ProductGallery';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {

  const navigate = useNavigate();
  const[user, setUser] = useState('');
  const[cartItems, setCartItems] = useState({});

  useEffect(()=> {
    const userEmail = localStorage.getItem('userEmail');
    if(userEmail) {
      setUser(userEmail);
    }
  }, []);

  const handleAddToCart = (item) => {
    setCartItems({...cartItems, ...item})
  }

  return (
    <div>
     <Navbar className='navbar'>
        <Navbar.Brand onClick={() => navigate('/')}>
          <img 
            alt=""
            src={Logo}
            width="30"
            height="30"
            className=''
          />{' '}
           Instabuy!
        </Navbar.Brand> 
        <Navbar.Collapse className="justify-content-end">
          {user && <Button onClick={() => navigate('/cart')}> Cart &nbsp; { Object.keys(cartItems).length > 0 && (<Badge bg='success'>{Object.keys(cartItems).length}</Badge>)}</Button>}
          &nbsp; &nbsp;
          <Button onClick={() => navigate("/login")}>{user ? 'Logout' : 'Login'}</Button>
        </Navbar.Collapse>    
    </Navbar> 
    <Routes>
      <Route path="/" element={<Home user={user}/>}/>
      <Route path="/signup" element={<Signup setUser={setUser}/>}/>
      <Route path="/login" element={<Login setUser={setUser}/>}/>
      <Route path="/products" element={<ProductGallery />}/>
      <Route path="/product/:id" element={<ProductDetails handleAddToCart={handleAddToCart} cartItems={cartItems}/>}/>
      <Route path="/cart" element={<Cart cartItems={cartItems} />}/>
      <Route path="/checkout" element={<Checkout />}/>
    </Routes>
    </div>
  );
}

export default App;
