import { useEffect, useState } from "react";

export const useScrollY = () => {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
      const handleScroll = () => {
        // console.log(window.scrollY);
        setScrollY(window.scrollY);
      };
  
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [scrollY]);

    return { scrollY}
}
