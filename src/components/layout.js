import React from 'react';
import Helmet from 'react-helmet';

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
    </Helmet>
    {children}
  </div>
);
