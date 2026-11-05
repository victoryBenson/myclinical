import { useState } from "react";
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
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex">
      <aside
        className={`sticky top-0 h-screen overflow-hidden bg-gradient-to-b from-primary to-primary-dark shadow-[0_30px_80px_rgba(17,24,39,0.18)] transition-all duration-300 ${
          isSidebarCollapsed ? "w-[88px]" : "w-[280px]"
        }`}
      >
        <Sidebar
          collapsed={isSidebarCollapsed}
          onToggle={() => setIsSidebarCollapsed((prev) => !prev)}
        />
      </aside>

      <main className="min-h-screen flex-1 bg-primary-ultraLight dark:bg-[#0f0f0f]">
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <Outlet />
      </main>
    </div>
  );
}