import Sidebar from "../components/Sidebar";

export default function AdminDashboardPage() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#020617",
        color: "white",
      }}
    >
      <Sidebar />

      <div style={{ flex: 1, padding: "30px" }}>
        <h1>Admin Dashboard</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
          }}
        >
          <div style={{ background:"#1e293b",padding:"20px",borderRadius:"12px" }}>
            <h2>245</h2>
            <p>Users</p>
          </div>

          <div style={{ background:"#1e293b",padding:"20px",borderRadius:"12px" }}>
            <h2>1284</h2>
            <p>Threats</p>
          </div>

          <div style={{ background:"#1e293b",padding:"20px",borderRadius:"12px" }}>
            <h2>96%</h2>
            <p>Security Health</p>
          </div>

          <div style={{ background:"#1e293b",padding:"20px",borderRadius:"12px" }}>
            <h2>48 GB</h2>
            <p>Storage Usage</p>
          </div>
        </div>
      </div>
    </div>
  );
}
