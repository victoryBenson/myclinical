import { useMemo } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Switch } from "antd";
import {
  Sun,
  Moon,
  Search,
  Bell,
  User,
  Settings,
  Shield,
  HelpCircle,
  LogOut,
  Menu,
  ChevronRight,
} from "lucide-react";
import { useAuthStore } from "../store/auth.store";
import type { DepartmentConfig } from "../navigation/navigationConfig";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  currentDepartment?: DepartmentConfig;
  onToggleMobileMenu?: () => void;
}

export default function Header({
  isDark,
  toggleTheme,
  currentDepartment,
  onToggleMobileMenu,
}: HeaderProps) {
  const location = useLocation();
  const { user, logout } = useAuthStore();

  // Find active module name within current department
  const activeModule = useMemo(() => {
    if (!currentDepartment) return null;
    for (const group of currentDepartment.groups) {
      for (const item of group.items) {
        if (
          location.pathname === item.path ||
          (item.path !== "/" &&
            item.path !== "/dashboard" &&
            location.pathname.startsWith(`${item.path}/`))
        ) {
          return item;
        }
      }
    }
    return null;
  }, [currentDepartment, location.pathname]);

  const DeptIcon = currentDepartment?.icon;

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200/80 bg-white/95 px-6 backdrop-blur-md dark:border-white/10 dark:bg-[#141414]/95 transition-colors">
      {/* Left: Mobile Menu Trigger + Breadcrumb trail */}
      <div className="flex items-center gap-3 min-w-0">
        {onToggleMobileMenu && (
          <button
            type="button"
            onClick={onToggleMobileMenu}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:bg-slate-100 lg:hidden dark:border-white/10 dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label="Open mobile navigation"
          >
            <Menu size={18} />
          </button>
        )}

        {/* Dynamic Breadcrumbs */}
        <div className="flex items-center gap-2 min-w-0">
          {DeptIcon && (
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-soft text-primary-darker dark:bg-primary/20 dark:text-primary-300 flex-shrink-0">
              <DeptIcon size={16} />
            </div>
          )}

          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 min-w-0">
            {currentDepartment && (
              <NavLink
                to={currentDepartment.path}
                className="font-medium hover:text-primary transition truncate"
              >
                {currentDepartment.name}
              </NavLink>
            )}

            {activeModule && (
              <>
                <ChevronRight size={13} className="text-slate-400 flex-shrink-0" />
                <span className="font-semibold text-slate-800 dark:text-white truncate">
                  {activeModule.name}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Right: Search + Theme Toggle + Notifications + User Avatar */}
      <div className="flex items-center gap-4">
        {/* Quick Search */}
        <div className="relative hidden md:block w-64 lg:w-80">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search patients, doctors, records..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50/80 py-1.5 pl-9 pr-4 text-xs text-slate-800 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-[#1f1f1f] dark:text-white transition"
          />
        </div>

        {/* Theme Switcher */}
        <Switch
          checked={isDark}
          onChange={toggleTheme}
          className="flex items-center"
          checkedChildren={<Moon size={12} />}
          unCheckedChildren={<Sun size={12} />}
        />

        {/* Notifications Icon with Badge */}
        <div className="relative cursor-pointer p-1.5 text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition">
          <Bell size={18} />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-[#141414]" />
        </div>

        {/* User Profile Dropdown */}
        <div className="relative group">
          <div className="flex items-center gap-2 cursor-pointer p-1 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 text-xs font-bold text-white shadow-sm border border-white/20">
              {user?.name ? user.name.slice(0, 2).toUpperCase() : "DR"}
            </div>
            <div className="hidden sm:block text-left text-xs">
              <p className="font-semibold text-slate-700 dark:text-white leading-tight">
                {user?.name || "Dr. Alex"}
              </p>
              <p className="text-[10px] text-slate-400 leading-tight">
                {user?.role || "Administrator"}
              </p>
            </div>
          </div>

          {/* Profile Flyout */}
          <div className="invisible absolute right-0 mt-2 w-56 transform rounded-2xl border border-slate-200 bg-white p-1.5 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 dark:border-gray-700 dark:bg-[#1f1f1f] z-50">
            <div className="border-b border-slate-100 p-2.5 dark:border-gray-700">
              <p className="text-xs font-semibold text-slate-800 dark:text-white">
                {user?.name || "Dr. Alex"}
              </p>
              <p className="text-[11px] text-slate-400 truncate">
                {user?.email || "alex.clinic@myclinical.health"}
              </p>
            </div>

            <ul className="py-1 text-xs text-slate-700 dark:text-slate-200">
              <li>
                <NavLink
                  to="/system-admin/settings"
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2 hover:bg-primary-soft hover:text-primary-darker dark:hover:bg-[#2a2a2a] transition"
                >
                  <User size={14} /> Personal Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/system-admin/settings"
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2 hover:bg-primary-soft hover:text-primary-darker dark:hover:bg-[#2a2a2a] transition"
                >
                  <Settings size={14} /> System Settings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/system-admin/permissions"
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2 hover:bg-primary-soft hover:text-primary-darker dark:hover:bg-[#2a2a2a] transition"
                >
                  <Shield size={14} /> Security & Roles
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ict/service-desk"
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2 hover:bg-primary-soft hover:text-primary-darker dark:hover:bg-[#2a2a2a] transition"
                >
                  <HelpCircle size={14} /> Help Desk
                </NavLink>
              </li>
              <li className="my-1 border-t border-slate-100 dark:border-gray-700" />
              <li>
                <button
                  type="button"
                  onClick={logout}
                  className="w-full flex items-center gap-2.5 rounded-lg px-3 py-2 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition text-left"
                >
                  <LogOut size={14} /> Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
