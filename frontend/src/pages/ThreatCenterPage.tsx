import Sidebar from "../components/Sidebar";

export default function ThreatCenterPage() {
  const threats = [
    {
      id: 1,
      type: "Brute Force Attempt",
      severity: "High",
      time: "2 mins ago",
    },
    {
      id: 2,
      type: "New Device Login",
      severity: "Medium",
      time: "10 mins ago",
    },
    {
      id: 3,
      type: "Suspicious Download",
      severity: "Critical",
      time: "25 mins ago",
    },
  ];

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
        <h1>Threat Monitoring Center</h1>

        {threats.map((threat) => (
          <div
            key={threat.id}
            style={{
              background: "#1e293b",
              padding: "20px",
              marginTop: "20px",
              borderRadius: "12px",
            }}
          >
            <h3>{threat.type}</h3>

            <p>Severity: {threat.severity}</p>

            <p>{threat.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}