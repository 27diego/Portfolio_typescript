import React, { createContext, useState } from "react";

interface contextValue {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<contextValue>({
  theme: "dark",
  toggleTheme: (): void => {}
});

export const ThemeContextProvider: React.FC = props => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = (): void => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
