"use client";

import type React from "react";

import { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextProps {
  theme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;
  enableSystem: boolean;
  disableTransitionOnChange: boolean;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "system",
  setTheme: () => {},
  enableSystem: false,
  disableTransitionOnChange: false,
});

export const ThemeProvider = ({
  children,
  attribute,
  defaultTheme = "system",
  enableSystem = true,
  disableTransitionOnChange = false,
}: {
  children: React.ReactNode;
  attribute: string;
  defaultTheme?: "light" | "dark" | "system";
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}) => {
  const [theme, setTheme] = useState<"light" | "dark" | "system">(defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.setAttribute(attribute, isDark ? "dark" : "light");
    } else if (theme) {
      root.setAttribute(attribute, theme);
    }
  }, [theme, attribute]);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, enableSystem, disableTransitionOnChange }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
