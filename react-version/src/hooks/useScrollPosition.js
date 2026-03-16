import { useState, useEffect } from "react";

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollPosition = 0;

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setScrollPosition(currentScrollPosition);
      setIsScrollingDown(currentScrollPosition > lastScrollPosition);
      lastScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollPosition, isScrollingDown };
}
