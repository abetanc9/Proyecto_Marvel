import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" alt="Logo"/>
      </div>
      <nav>
        <ul>
          <li>
            <nav to="/">Home</nav>
          </li>
          <li>
            <nav to="/personajes">Personajes</nav>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
