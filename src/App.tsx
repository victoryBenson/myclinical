import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";

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
            background: "#ffffff",
            color: "#111827",
            borderRadius: "14px",
            padding: "14px 16px",
            fontSize: "14px",
            boxShadow:
              "0 4px 20px rgba(0,0,0,0.08)",
            border: "1px solid #f3f4f6",
          },

          success: {
            style: {
              borderLeft: "5px solid #2EB62C",
            },

            iconTheme: {
              primary: "#2EB62C",
              secondary: "#ffffff",
            },
          },

          error: {
            style: {
              borderLeft: "5px solid #dc2626",
            },

            iconTheme: {
              primary: "#dc2626",
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