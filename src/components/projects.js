import React from 'react';
import 'tachyons';
import './header.css';

const Projects = () => {
  return (
    <div>
      <article>
        <div className="cf pa2">
          <div className="fl w-100 w-50-m  w-25-ns pa2">
            <a
              href="https://gadjacobs.netlify.com"
              className="db link dim tc"
            >
              <img
                src="https://dummyimage.com/400x400/418bd1/fff.png&text=Project!"
                alt="Project Title"
                className="w-100 db outline black-10"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100">Personal Portfolio</dd>
                <dt className="clip">Description</dt>
                <dd className="ml0 gray truncate w-100">My personal portfolio</dd>
              </dl>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Projects;
