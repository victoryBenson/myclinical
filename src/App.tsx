import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";

interface AppProps {
  isDark: boolean;
  toggleTheme: () => void;
}

function App({ isDark, toggleTheme }: AppProps) {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <AppRoutes
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
    </>
  );
}

export default App;