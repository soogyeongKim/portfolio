import { useState, useEffect } from "react";

const useLoader = (time) => {
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoader(false), time);
  });
  return isLoader;
};

export default useLoader;
