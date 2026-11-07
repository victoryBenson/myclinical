import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Search,
  Settings,
  Sparkles,
  X,
} from "lucide-react";
import { sidebarModules } from "./module/SideBarModule";
import { APP_INFO } from "../app/appInfo";

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

const getInitialSections = () =>
  sidebarModules.reduce<Record<string, boolean>>(
    (acc, module) => ({ ...acc, [module.title]: true }),
    {}
  );

const getFilteredModules = (query: string) => {
  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    return sidebarModules;
  }

  const normalizedQuery = trimmedQuery.toLowerCase();

  return sidebarModules
    .map((module) => ({
      ...module,
      items: module.items.filter(
        (item) =>
          item.name.toLowerCase().includes(normalizedQuery) ||
          module.title.toLowerCase().includes(normalizedQuery)
      ),
    }))
    .filter((module) => module.items.length > 0);
};

const Sidebar = ({ collapsed = false, onToggle }: SidebarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    getInitialSections
  );

  const filteredModules = useMemo(
    () => getFilteredModules(searchQuery),
    [searchQuery]
  );

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden border-r border-white/10 bg-[radial-gradient(circle_at_top_left,theme(colors.primary.DEFAULT/18%),transparent_28%),linear-gradient(180deg,#0f172a_0%,#111827_34%,#0b1220_100%)] text-slate-100 backdrop-blur-xl transition-all duration-300 ${
        collapsed ? "w-full p-3" : "w-full p-4"
      }`}
    >
      <div className="pointer-events-none absolute -left-10 top-12 h-36 w-36 rounded-full bg-primary/20 blur-[90px]" />
      <div className="pointer-events-none absolute bottom-5 right-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-[70px]" />

      <div
        className={`relative z-10 mb-4 flex items-center ${
          collapsed ? "justify-center" : "justify-between"
        }`}
      >
        <div
          className={`flex items-center ${collapsed ? "justify-center" : "gap-3"}`}
        >
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/6 shadow-[0_16px_30px_theme(colors.primary.DEFAULT/18%)] backdrop-blur-md">
            <img
              src="/ithere-icon.svg"
              alt="Ithere Care logo"
              className="h-6 w-6 object-contain"
            />
            <Sparkles className="absolute -right-1 -top-1 h-3.5 w-3.5 text-warning-300" />
          </div>

          {!collapsed && (
            <div className="min-w-0">
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-primary-300/80">
                Ithere Systems
              </p>
              <h2 className="text-base font-semibold tracking-wide text-white">
                {APP_INFO.name}
              </h2>
            </div>
          )}
        </div>

        {!collapsed && onToggle && (
          <button
            type="button"
            onClick={onToggle}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 hover:text-white"
            aria-label="Collapse sidebar"
          >
            <ChevronLeft size={16} />
          </button>
        )}
      </div>

      {collapsed && onToggle && (
        <div className="relative z-10 mb-4 flex justify-center">
          <button
            type="button"
            onClick={onToggle}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 hover:text-white"
            aria-label="Expand sidebar"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}

      {!collapsed && (
        <div className="relative z-10 mb-5">
          <div className="group relative flex items-center rounded-2xl border border-white/10 bg-slate-900/60 shadow-inner shadow-black/20 transition focus-within:border-primary-400/60 focus-within:ring-2 focus-within:ring-primary-400/20">
            <Search className="ml-3 h-4 w-4 text-slate-400 transition group-focus-within:text-primary-300" />
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search modules..."
              aria-label="Search sidebar modules"
              className="w-full bg-transparent px-3 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none"
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="mr-2 rounded-lg p-1 text-slate-400 transition hover:bg-slate-800 hover:text-white"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            ) : (
              <span className="mr-2 hidden rounded-lg border border-white/10 bg-slate-800/70 px-1.5 py-0.5 text-[10px] text-slate-400 sm:inline-block">
                ⌘K
              </span>
            )}
          </div>
        </div>
      )}

      <div className="relative z-10 flex-1 overflow-y-auto pr-1 custom-scrollbar">
        {collapsed ? (
          <div className="flex flex-col items-center gap-2 pt-2">
            {sidebarModules.flatMap((module) => module.items).map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.path} className="group relative z-20">
                  <NavLink
                    to={item.path}
                    end
                    title={item.name}
                    aria-label={item.name}
                    className={({ isActive }) =>
                      `group flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-200 ${
                        isActive
                          ? "border-primary-300/30 bg-white text-primary-darker shadow-[0_16px_30px_rgba(255,255,255,0.18)]"
                          : "border-white/5 bg-slate-900/60 text-slate-300 hover:border-white/10 hover:bg-slate-800 hover:text-white"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <Icon size={18} className={isActive ? "text-primary-darker" : ""} />
                    )}
                  </NavLink>

                  <span className="pointer-events-none absolute left-[calc(100%+12px)] top-1/2 z-30 -translate-y-1/2 whitespace-nowrap rounded-xl border border-white/10 bg-slate-950/95 px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-200 opacity-0 shadow-[0_18px_30px_rgba(15,23,42,0.38)] transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        ) : filteredModules.length > 0 ? (
          <div className="space-y-4">
            {filteredModules.map((module, index) => {
              const isOpen = openSections[module.title] ?? true;

              return (
                <div key={`${module.title}-${index}`} className="space-y-2.5">
                  <button
                    type="button"
                    onClick={() => toggleSection(module.title)}
                    className="flex w-full items-center justify-between rounded-xl px-2 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400 transition hover:text-slate-200"
                  >
                    <span>{module.title}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        isOpen ? "rotate-0" : "-rotate-90"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <ul className="space-y-1.5">
                      {module.items.map((item) => {
                        const Icon = item.icon;

                        return (
                          <li key={item.path}>
                            <NavLink
                              to={item.path}
                              end
                              className={({ isActive }) =>
                                `group relative flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                                  isActive
                                    ? "bg-gradient-to-r from-primary to-primary-400 text-white shadow-[0_18px_30px_theme(colors.primary.DEFAULT/24%)]"
                                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                                }`
                              }
                            >
                              {({ isActive }) => (
                                <>
                                  {isActive && (
                                    <span className="absolute left-0 top-2 h-7 w-1 rounded-r-full bg-white" />
                                  )}

                                  <div
                                    className={`flex h-9 w-9 items-center justify-center rounded-xl border transition ${
                                      isActive
                                        ? "border-white/20 bg-white/10"
                                        : "border-white/10 bg-slate-900/80 text-slate-300 group-hover:border-white/15 group-hover:text-white"
                                    }`}
                                  >
                                    <Icon size={16} />
                                  </div>

                                  <span className="truncate tracking-wide">
                                    {item.name}
                                  </span>
                                </>
                              )}
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/15 bg-slate-900/40 px-4 py-8 text-center text-sm text-slate-300">
            No modules match “{searchQuery}”.
          </div>
        )}
      </div>

      {!collapsed && (
        <div className="relative z-10 mt-4 border-t border-white/10 pt-4">
          <div className="flex items-center justify-between gap-2 rounded-2xl border border-white/10 bg-slate-900/45 px-2.5 py-2.5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-slate-200 to-slate-500 text-xs font-semibold text-slate-900">
                DR
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white">Dr. Alex</p>
                <p className="text-[10px] text-slate-400">Administrator</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                aria-label="Settings"
                className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-800 hover:text-white"
              >
                <Settings size={14} />
              </button>
              <button
                type="button"
                aria-label="Logout"
                className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-800 hover:text-rose-300"
              >
                <LogOut size={14} />
              </button>
            </div>
          </div>

          <p className="mt-3 text-center text-[10px] uppercase tracking-[0.22em] text-slate-500">
            © {new Date().getFullYear()} {APP_INFO.name} • {APP_INFO.shortVersion}
          </p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;