import { useEffect, useRef, useCallback } from "react";

function useAnimation() {
  const element = useRef();

  const handleView = useCallback(([entry]) => {
    const { current } = element;
    if (entry.isIntersecting) {
      current.animate(
        [
          {
            offset: 0.38,
            transform: "translateY(0)",
            easing: "ease-out",
          },
          {
            offset: 0.55,
            transform: "translateY(-65px)",
            easing: "ease-in",
          },
          {
            offset: 0.72,
            transform: "translateY(0)",
            easing: "ease-out",
          },
          {
            offset: 0.81,
            transform: "translateY(-28px)",
            easing: "ease-in",
          },
          {
            offset: 0.9,
            transform: "translateY(0)",
            easing: "ease-out",
          },
          {
            offset: 0.95,
            transform: "translateY(-8px)",
            easing: "ease-in",
          },
          {
            offset: 1,
            transform: "translateY(0)",
            easing: "ease-out",
          },
        ],
        { fill: "both", duration: 1100, iterations: 1 }
      );
    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = element;

    if (current) {
      observer = new IntersectionObserver(handleView, { threshold: 0.4 });
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
