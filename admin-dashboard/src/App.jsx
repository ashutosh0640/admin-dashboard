import './App.css';
import { Outlet } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <div class='container'>

        <div class='nav'>
          <Navbar />
        </div>

          <div class='main_Body'>
            <Menu />
            <Outlet />
          </div>

        <div class='footer'>
          <Footer />
        </div>

      </div>
    </>
  )
};

export default App
