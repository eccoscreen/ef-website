import React from 'react';
import MouseDownLink from '../../components/MouseDownLink'
import ContentBlock from '../../components/page/Content';
import Image from 'next/image';

const EthereumFoundation = () => {
  return (
    <ContentBlock>
      <div id="content-body" className="disable--selection">
        <h1>What We Do</h1>
        <p>The content is coming.</p>
        <p>
        <Image
          src="/assets/portrait-aya-miyaguchi.png"
          alt="Picture of the author"
          fill
          sizes='100vw'
          />
          </p>


        <MouseDownLink href="/philosophy" id="next-navigation">
          <object data="/assets/bottom-arrow.svg" width="50" height="50" aria-labelledby="Next"> Next</object>
          <p> Sit with our philosophy </p>
        </MouseDownLink>
      </div>
    </ContentBlock>
  )
}

export default EthereumFoundation;