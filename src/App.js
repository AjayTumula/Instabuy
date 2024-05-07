import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './assets/7.png'
import Home from './components/Home';
import { useState, useEffect } from 'react';
import Login from './components/Login'
import Signup from './components/Signup';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProductGallery from './components/ProductGallery';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

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
        <Navbar.Brand href="/">
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
    </Routes>
    </div>
  );
}

export default App;
