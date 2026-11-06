import { useState, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainSidebar from "../components/navigation/MainSidebar";
import DepartmentSubSidebar from "../components/navigation/DepartmentSubSidebar";
import Header from "../components/Header";
import {
  findDepartmentByPath,
} from "../navigation/navigationConfig";
import type { DepartmentConfig } from "../navigation/navigationConfig";

interface DashboardLayoutProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function DashboardLayout({
  isDark,
  toggleTheme,
}: DashboardLayoutProps) {
  const location = useLocation();

  // State for Level 1 main sidebar collapse (expanded by default or compact)
  const [isMainSidebarCollapsed, setIsMainSidebarCollapsed] = useState(false);

  // State for Level 2 department sub-sidebar collapse
  const [isSubSidebarCollapsed, setIsSubSidebarCollapsed] = useState(false);

  // State for mobile drawer
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Automatically determine the active department from current route
  const currentDepartment: DepartmentConfig = useMemo(() => {
    return findDepartmentByPath(location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50 dark:bg-[#0f0f0f] text-slate-800 dark:text-slate-100 transition-colors">
      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Navigation Shell (Level 1 + Level 2) - Stationary & Fixed on left */}
      <div
        className={`fixed inset-y-0 left-0 z-40 flex h-full transition-transform duration-300 lg:static lg:translate-x-0 flex-shrink-0 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Level 1: Main Sidebar (Primary Hospital Departments) */}
        <aside className="h-full flex-shrink-0 z-20">
          <MainSidebar
            currentDepartmentId={currentDepartment.id}
            collapsed={isMainSidebarCollapsed}
            onToggleCollapse={() => setIsMainSidebarCollapsed((prev) => !prev)}
            onSelectDepartment={() => {
              // On mobile, keep drawer open to pick sub-module or close if desired
            }}
          />
        </aside>

        {/* Level 2: Department Sub-Sidebar (Contextual Functional Modules) */}
        <aside className="h-full flex-shrink-0 z-10 shadow-lg lg:shadow-none">
          <DepartmentSubSidebar
            department={currentDepartment}
            collapsed={isSubSidebarCollapsed}
            onToggleCollapse={() => setIsSubSidebarCollapsed((prev) => !prev)}
          />
        </aside>
      </div>

      {/* Main Content Area - Independently scrollable */}
      <div className="flex flex-1 flex-col h-full min-w-0 overflow-hidden">
        {/* Shared Enterprise Header (Fixed at top of content area) */}
        <Header
          isDark={isDark}
          toggleTheme={toggleTheme}
          currentDepartment={currentDepartment}
          onToggleMobileMenu={() => setMobileMenuOpen((prev) => !prev)}
        />

        {/* Operational Page Content (Dedicated independent scroll container) */}
        <main className="flex-1 overflow-y-auto min-h-0 bg-slate-50 dark:bg-[#0f0f0f] focus:outline-none">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
