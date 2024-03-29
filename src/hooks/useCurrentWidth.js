import { useState, useEffect } from "react";

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const useCurrentWidth = () => {
  // save current window width in the state object
  let [width, setWidth] = useState(getWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setTimeout(() => {
        setWidth(getWidth());
      }, 1000);
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return width;
};

export default useCurrentWidth;
