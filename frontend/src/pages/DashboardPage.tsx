import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/dashboard")
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "30px" }}>
      <h1>🛡 PixelProtect Dashboard</h1>

      <h3>Total Files: {data.files}</h3>
      <h3>Total Threats: {data.threats}</h3>
      <h3>Total Activities: {data.activities}</h3>
      <h3>Total Notifications: {data.notifications}</h3>
    </div>
  );
}