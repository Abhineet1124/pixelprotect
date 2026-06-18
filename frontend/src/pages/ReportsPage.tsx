import { useEffect, useState } from "react";

export default function ReportsPage() {
  const [report, setReport] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/reports")
      .then((res) => res.json())
      .then((data) => setReport(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        background: "#0f172a",
        color: "white"
      }}
    >
      <h1>📊 Audit Reports</h1>

      {!report ? (
        <p>Loading...</p>
      ) : (
        <div
          style={{
            marginTop: "20px",
            background: "#1e293b",
            padding: "20px",
            borderRadius: "12px"
          }}
        >
          <h3>Activities: {report.activities?.length || 0}</h3>
          <h3>Threats: {report.threats?.length || 0}</h3>
          <h3>Notifications: {report.notifications?.length || 0}</h3>

          <p style={{ marginTop: "15px" }}>
            Generated: {new Date(report.generatedAt).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
}