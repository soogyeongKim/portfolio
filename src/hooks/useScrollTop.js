import { useEffect } from "react";

function useScrollTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default useScrollTop;
