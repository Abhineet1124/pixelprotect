import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import {
Bell,
ShieldAlert,
CheckCircle,
AlertTriangle
} from "lucide-react";

export default function NotificationsPage() {
const [notifications, setNotifications] = useState<any[]>([]);

useEffect(() => {
fetch("http://localhost:5000/api/notifications")
.then((res) => res.json())
.then(setNotifications)
.catch(console.error);
}, []);

return (
<div
style={{
display: "flex",
minHeight: "100vh",
background: "#020617",
color: "white"
}}
> <Sidebar />
<div
    style={{
      flex: 1,
      padding: "30px"
    }}
  >
    <div
      style={{
        background:
          "linear-gradient(135deg,#0ea5e9,#2563eb)",
        padding: "25px",
        borderRadius: "20px",
        marginBottom: "25px"
      }}
    >
      <h1
        style={{
          margin: 0
        }}
      >
        🔔 Security Notification Center
      </h1>

      <p
        style={{
          marginTop: "10px",
          color: "#dbeafe"
        }}
      >
        Real-time alerts, warnings and system updates.
      </p>
    </div>

    {notifications.length === 0 ? (
      <div
        style={{
          background: "#1e293b",
          padding: "25px",
          borderRadius: "18px"
        }}
      >
        No notifications available.
      </div>
    ) : (
      notifications.map((n) => (
        <NotificationCard
          key={n.id}
          notification={n}
        />
      ))
    )}
  </div>
</div>
);
}

function NotificationCard({
notification
}: {
notification: any;
}) {
const color =
notification.type === "ALERT"
? "#ef4444"
: notification.type === "WARNING"
? "#f59e0b"
: "#22c55e";

const icon =
notification.type === "ALERT" ? ( <ShieldAlert size={24} />
) : notification.type === "WARNING" ? ( <AlertTriangle size={24} />
) : ( <CheckCircle size={24} />
);

return (
<div
style={{
background: "#1e293b",
padding: "20px",
borderRadius: "18px",
marginBottom: "15px",
border: `1px solid ${color}`
}}
>
<div
style={{
display: "flex",
justifyContent:
"space-between",
alignItems: "center"
}}
>
<div
style={{
display: "flex",
gap: "12px",
alignItems: "center"
}}
>
<div style={{ color }}>
{icon} </div>
      <h3
        style={{
          margin: 0
        }}
      >
        {notification.title}
      </h3>
    </div>

    <Bell size={18} />
  </div>

  <p
    style={{
      marginTop: "15px",
      color: "#cbd5e1"
    }}
  >
    {notification.message}
  </p>

  <div
    style={{
      marginTop: "12px",
      fontSize: "12px",
      color: "#94a3b8"
    }}
  >
    Type: {notification.type}
  </div>
</div>
);
}