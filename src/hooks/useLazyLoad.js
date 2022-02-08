import {useEffect, useRef} from 'react';

export const useLazyLoad = (ref, isLoading, callback) => {
  const observer = useRef();

  useEffect(() => {
    if (!isLoading) return;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    const fn = (entries) => {
      if (entries[0].isIntersecting) {
        callback();
      }
    };

    observer.current = new IntersectionObserver(fn, options);
    observer.current.observe(ref.current);

    return () => {
      observer.current.disconnect();
    };
  }, [isLoading]);
};