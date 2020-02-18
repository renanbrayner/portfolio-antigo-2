import React from "react";
import "./Navbar.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";  

function Navbar() {
    return(
        <Router>
          <ul>
            <li>
              <Link to="/" >Projetos</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </Router>
    )
};

export default Navbar;