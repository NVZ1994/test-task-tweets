import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  const isSSR = typeof window === "undefined";
  const [windowDimensions, setWindowDimensions] = useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  useEffect(() => {
    if (isSSR) return;

    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSSR]);

  return windowDimensions;
}
