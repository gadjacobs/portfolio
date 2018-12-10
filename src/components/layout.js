import React from 'react';
import Header from './header';
import Helmet from 'react-helmet';
import loadScript from 'simple-load-script';

global.jQuery = require('jquery');

loadScript(
  'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',
  { inBody: true }
);
loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', {
  inBody: true
});

export default ({ children }) => (
  <div>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Bungee|Gamja+Flower|Roboto+Mono"
        rel="stylesheet"
      />
    </Helmet>
    <Header />
    {children}
  </div>
);
