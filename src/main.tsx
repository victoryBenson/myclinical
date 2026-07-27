// import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
// import { QueryClientProvider } from "@tanstack/react-query";
// import { ConfigProvider, theme } from "antd";
// import { queryClient } from "./app/queryClient";
// import { darkTheme, lightTheme } from "./theme/themeConfig";
// import App from "./App";
// import "./index.css";

// function Root() {
//   const systemPrefersDark = window.matchMedia(
//     "(prefers-color-scheme: dark)"
//   ).matches;

//   const storedTheme = localStorage.getItem("theme");

//   const [isDark, setIsDark] = useState(
//     storedTheme ? storedTheme === "dark" : systemPrefersDark
//   );

//   useEffect(() => {
//     const root = document.documentElement;

//     if (isDark) {
//       root.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       root.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [isDark]);

//   return (
//     <QueryClientProvider client={queryClient}>
//       <ConfigProvider
//         theme={{
//           ...(isDark ? darkTheme : lightTheme),
//           algorithm: isDark
//             ? theme.darkAlgorithm
//             : theme.defaultAlgorithm,
//         }}
//       >
//         <App
//           isDark={isDark}
//           toggleTheme={() => setIsDark(!isDark)}
//         />
//       </ConfigProvider>
//     </QueryClientProvider>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>
// );

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider, theme } from "antd";

import { queryClient } from "./app/queryClient";
import { darkTheme, lightTheme } from "./theme/themeConfig";
import App from "./App";
import "./index.css";

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
        <App isDark={isDark} toggleTheme={toggleTheme} />
      </ConfigProvider>
    </QueryClientProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);