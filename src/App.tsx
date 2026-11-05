import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";
import { COLORS } from "./theme/themeConfig";

interface AppProps {
  isDark: boolean;
  toggleTheme: () => void;
}

function App({ isDark, toggleTheme }: AppProps) {
  return (
    <>
      {/* <Toaster position="bottom-center" reverseOrder={false} /> */}
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,

          style: {
            background: isDark ? "#1f1f1f" : "#ffffff",
            color: isDark ? "#f3f4f6" : "#111827",
            borderRadius: "14px",
            padding: "14px 16px",
            fontSize: "14px",
            boxShadow:
              "0 4px 20px rgba(0,0,0,0.08)",
            border: isDark ? "1px solid #374151" : "1px solid #f3f4f6",
          },

          success: {
            style: {
              borderLeft: `5px solid ${COLORS.success.DEFAULT}`,
            },

            iconTheme: {
              primary: COLORS.success.DEFAULT,
              secondary: "#ffffff",
            },
          },

          error: {
            style: {
              borderLeft: `5px solid ${COLORS.error.DEFAULT}`,
            },

            iconTheme: {
              primary: COLORS.error.DEFAULT,
              secondary: "#ffffff",
            },
          },
        }}
      />
      <AppRoutes
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
    </>
  );
}

export default App;
