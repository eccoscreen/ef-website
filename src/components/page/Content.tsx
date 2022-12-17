'use client'
import React from 'react';

const ContentBlock = (props: any) => {
  const [noScroll, setNoScroll] = React.useState(true);

  return (
    <main id="main--content--outer--container">
      {/*
        Some weird scrolling edge case (at least on chrome, didnt test others) if we set overflow: auto; while the transition is playing. 
        Current solution below is to wait with setting the property until after the transition (using a dummy animation for the timing) is complete.

        TODO: Find a better solution to this issue?
      */}
      <div id="main--content--inner--container" style={{ overflowY: noScroll ? 'clip' : 'auto' }} onAnimationStart={() => setNoScroll(true)} onAnimationEnd={() => setNoScroll(false)}>
        {props.children}
      </div>
    </main>
  )
}

export default ContentBlock;