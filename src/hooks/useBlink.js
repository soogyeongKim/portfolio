import { useEffect, useRef, useCallback } from "react";

function useAnimation() {
  const element = useRef();

  const handleView = useCallback(([entry]) => {
    const { current } = element;
    if (entry.isIntersecting) {
      current.animate(
        [
          {
            offset: 0,
            opacity: 1,
          },
          {
            offset: 0.5,
            opacity: 0.2,
          },
          {
            offset: 1,
            opacity: 1,
          },
        ],
        { fill: "both", duration: 900, iterations: 3 }
      );
    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = element;

    if (current) {
      observer = new IntersectionObserver(handleView, { threshold: 1 });
      observer.observe(current);

      return () => {
        observer && observer.disconnect();
      };
    }
  }, [handleView]);

  return {
    ref: element,
    animate: {
      offset: 0,
      transform: "translateY(-500px)",
      easing: "ease-in",
    },
  };
}

export default useAnimation;
