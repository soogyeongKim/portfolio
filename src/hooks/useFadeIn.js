import { useEffect, useRef, useCallback } from "react";

function useFadeIn() {
  const element = useRef();

  const handleView = useCallback(([entry]) => {
    const { current } = element;
    if (entry.isIntersecting) {
      current.style.transitionProperty = "opacity transform";
      current.style.transitionDuration = "1s";
      current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
      current.style.transitionDelay = "0.2s";
      current.style.opacity = 1;
      current.style.transform = "translate3d(0, 0, 0)";
    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = element;

    if (current) {
      observer = new IntersectionObserver(handleView, { threshold: 0.7 });
      observer.observe(current);

      return () => {
        observer && observer.disconnect();
      };
    }
  }, [handleView]);

  return {
    ref: element,
    style: {
      opacity: 0,
      transform: "translate3d(0, 50%, 0)",
    },
  };
}

export default useFadeIn;
