import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { Switch } from "antd";
import { Sun, Moon, LayoutDashboard } from "lucide-react";
import {
  Search,
  Bell,
  User,
  Settings,
  Shield,
  HelpCircle,
  LogOut,
  Users,
  FlaskConical,
  Pill,
} from "lucide-react";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const location = useLocation();

  // const title = useMemo(() => {
  //   const path = location.pathname;

  //   if (path.startsWith("/lab")) {
  //     return "Lab Management";
  //   }
  //   const segments = path.split("/").filter(Boolean);
  //   if (segments.length === 0) return "Dashboard";

  //   const last = segments[segments.length - 1];
  //   return last.charAt(0).toUpperCase() + last.slice(1);
  // }, [location.pathname]);

    const { title, Icon } = useMemo(() => {
    const sectionConfig: Record<
      string,
      { title: string; Icon: React.ElementType }
    > = {
      lab: {
        title: "Lab Management",
        Icon: FlaskConical,
      },
      pharmacy: {
        title: "Pharmacy Management",
        Icon: Pill,
      },
      patients: {
        title: "Patient Management",
        Icon: Users,
      },
    };

    const segments = location.pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
      return { title: "Dashboard", Icon: LayoutDashboard };
    }

    const firstSegment = segments[0];

    if (sectionConfig[firstSegment]) {
      return sectionConfig[firstSegment];
    }

    const last = segments[segments.length - 1];
    return {
      title: last.charAt(0).toUpperCase() + last.slice(1),
      Icon: LayoutDashboard,
    };
    }, [location.pathname]);


  return (
    <header className="bg-white dark:bg-[#141414] shadow-sm px-6 h-20 flex items-center justify-between sticky top-0 z-10 transition-colors">

      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-primary/10 dark:bg-primary/20">
          <Icon size={20} className="text-primary" />
        </div>
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-6">
        
        <Switch
          checked={isDark}
          onChange={toggleTheme}
          className="flex items-center"
          checkedChildren={<Moon size={14} />}
          unCheckedChildren={<Sun size={14} />}
        />

        <div className="relative w-80">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-[#1f1f1f] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-light transition"
          />
        </div>

        <div className="flex items-center gap-4 relative">
          <Bell
            className="text-gray-600 dark:text-gray-300 cursor-pointer hover:text-primary-dark transition"
            size={20}
          />

          <div className="relative group">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src="https://i.pravatar.cc/40"
                alt="profile"
                className="w-9 h-9 rounded-full object-cover border-2 border-primary-light"
              />
              <div className="text-sm">
                <p className="font-medium text-gray-700 dark:text-white">
                  Dr. Lilian
                </p>
                <p className="text-gray-400 text-xs">Admin</p>
              </div>
            </div>

            <div
              className="
                absolute right-0 mt-3 w-56 
                bg-white dark:bg-[#1f1f1f] shadow-xl rounded-xl 
                opacity-0 invisible 
                group-hover:opacity-100 group-hover:visible
                transition-all duration-200
                transform group-hover:translate-y-0 translate-y-2
                z-50
              "
            >
              <div className="p-3 border-b dark:border-gray-700">
                <p className="font-semibold text-gray-800 dark:text-white">
                  Dr. Lilian
                </p>
                <p className="text-xs text-gray-400">
                  lilian@clinic.com
                </p>
              </div>

              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">

                <li className="flex items-center gap-3 px-4 py-2 hover:bg-primary-ultraLight dark:hover:bg-[#2a2a2a] cursor-pointer">
                  <User size={16} /> Personal Info
                </li>

                <li className="flex items-center gap-3 px-4 py-2 hover:bg-primary-ultraLight dark:hover:bg-[#2a2a2a] cursor-pointer">
                  <Settings size={16} /> Account Settings
                </li>

                <li className="flex items-center gap-3 px-4 py-2 hover:bg-primary-ultraLight dark:hover:bg-[#2a2a2a] cursor-pointer">
                  <Shield size={16} /> Security
                </li>

                <li className="flex items-center gap-3 px-4 py-2 hover:bg-primary-ultraLight dark:hover:bg-[#2a2a2a] cursor-pointer">
                  <HelpCircle size={16} /> Help & Support
                </li>

                <div className="border-t my-2 dark:border-gray-700"></div>

                <li className="flex items-center gap-3 px-4 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-[#2a2a2a] cursor-pointer">
                  <LogOut size={16} /> Logout
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}