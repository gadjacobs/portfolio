import React from 'react';
import 'tachyons';
import './header.css';
import SocialLinks from './social-links';
import Logo from './logo'

const Header = () => {
  return (
    <div>
      <header className="sans-serif">
        <div
          className="cover bg-left bg-center-l"
          style={{
            backgroundImage: `url(http://mrmrs.github.io/photos/u/011.jpg)`
          }}
        >
          <div className="bg-black-80 pb5 pb6-m pb7-l">
            <nav className="dt w-100 mw8 center">
              <div className="dtc w2 v-mid pa3">
                <a
                  href="/"
                  className="dib w3 h3 b--white-90 grow-large"
                >
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
            <div className="tc-l mt4 mt5-m mt6-l ph3">
              <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">Gad Jacobs</h1>
              <h3 className="fw1 f3 white-80 mt3 mb4">
                fullstack web developer | JavaScript x DotNet
              </h3>
<SocialLinks/>
              {/* <div class="pa4-l">
  <form class="bg-light-red mw7 center pa4 br2-ns ba b--black-10">
    <fieldset class="cf bn ma0 pa0">
      <legend class="pa0 f5 f4-ns mb3 black-80"></legend>
      <div class="cf">
        <label class="clip" for="email-address">Email Address</label>
        <input class="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Your Email Address" type="text" name="email-address" value="" id="email-address" />
        <input class="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Subscribe" />
      </div>
    </fieldset>
  </form>
</div> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
