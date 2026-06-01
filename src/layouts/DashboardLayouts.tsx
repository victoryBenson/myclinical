import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

interface DashboardLayoutProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function DashboardLayout({
  isDark,
  toggleTheme,
}: DashboardLayoutProps) {
  return (
    <div className="flex">

      <aside
        className="w-[280px] bg-gradient-to-b 
                   from-primary to-primary-dark
                   sticky top-0 h-screen overflow-y-auto
                   custom-scrollbar shadow-xl"
      >
        <Sidebar />
      </aside>

      <main className="flex-1 bg-primary-ultraLight dark:bg-[#0f0f0f] min-h-screen">

        <Header
          isDark={isDark}
          toggleTheme={toggleTheme}
        />

        <Outlet />

      </main>

    </div>
  );
}