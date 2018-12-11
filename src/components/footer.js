import React from 'react';
import SocialLinks from './social-links';

const Footer = () => {
  return (
    <div>
      <SocialLinks />
      <div className="mt4">
        <a href="/" className="f6 link dim gray dib mr3 mr4-ns">
          Help
        </a>
        <a href="/" className="f6 link dim gray dib mr3 mr4-ns">
          Send feedback
        </a>
        <a href="/" className="f6 link dim gray dib mr3 mr4-ns">
          Privacy
        </a>
        <a href="/" className="f6 link dim gray dib">
          Terms
        </a>
      </div>
    </div>
  );
};

export default Footer;
