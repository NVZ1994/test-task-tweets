import { useState, useEffect } from "react";

export default function useWindowResize() {
  const isSSR = typeof window === "undefined";
  const [windowResize, setWindowResize] = useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  useEffect(() => {
    if (isSSR) return;

    function handleResize() {
      setWindowResize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSSR]);

  return windowResize;
}
