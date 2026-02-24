import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout() {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: 300 }} className="bg-primary text-gray-200">
        <Sidebar />
      </aside>

      <main style={{ flex: 1 }}>
        <header className="bg-gray-800 text-white p-4">Topbar</header>
        <Outlet />
      </main>
    </div>
  );
}