import React from 'react';
import 'tachyons';
import './header.css';

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
                  className="dib w2 h2 pa1 ba b--white-90 grow-large border-box"
                >
                  <svg
                    className="link white-90 hover-white"
                    data-icon="skull"
                    viewBox="0 0 32 32"
                    style={{ fill: `currentcolor` }}
                  >
                    <title>Gad Jacobs</title>
                    <path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12" />
                  </svg>
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
