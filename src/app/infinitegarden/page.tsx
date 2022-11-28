import React from 'react';

const InfiniteGarden = (props: any) => {
  return (
    <>
      <div id="transition--container">
        <p className="loading--text" id="loading--text">One moment...</p>
      </div>

      <div id="canvas"></div>

      <main id="main--content--outer--container" className="">
        <div id="main--content--inner--container">
          <div id="homepage--welcome--text--inner--container" className="disable--selection">
            <h1 id="main--content--title" className="">Nurturing the Infinite Garden </h1>
            <p id="main--content--general--paragraph" className="">
              <em>“A finite game is played for the purpose of winning. An infinite game for the purpose of continuing the play.”</em> ~ James P. Carse
              <br></br>
              Our vision for Ethereum is the Infinite Garden. Ethereum is more than a technology, it is a diverse ecosystem of individuals and organizations that build and grow alongside a protocol. The Ethereum ecosystem wasn't something that was designed by any one individual or organization, but it organically evolved with the support of people who nurture the ecosystem to become more vibrant and diverse.
              <br></br>
              Ethereum is a protocol for human coordination. Coordination is a game, but not one that is played to win. Coordination is more like tending a garden, where one works only that the garden may continue to thrive.
              <br></br>
              The Infinite Garden is an embodiment of the spirit of the Ethereum Foundation as one gardener in a vast ecosystem -- nurture and grow, but do not control, and continue to play.
            </p>
            <div id="next--page--navigation--container">
              <object data="/assets/bottom-arrow.svg" id="downward--arrow" width="50" height="50" aria-labelledby="Explore Infinite Garden Button"> Explore Infinite Garden </object>
              <p id="next--page--text"> What is Ethereum? </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default InfiniteGarden;