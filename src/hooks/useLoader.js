import { useState, useEffect } from "react";

const useLoader = () => {
  const [isLoader, setIsLoader] = useState(true);

  const setLocalFirstVisit = (value) => {
    localStorage.setItem("firstVisit", value);
  };

  useEffect(() => {
    if (
      localStorage.getItem("firstVisit") === null ||
      localStorage.getItem("firstVisit") === "true"
    ) {
      setIsLoader(true);
      setTimeout(() => setIsLoader(false), 8000);
    } else {
      setIsLoader(false);
    }
    return () => {
      setLocalFirstVisit("false");
    };
  }, []);
  return isLoader;
};

export default useLoader;
