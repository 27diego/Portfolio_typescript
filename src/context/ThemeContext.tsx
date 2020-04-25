import React, { createContext, useState, useEffect } from "react";

interface contextValue {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<contextValue>({
  theme: "dark",
  toggleTheme: (): void => {},
});

export const ThemeContextProvider: React.FC = (props) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    let themeTemp = "dark";
    if (window.sessionStorage.getItem("theme") !== null) {
      if (window.sessionStorage.getItem("theme") === "light") {
        themeTemp = "light";
      } else {
        themeTemp = "dark";
      }
    } else {
      themeTemp = "dark";
    }
    setTheme(themeTemp);
  }, []);

  const toggleTheme = (): void => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    theme === "light"
      ? window.sessionStorage.setItem("theme", "dark")
      : window.sessionStorage.setItem("theme", "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
