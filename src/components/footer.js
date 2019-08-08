import React from 'react';
import SocialLinks from './social-links';

const Footer = () => {
  return (
    <div>
      <SocialLinks />
      <div className="mt4">
        <a href="/" className="f6 link dim gray dib mr3 mr4-ns">
          About
        </a>
        <a href="/" className="f6 link dim gray dib mr3 mr4-ns">
          Projects
        </a>
        <a href="/" className="f6 link dim gray dib mr3 mr4-ns">
          Blog
        </a>
        <a href="/" className="f6 link dim gray dib">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Footer;
