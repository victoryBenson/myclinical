import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  LogOut,
  Search,
  Settings,
  Sparkles,
  X,
} from "lucide-react";
import {
  HMIS_DEPARTMENTS,
} from "../../navigation/navigationConfig";
import type { DepartmentConfig } from "../../navigation/navigationConfig";
import { useAuthStore } from "../../store/auth.store";

interface MainSidebarProps {
  currentDepartmentId: string;
  collapsed: boolean;
  onToggleCollapse: () => void;
  onSelectDepartment?: (dept: DepartmentConfig) => void;
}

export const MainSidebar: React.FC<MainSidebarProps> = ({
  currentDepartmentId,
  collapsed,
  onToggleCollapse,
  onSelectDepartment,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { user, logout } = useAuthStore();

  const filteredDepartments = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return HMIS_DEPARTMENTS;
    return HMIS_DEPARTMENTS.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.shortName.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden border-r border-white/10 bg-[radial-gradient(circle_at_top_left,theme(colors.primary.DEFAULT/18%),transparent_28%),linear-gradient(180deg,#0f172a_0%,#111827_34%,#0b1220_100%)] text-slate-100 backdrop-blur-xl transition-all duration-300 ${
        collapsed ? "w-[76px] p-2.5" : "w-[248px] p-3.5"
      }`}
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-10 top-12 h-36 w-36 rounded-full bg-primary/20 blur-[90px]" />
      <div className="pointer-events-none absolute bottom-5 right-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-[70px]" />

      {/* Top Header: Logo + Brand + Collapse button */}
      <div
        className={`relative z-10 mb-3.5 flex items-center ${
          collapsed ? "justify-center" : "justify-between"
        }`}
      >
        <div className={`flex items-center ${collapsed ? "justify-center" : "gap-2.5"}`}>
          <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_12px_24px_theme(colors.primary.DEFAULT/18%)] backdrop-blur-md">
            <img
              src="/logo.png"
              alt="myClinical logo"
              className="h-5 w-5 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            {/* <Sparkles className="absolute -right-1 -top-1 h-3.5 w-3.5 text-warning-300" /> */}
          </div>

          {!collapsed && (
            <div className="min-w-0">
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-primary-300/90">
                Enterprise HMIS
              </p>
              <h2 className="truncate text-base font-bold tracking-tight text-white">
                myClinical
              </h2>
            </div>
          )}
        </div>

        {!collapsed && (
          <button
            type="button"
            onClick={onToggleCollapse}
            className="flex h-7 w-7 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
            aria-label="Collapse departmental navigation"
            title="Collapse departmental rail"
          >
            <ChevronLeft size={15} />
          </button>
        )}
      </div>

      {collapsed && (
        <div className="relative z-10 mb-3 flex justify-center">
          <button
            type="button"
            onClick={onToggleCollapse}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
            aria-label="Expand departmental navigation"
            title="Expand departmental rail"
          >
            <ChevronRight size={15} />
          </button>
        </div>
      )}

      {/* Quick Department Search (expanded mode) */}
      {!collapsed && (
        <div className="relative z-10 mb-3">
          <div className="group relative flex items-center rounded-xl border border-white/10 bg-slate-900/60 shadow-inner shadow-black/20 transition focus-within:border-primary-400/60 focus-within:ring-2 focus-within:ring-primary-400/20">
            <Search className="ml-2.5 h-3.5 w-3.5 text-slate-400 transition group-focus-within:text-primary-300" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search departments..."
              aria-label="Filter hospital departments"
              className="w-full bg-transparent px-2.5 py-1.5 text-xs text-white placeholder:text-slate-400 focus:outline-none"
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="mr-1.5 rounded-lg p-1 text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                <X size={12} />
              </button>
            ) : (
              <span className="mr-2 hidden rounded-md border border-white/10 bg-slate-800/80 px-1 py-0.5 text-[9px] text-slate-400 sm:inline-block">
                ⌘D
              </span>
            )}
          </div>
        </div>
      )}

      {/* Level 1 Department List */}
      <div className="relative z-10 flex-1 space-y-1 overflow-y-auto pr-0.5 custom-scrollbar">
        {!collapsed && (
          <div className="px-1.5 pb-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
            Hospital Departments ({filteredDepartments.length})
          </div>
        )}

        <ul className="space-y-1">
          {filteredDepartments.map((dept) => {
            const Icon = dept.icon;
            const isSelected = dept.id === currentDepartmentId;

            return (
              <li key={dept.id} className="relative group">
                <NavLink
                  to={dept.path}
                  onClick={() => onSelectDepartment?.(dept)}
                  className={`group relative flex items-center rounded-xl transition-all duration-200 ${
                    collapsed
                      ? "h-11 w-11 justify-center mx-auto"
                      : "gap-2.5 px-2.5 py-2"
                  } ${
                    isSelected
                      ? "bg-gradient-to-r from-primary to-primary-400 text-white shadow-[0_12px_24px_theme(colors.primary.DEFAULT/25%)] font-semibold"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                  title={collapsed ? dept.name : undefined}
                >
                  {/* Left accent bar for selected item */}
                  {isSelected && (
                    <span className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-r-full bg-white shadow-sm" />
                  )}

                  {/* Icon Container */}
                  <div
                    className={`flex flex-shrink-0 items-center justify-center rounded-lg border transition ${
                      collapsed ? "h-9 w-9" : "h-7 w-7"
                    } ${
                      isSelected
                        ? "border-white/25 bg-white/15 text-white"
                        : "border-white/10 bg-slate-900/80 text-slate-300 group-hover:border-white/15 group-hover:text-white"
                    }`}
                  >
                    <Icon size={collapsed ? 18 : 15} />
                  </div>

                  {/* Department Details (Expanded mode) */}
                  {!collapsed && (
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="truncate text-xs tracking-wide">
                          {dept.name}
                        </span>
                        {dept.badge && (
                          <span
                            className={`rounded-md px-1 py-0.2 text-[9px] font-semibold uppercase ${
                              isSelected
                                ? "bg-white/20 text-white"
                                : "bg-primary-soft text-primary-darker"
                            }`}
                          >
                            {dept.badge}
                          </span>
                        )}
                      </div>
                      <p
                        className={`truncate text-[10px] ${
                          isSelected ? "text-primary-100" : "text-slate-400"
                        }`}
                      >
                        {dept.category}
                      </p>
                    </div>
                  )}
                </NavLink>

                {/* Collapsed Tooltip */}
                {collapsed && (
                  <div className="pointer-events-none absolute left-[calc(100%+10px)] top-1/2 z-40 -translate-y-1/2 whitespace-nowrap rounded-xl border border-white/10 bg-slate-950/95 px-3 py-1.5 text-xs font-medium text-slate-200 opacity-0 shadow-2xl transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-1">
                    <p className="font-semibold text-white">{dept.name}</p>
                    <p className="text-[10px] text-primary-300">{dept.category}</p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {filteredDepartments.length === 0 && (
          <div className="rounded-xl border border-dashed border-white/15 bg-slate-900/40 p-3 text-center text-xs text-slate-400">
            No department matches “{searchQuery}”
          </div>
        )}
      </div>

      {/* Bottom User Profile Section */}
      <div className="relative z-10 mt-3 border-t border-white/10 pt-3">
        {collapsed ? (
          <div className="flex flex-col items-center gap-2">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-700 text-xs font-bold text-white shadow-md cursor-pointer"
              title={`${user?.name || "Dr. Alex"} (HMIS Administrator)`}
            >
              DR
            </div>
            <button
              type="button"
              onClick={logout}
              className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-800 hover:text-rose-400 transition"
              title="Logout"
              aria-label="Logout"
            >
              <LogOut size={15} />
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-slate-900/50 p-2">
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-700 text-xs font-bold text-white">
                  DR
                </div>
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-white">
                    {user?.name || "Dr. Alex"}
                  </p>
                  <p className="truncate text-[10px] text-slate-400">
                    Administrator
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-0.5">
                <NavLink
                  to="/system-admin/settings"
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-800 hover:text-white"
                  title="System Settings"
                >
                  <Settings size={13} />
                </NavLink>
                <button
                  type="button"
                  onClick={logout}
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-800 hover:text-rose-400"
                  title="Sign out"
                >
                  <LogOut size={13} />
                </button>
              </div>
            </div>

            <p className="mt-2 text-center text-[9px] uppercase tracking-[0.2em] text-slate-500">
              © {new Date().getFullYear()} myClinical HMIS
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainSidebar;
