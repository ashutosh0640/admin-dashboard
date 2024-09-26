import './App.css'
import { Link } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';

function App() {

  return (
    <>

    <div id='container'>
      <div class='navbar'>
        <Navbar />
      </div>

      <div id='main_body'>
        <div class='menu'><Menu  /></div>
        <div class='outlet'><Outlet /></div>
        
        
      </div>

      <div class='footer'>
        <Footer />
      </div>

    </div>

    </>
  )
}

export default App
