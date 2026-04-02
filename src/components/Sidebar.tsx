
import { NavLink } from "react-router-dom";
import { sidebarModules } from "./module/SideBarModule";


const Sidebar = () => {
  return (
    <div className="h-full flex flex-col p-5">

      <div className="flex items-center gap-3 mb-10">
        <div className="bg-white/20 p-2 rounded-xl backdrop-blur">
          <img
            src="/logo.png"
            alt="logo"
            className="w-8 h-8 object-contain"
          />
        </div>
        <h2 className="text-white font-semibold text-lg tracking-wide">
          MyClinic
        </h2>
      </div>

      <div className="flex-1 space-y-8">
        {sidebarModules.map((module, index) => (
          <div key={index} className="space-y-3">

            <h3 className="text-[11px] uppercase tracking-widest text-white/50 font-semibold px-3">
              {module.title}
            </h3>

            <ul className="space-y-1">
              {module.items.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li key={idx}>
                    <NavLink
                      to={item.path}
                      // end={item.path === "/" || item.path === "/pharmacy"}
                      end
                      className={({ isActive }) =>
                        `group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                          isActive
                            ? "bg-white text-primary shadow-md"
                            : "text-white hover:bg-white/10 hover:text-white/80"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <div
                            className={`p-2 rounded-lg transition ${
                              isActive
                                ? "bg-primary/10"
                                : "bg-white/10 group-hover:bg-white/20"
                            }`}
                          >
                            <Icon size={16} />
                          </div>

                          <span className="text-sm font-medium tracking-wide">
                            {item.name}
                          </span>
                        </>
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>

          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-white/10">
        <p className="text-xs text-white/40 text-center">
          © {new Date().getFullYear()} MyClinic
        </p>
      </div>
    </div>
  );
};

export default Sidebar;