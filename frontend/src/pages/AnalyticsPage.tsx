import Sidebar from "../components/Sidebar";

export default function AnalyticsPage() {
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
        <h1>Security Analytics</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h2>96%</h2>
            <p>Security Score</p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h2>82</h2>
            <p>Risk Score</p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h2>1284</h2>
            <p>Threat Events</p>
          </div>
        </div>
      </div>
    </div>
  );
}