import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: 250 }}>
        Sidebar
      </aside>

      <main style={{ flex: 1 }}>
        <header>Topbar</header>
        <Outlet />
      </main>
    </div>
  );
}