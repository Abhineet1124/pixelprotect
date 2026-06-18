import { useEffect, useState } from "react";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/notifications")
      .then((res) => res.json())
      .then((data) => setNotifications(data))
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
      <h1 style={{ marginBottom: "20px" }}>
        🔔 Notification Center
      </h1>

      {notifications.length === 0 ? (
        <p>No notifications found.</p>
      ) : (
        notifications.map((n) => (
          <div
            key={n.id}
            style={{
              background: "#1e293b",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "12px",
              border: "1px solid #334155"
            }}
          >
            <h3>{n.title}</h3>
            <p>{n.message}</p>

            <div
              style={{
                fontSize: "12px",
                color: "#94a3b8"
              }}
            >
              {n.type}
            </div>
          </div>
        ))
      )}
    </div>
  );
}