import { useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  X,
} from "lucide-react";
import type { DepartmentConfig } from "../../navigation/navigationConfig";

interface DepartmentSubSidebarProps {
  department: DepartmentConfig;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export const DepartmentSubSidebar: React.FC<DepartmentSubSidebarProps> = ({
  department,
  collapsed,
  onToggleCollapse,
}) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});

  // Toggle group expansion
  const toggleGroup = (groupTitle: string) => {
    setCollapsedGroups((prev) => ({
      ...prev,
      [groupTitle]: !prev[groupTitle],
    }));
  };

  // Filter items based on search query
  const filteredGroups = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return department.groups;

    return department.groups
      .map((group) => ({
        ...group,
        items: group.items.filter(
          (item) =>
            item.name.toLowerCase().includes(q) ||
            item.description?.toLowerCase().includes(q) ||
            group.groupTitle.toLowerCase().includes(q)
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [department, searchQuery]);

  const DeptIcon = department.icon;

  if (collapsed) {
    return (
      <div className="relative flex h-full w-10 flex-col items-center border-r border-slate-200/80 bg-white/95 dark:border-white/10 dark:bg-[#111827] shadow-sm transition-all duration-300">
        <button
          type="button"
          onClick={onToggleCollapse}
          className="mt-4 flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:border-white/10 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white"
          title={`Expand ${department.name} menu`}
          aria-label={`Expand ${department.name} menu`}
        >
          <ChevronRight size={16} />
        </button>
        <div className="mt-8 flex flex-1 flex-col items-center gap-4">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-soft text-primary-darker dark:bg-primary/20 dark:text-primary-300"
            title={department.name}
          >
            <DeptIcon size={16} />
          </div>
          <div className="writing-vertical text-[11px] font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase select-none">
            {department.shortName}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full w-[260px] flex-col border-r border-slate-200/80 bg-white dark:border-white/10 dark:bg-[#111827] shadow-sm transition-all duration-300">
      {/* Department Context Header */}
      <div className="border-b border-slate-100 p-4 dark:border-white/10">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-darker dark:bg-primary/20 dark:text-primary-300 shadow-sm">
              <DeptIcon size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
                {department.category}
              </span>
              <h3 className="truncate text-sm font-bold text-slate-800 dark:text-white">
                {department.name}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onToggleCollapse}
            className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:border-white/10 dark:hover:bg-slate-800 dark:hover:text-slate-200"
            title="Collapse menu"
            aria-label="Collapse menu"
          >
            <ChevronLeft size={14} />
          </button>
        </div>

        {department.description && (
          <p className="mt-2 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2">
            {department.description}
          </p>
        )}

        {/* Search within this department */}
        <div className="relative mt-3">
          <div className="relative flex items-center rounded-xl border border-slate-200 bg-slate-50/70 dark:border-white/10 dark:bg-slate-900/60 focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500/20 transition">
            <Search className="ml-2.5 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${department.shortName}...`}
              className="w-full bg-transparent px-2.5 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 dark:text-slate-100 focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="mr-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                aria-label="Clear filter"
              >
                <X size={12} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Level 2 Functional Modules List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-4 custom-scrollbar">
        {filteredGroups.map((group, gIdx) => {
          const isCollapsed = collapsedGroups[group.groupTitle] ?? false;

          return (
            <div key={`${group.groupTitle}-${gIdx}`} className="space-y-1">
              <button
                type="button"
                onClick={() => toggleGroup(group.groupTitle)}
                className="flex w-full items-center justify-between px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 transition hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              >
                <span>{group.groupTitle}</span>
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${
                    isCollapsed ? "-rotate-90" : "rotate-0"
                  }`}
                />
              </button>

              {!isCollapsed && (
                <ul className="space-y-1 pt-0.5">
                  {group.items.map((item) => {
                    const ItemIcon = item.icon;
                    // Check if current route matches this item exactly or starts with item's path (for child routes)
                    const isActive =
                      location.pathname === item.path ||
                      (item.path !== "/" &&
                        item.path !== "/dashboard" &&
                        item.path !== "/patients" &&
                        item.path !== "/pharmacy" &&
                        item.path !== "/lab" &&
                        location.pathname.startsWith(`${item.path}/`));

                    return (
                      <li key={item.id}>
                        <NavLink
                          to={item.path}
                          className={`group relative flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-xs font-medium transition-all duration-200 ${
                            isActive
                              ? "bg-gradient-to-r from-primary to-primary-400 text-white shadow-[0_8px_18px_theme(colors.primary.DEFAULT/22%)]"
                              : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                          }`}
                        >
                          {/* Active left bar */}
                          {isActive && (
                            <span className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-r-full bg-white shadow-sm" />
                          )}

                          <div
                            className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border transition ${
                              isActive
                                ? "border-white/20 bg-white/15 text-white"
                                : "border-slate-200/80 bg-white text-slate-500 group-hover:border-slate-300 group-hover:text-slate-800 dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-400 dark:group-hover:text-white"
                            }`}
                          >
                            <ItemIcon size={14} />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1">
                              <span className="truncate">{item.name}</span>
                              {item.badge && (
                                <span
                                  className={`rounded px-1 py-0.2 text-[9px] font-semibold uppercase ${
                                    isActive
                                      ? "bg-white/25 text-white"
                                      : "bg-primary-soft text-primary-darker dark:bg-primary/20 dark:text-primary-300"
                                  }`}
                                >
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            {item.tabs && item.tabs.length > 0 && (
                              <p
                                className={`text-[9px] ${
                                  isActive ? "text-primary-100" : "text-slate-400"
                                }`}
                              >
                                {item.tabs.length} tabs available
                              </p>
                            )}
                          </div>
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}

        {filteredGroups.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-200 dark:border-white/10 p-4 text-center text-xs text-slate-400">
            No modules match “{searchQuery}” in {department.shortName}.
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="border-t border-slate-100 dark:border-white/10 p-3 bg-slate-50/50 dark:bg-slate-900/40">
        <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <span className="font-medium">Department Modules</span>
          <span className="font-semibold text-primary-600 dark:text-primary-400">
            {department.groups.reduce((acc, g) => acc + g.items.length, 0)} Total
          </span>
        </div>
      </div>
    </div>
  );
};

export default DepartmentSubSidebar;
