import React from 'react';

export enum ScrollDirection {
  UP = 'up',
  DOWN = 'down'
}

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = React.useState<ScrollDirection>(ScrollDirection.UP);

  React.useEffect(() => {
    const handleScroll = (e: any) => {
      const scrolledDown = e.deltaY > 0;
      const direction = scrolledDown ? ScrollDirection.DOWN : ScrollDirection.UP;

      const scrollableContentElement = document.getElementById("main--content--inner--container")
      
      if (!scrollableContentElement) return;
      
      if (scrollableContentElement?.scrollTop > 0) {
        setScrollDirection(ScrollDirection.DOWN);
      } else {
        setScrollDirection(direction);
      }
    }

    window.addEventListener('wheel', handleScroll)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollDirection;
}


export default useScrollDirection;