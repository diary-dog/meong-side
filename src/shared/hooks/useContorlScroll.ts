import { useLayoutEffect, useRef, useState } from 'react';

const useControlScroll = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const currentScrollHeight = containerRef.current.scrollHeight;
    if (scrollHeight === 0) {
      window.scrollTo(0, currentScrollHeight);
    } else {
      const scrollOffset = currentScrollHeight - scrollHeight;
      containerRef.current.scrollTop += scrollOffset;
    }
    setScrollHeight(currentScrollHeight);
  }, [scrollHeight]);

  return { containerRef };
};

export default useControlScroll;
