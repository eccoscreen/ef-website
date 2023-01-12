'use client'
import React from 'react';
import css from './Content.module.scss';

export const pageContentID = 'page-content';

type ContentBlockProps = {
  isHomePage?: boolean,
  children?: React.ReactNode
}

const ContentBlock = (props: ContentBlockProps) => {
  return (
    <main
      id="page-content-container"
      className={css['container']}
    >
      <div
        id={pageContentID}
        className={(() => {
          let className = css['content'];

          if (props.isHomePage) {
            className += ` homepage`;
          }

          return className;
        })()}
      >
        {props.children}
      </div>
    </main >
  )
}

export default ContentBlock;