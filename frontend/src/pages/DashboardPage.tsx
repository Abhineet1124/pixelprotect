import { useEffect, useState } from "react";
import {
  Shield,
  FolderLock,
  Activity,
  Bell,
  TrendingUp
} from "lucide-react";

export default function DashboardPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/dashboard")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#0f172a",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px"
        }}
      >
        Loading Security Dashboard...
      </div>
    );
  }

  const securityScore = Math.max(
    100 - data.threats * 10,
    60
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "30px"
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg,#0ea5e9,#2563eb)",
          padding: "30px",
          borderRadius: "20px",
          marginBottom: "30px",
          boxShadow:
            "0 10px 30px rgba(14,165,233,0.25)"
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "32px"
          }}
        >
          🛡 PixelProtect Security Center
        </h1>

        <p
          style={{
            marginTop: "10px",
            color: "#e0f2fe"
          }}
        >
          Monitor threats, files, activity and platform security in real time.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "30px"
        }}
      >
        <Card
          title="Secure Files"
          value={data.files}
          icon={<FolderLock size={28} />}
        />

        <Card
          title="Threats"
          value={data.threats}
          icon={<Shield size={28} />}
        />

        <Card
          title="Activities"
          value={data.activities}
          icon={<Activity size={28} />}
        />

        <Card
          title="Notifications"
          value={data.notifications}
          icon={<Bell size={28} />}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px"
        }}
      >
        <div
          style={{
            background: "#1e293b",
            borderRadius: "18px",
            padding: "25px",
            border:
              "1px solid rgba(255,255,255,0.08)"
          }}
        >
          <h2>Threat Intelligence Feed</h2>

          <div style={{ marginTop: "20px" }}>
            <FeedItem text="Failed login monitoring active" />
            <FeedItem text="Encrypted file storage operational" />
            <FeedItem text="Activity tracking online" />
            <FeedItem text="Notification system connected" />
          </div>
        </div>

        <div
          style={{
            background: "#1e293b",
            borderRadius: "18px",
            padding: "25px",
            border:
              "1px solid rgba(255,255,255,0.08)"
          }}
        >
          <h2>Security Score</h2>

          <div
            style={{
              marginTop: "30px",
              textAlign: "center"
            }}
          >
            <TrendingUp size={40} />

            <h1
              style={{
                color: "#38bdf8",
                margin: "10px 0"
              }}
            >
              {securityScore}/100
            </h1>

            <p>
              Overall platform security health
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({
  title,
  value,
  icon
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: "25px",
        borderRadius: "18px",
        border:
          "1px solid rgba(255,255,255,0.08)"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        {icon}
        <h2>{value}</h2>
      </div>

      <p
        style={{
          marginTop: "10px",
          color: "#94a3b8"
        }}
      >
        {title}
      </p>
    </div>
  );
}

function FeedItem({
  text
}: {
  text: string;
}) {
  return (
    <div
      style={{
        padding: "12px",
        marginBottom: "10px",
        background: "#0f172a",
        borderRadius: "10px"
      }}
    >
      {text}
    </div>
  );
}