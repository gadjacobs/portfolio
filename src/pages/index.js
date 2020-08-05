import React from 'react';
import Layout from '../components/layout';
import Projects from '../components/projects';
import BlogPosts from '../components/blogposts';

export default () => (
  <Layout>
    <div className="tc shadow-2 pa1">
      <h2>Allow me Work on your next big Project...</h2>
    </div>
    <div className="tc">
      <h1>
        Here's why
        <span className="glyphicon glyphicon-search" aria-hidden="true" />
      </h1>
      <div className="tc ph4">
        <p className="f3 ma3 fw2 black-90 mt0 lh-copy">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
//     <div className="tc">
//       <h1>My Projects</h1>
//       <Projects />
//     </div>
//     <div className="tc">
//       <h1>My Blog</h1>
//       <BlogPosts />
//     </div>
//     <div className="tc">
//       <h1>Contact Me</h1>
//       <p>Coming Soon!</p>
//     </div>
  </Layout>
);
