'use client'
import React from 'react';
import MouseDownLink from '../components/MouseDownLink';

const HomePage = (props: any) => {
  return (
    <>
      <div id="transition--container">
        <p className="loading--text" id="loading--text">One moment...</p>
      </div>

      <div id="canvas"></div>

      <main id="outer-container">
        <div id="inner-container" className="homepage">
          <div id="content-body" className="disable--selection">
            <h1>Welcome to the Infinite Garden</h1>
            <MouseDownLink href="/infinitegarden" id="next-navigation">
              <object data="/assets/bottom-arrow.svg" width="50" height="50" aria-labelledby="Next"> Next</object>
              <p className="next--page--text"> Explore </p>
            </MouseDownLink>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage;