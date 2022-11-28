import React from 'react';
import Link from 'next/link';

const EthereumFoundation = (props: any) => {
  return (
    <>
      <div id="transition--container">
        <p className="loading--text" id="loading--text">One moment...</p>
      </div>

      <div id="canvas"></div>


      <main id="main--content--outer--container" className="">
        <div id="main--content--inner--container">
          <div id="homepage--welcome--text--inner--container" className="disable--selection">
            <h1 id="main--content--title" className=""> What is the EF? </h1>
            <p id="main--content--general--paragraph" className="">
              The Ethereum Foundation (EF) is a non-profit that supports the Ethereum ecosystem. We are part of a larger community of organizations and individuals that fund protocol development, <Link id="grow--ecosystem--link" href="https://esp.ethereum.foundation/">grow the ecosystem</Link>, and advocate for Ethereum.
              <br></br>
              Behind that simple description, the EF is hard to categorize. We are not a tech company, or a “normal” non-profit. Just as Ethereum requires new concepts and technologies, it has spawned new kinds of organizations.
              <br></br>
              We are at the frontier of a new kind of organization: one that supports a blockchain and its ecosystem without controlling it. Since the Ethereum ecosystem evolves every day, it is important for the EF to also keep learning and evolving to support Ethereum’s long term growth.
              <br></br>
              Over the course of this evolution, the EF has become more like a community of teams than a traditional organization.
            </p>
            <div id="executive--board--container">
              <h3 id="executive--board--title">Meet our Executive Board</h3>

              <div className="executive--board--member--container">
                <img className="executive--board--member--image" src="/assets/portrait-aya-miyaguchi.png" alt="Portrait of Aya Miyaguchi, the Executive Director of Ethereum" height="150" width="150" />
                <div className="column--container--executive--board">
                  <h4 className="executive--board--member--name">Aya Miyaguchi</h4>
                  <p className="executive--board--member--title">Executive Director</p>
                  <div className="social--media--link--container">
                    <Link id="executive--board--link--aya" href="https://twitter.com/ayamiyagotchi" className="executive--board--social--media--handle">@AyaMiyagotchi</Link>
                  </div>
                </div>
              </div>

              <div className="executive--board--member--container">
                <img className="executive--board--member--image" src="/assets/portrait-vitalik-buterin.png" alt="Portrait of Vitalik Buterin, the Co-founder of Ethereum" height="150" width="150" />
                <div className="column--container--executive--board">
                  <h4 className="executive--board--member--name">Vitalik Buterin</h4>
                  <p className="executive--board--member--title">Co-founder of Ethereum</p>
                  <Link id="executive--board--link--vitalik" href="https://twitter.com/VitalikButerin" className="executive--board--social--media--handle">@VitalikButerin</Link>
                </div>
              </div>

              <div className="executive--board--member--container">
                <img className="executive--board--member--image" src="/assets/portrait-patrick-storchenegger.png" alt="Portrait of Patrick Storchenegger, one of Ethereum's board members" height="150" width="150" />
                <div className="column--container--executive--board">
                  <h4 className="executive--board--member--name">Patrick Storchenegger</h4>
                  <p className="executive--board--member--title">Board Member</p>
                </div>
              </div>

            </div>
            <div id="next--page--navigation--container">
              <object data="/assets/bottom-arrow.svg" id="downward--arrow" width="50" height="50" aria-labelledby="Explore Infinite Garden Button"> Explore Infinite Garden </object>
              <p id="next--page--text"> Sit with our philosophy </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default EthereumFoundation;