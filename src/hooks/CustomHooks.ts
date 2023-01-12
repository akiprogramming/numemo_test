import { useEffect, useState } from "react";

export const useWindowWidthAndHeight = () => {
  // 1- Get the size of window
  let windowInnerSize = [window.innerWidth, window.innerHeight];

  // 2- Define the state variable windowSize and pass windowInnerSize as its initial value
  let [windowSize, setWidowSize] = useState(windowInnerSize);

  useEffect(() => {
    const changeWindowSize = () => {
      setWidowSize([window.innerWidth, window.innerHeight]);
    };
    /* 3- add a 'resize' eventListener to window
           so whenever the size of window changes
        the state variable windowSize changes and the component  re-renders */
    window.addEventListener("resize", changeWindowSize);

    // 4- cleanup the 'resize' eventListener
    return () => window.removeEventListener("resize", changeWindowSize);
  }, []);
  // 5- return the window size
  return windowSize;
};

export const useHeaderAndKeyboardResizeObserver = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setHeaderHeight(entries[0].contentRect.height);
      setKeyboardHeight(entries[1].borderBoxSize[0].blockSize);
    });

    const headerElm = document.getElementById("header");
    const keyboardElm = document.getElementById("keyboard-container");

    if (headerElm && keyboardElm) {
      observer.observe(headerElm);
      observer.observe(keyboardElm);
    }

    return () => {
      if (headerElm && keyboardElm) {
        observer.unobserve(headerElm);
        observer.unobserve(keyboardElm);
      }
    };
  }, [headerHeight, keyboardHeight]);

  return { headerHeight, keyboardHeight };
};
