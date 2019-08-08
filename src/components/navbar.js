import React from 'react';
import 'tachyons';
import './header.css';
import Logo from './logo';

const NavBar = () => {
  return (
    <div>
      <nav className="dt w-100 mw8 center">
        <div className="dtc w2 v-mid pa3">
          <a href="/" className="dib w3 h3 b--white-90 grow-large">
            <Logo />
          </a>
        </div>
        <div className="dtc v-mid tr pa3">
          <a
            className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
            href="/"
          >
            About
          </a>
          <a
            className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
            href="/"
          >
            Projects
          </a>
          <a
            className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3"
            href="/"
          >
            Blog
          </a>
          <a
            className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3"
            href="/"
          >
            Contact Me
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
