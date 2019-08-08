import React from 'react';
import 'tachyons';
import './header.css';

const BlogPosts = () => {
  return (
    <div>
      <section className="cf w-100 pa2">
        <article className="fl w-100 w-50-m  w-25-ns pa2">
          <div className="aspect-ratio aspect-ratio--1x1">
            <img
              style={{backgroundImage: `url(https://dummyimage.com/400x400/fa4b5f/fff.png&text=Blogpost!)`}}
              className="db bg-center cover aspect-ratio--object"
              alt=''
            />
          </div>
          <a href="#0" className="ph2 ph0-ns pb3 link db">
            <h3 className="f5 f4-ns mb0 black-90">React Hooks vs Redux</h3>
            <h3 className="f6 f5 fw4 mt2 black-60">How to decide on what tool to use.</h3>
          </a>
        </article>
      </section>
    </div>
  );
};

export default BlogPosts;
