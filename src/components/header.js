import React from "react";
import "tachyons";
import "./header.css";
import SocialLinks from "./social-links";
import NavBar from "./navbar";

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
            <NavBar />
            <div className="tc mt4 mt5-m mt6-l ph3">
              <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">Gad Jacobs</h1>
              <h3 className="fw1 f3 white-80 mt3 mb4">
                fullstack web developer{" "}
              </h3>
              <h4 className="fw1 f4 white-80 mt3 mb4">[JavaScript x DotNet]</h4>
              <SocialLinks />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
