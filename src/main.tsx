import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider, theme } from "antd";

import { queryClient } from "./app/queryClient";
import { darkTheme, lightTheme } from "./theme/themeConfig";
import App from "./App";
import "./index.css";
import { SkeletonTheme } from "react-loading-skeleton";

function Root() {
  const getSystemTheme = () =>
    window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;

  const storedTheme =
    typeof window !== "undefined" ? localStorage.getItem("theme") : null;

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (storedTheme) return storedTheme === "dark";
    return getSystemTheme();
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const antdThemeConfig = isDark
    ? {
        ...darkTheme,
        algorithm: theme.darkAlgorithm,
      }
    : {
        ...lightTheme,
        algorithm: theme.defaultAlgorithm,
      };

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={antdThemeConfig}>
        <SkeletonTheme
          baseColor={isDark ? "#2d2d2d" : "#e5e7eb"}
          highlightColor={isDark ? "#3d3d3d" : "#f3f4f6"}
          // duration={1.2}
        >
          <App
            isDark={isDark}
            toggleTheme={toggleTheme}
          />
        </SkeletonTheme>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);