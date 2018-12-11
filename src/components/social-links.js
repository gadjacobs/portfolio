import React from 'react';

const SocialLinks = () => {
  return (
    <div>
      <a class="link dim gray dib br-100 h2 w2 mr3 " href="https://github.com/gadjacobs" title="">
      <img alt="github" src="https://img.icons8.com/color/480/000000/github-2.png" />
      </a>
      <a class="link dim gray dib h2 w2 br-100 mr3 " href="/" title="">
      <img alt="twitter" src="https://img.icons8.com/color/50/000000/twitter.png" />
      </a>
      <a class="link dim gray dib h2 w2 br-100 mr3 " href="/" title="">
      <img alt="instagram" src="https://img.icons8.com/color/50/000000/instagram-new.png" />
      </a>
      <a className="link dim gray dib br-100 h2 w2 mr3 " href="mailto:gad@gadjacobs.me" title="">
      <img alt="email" src="https://img.icons8.com/color/50/000000/email.png" />
      </a>
    </div>
  );
};

export default SocialLinks;
