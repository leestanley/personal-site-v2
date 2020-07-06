import React from 'react';
import './style.less';

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav_wrapper">
        <ul>
          <a
            href="https://drive.google.com/file/d/1cEU7myTYPqcKQYlQvNRfn6wLqVFRTdLb/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>resume</li>
          </a>
          <a
            href="https://devpost.com/leestanley"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>projects</li>
          </a>
          <a
            href="https://drive.google.com/file/d/1cEU7myTYPqcKQYlQvNRfn6wLqVFRTdLb/view"
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
