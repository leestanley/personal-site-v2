import React from 'react';
import './style.less';

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav_wrapper">
        <ul>
          <a
            href="https://devpost.com/leestanley"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>projects</li>
          </a>
          <a
            href="mailto:stanleylee91776@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
