import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  

import './App.css';

//import Navbar from './components/Navbar/Navbar';
import Aside from './components/Aside/Aside';
import DrawerToggleButton from "./components/SideDrawer/DrawerToggleButton";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

import Sobre from './pages/Sobre/Sobre';
import Curriculo from './pages/Curriculo/Curriculo';
import Home from './pages/Home/Home';


function App() {

  let [isOpen, setOpen] = useState(false);

  function toggleButtonHandleClick() {
    setOpen( prevSetOpen => !prevSetOpen);
  };

  function backdropHandleClick() {
    setOpen(false);
  };
  
  let backdrop;
  
  if(isOpen) {
    backdrop = <Backdrop click={backdropHandleClick}/>
  }
  
  return (
    <Router>
    <Aside></Aside>
      <div className="page-container">
        {backdrop}
        <div className="content-wrap">
          <SideDrawer show={isOpen} close={backdropHandleClick}></SideDrawer>
          <nav className="navbar">
            
              <DrawerToggleButton click={toggleButtonHandleClick}></DrawerToggleButton>
            <p className="navbar-branding-mobile">Renan Brayner</p>
            <ul className="navbar-list">
              <li className="navbar-list-item">
                <Link to="/" className="navbar-link">Projetos</Link>
              </li>
              <li className="navbar-list-item">
                <Link to="/sobre" className="navbar-link">Sobre</Link>
              </li>
              <li className="navbar-list-item">
                <Link to="/curriculo" className="navbar-link">Currículo</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact render={()=> <Home/>}/>
          <Route path="/sobre" render={()=> <Sobre/>}/>
          <Route path="/curriculo" render={()=> <Curriculo/>}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
