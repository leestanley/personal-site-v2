import React from 'react';
import './style.less';

import Logo from '../../assets/navbar_logo.svg';
import Menu from '../../assets/navbar_menu.svg';

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav_wrapper">
        <img src={Logo} alt="logo" />
        <img src={Menu} alt="menu" />
      </div>
    </div>
  );
}

export default Navbar;
