import React from 'react';

function Header(props) {
  return (
    <nav className="navbar">
      <i className="fas fa-music float-left text-white"></i>
      <a
        className="navbar-brand"
        onClick={() => { props.setView('catalog', {}); }}
        href="#"
      >
        Audio Shoppe
      </a>
      <i
        className="fas fa-shopping-cart float-right text-white"
        id="cart-icon"
        onClick={() => props.setView('cart', {})} ></i>
    </nav>
  );
}

export default Header;
