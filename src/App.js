
import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './assets/7.png'
import Home from './components/Home';
import Login from './components/Login'

function App() {
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
          <Button>Login</Button>
        </Navbar.Collapse>    
    </Navbar> 
    {/* <Home /> */}
    <Login />
    </div>
  );
}

export default App;
