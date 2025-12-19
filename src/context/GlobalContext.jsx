import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    window?.addEventListener("scroll", () => {
      setIsAtTop(window.scrollY === 0);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setIsAtTop(window.scrollY === 0);
      });
    };
  }, [isAtTop]);

  return (
    <GlobalContext.Provider value={{ isAtTop, setIsAtTop }}>
      {children}
    </GlobalContext.Provider>
  );
}
