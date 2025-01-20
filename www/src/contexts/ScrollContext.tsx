import { createContext, useEffect, useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { useLocation } from "react-router-dom";
import { ScrollContextProps } from "@/types/Context.types";

export const ScrollContext = createContext({});

const ScrollProvider: React.FC<ScrollContextProps> = ({ children }) => {
  const scroll: any = useRef();
  const { pathname } = useLocation();
  const [scrollElement, setScrollElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (scrollElement) {
      scrollElement.scrollTop = 0;
    }
  }, [pathname]);

  useEffect(() => {
    if (scroll.current) {
      const current = scroll.current;
      setScrollElement(current.getScrollElement());
    }
  }, [scroll]);

  return (
    <ScrollContext.Provider
      value={{
        scroll,
        scrollElement,
      }}
    >
      <SimpleBar ref={scroll} style={{ maxHeight: "100vh" }}>
        {children}
      </SimpleBar>
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
