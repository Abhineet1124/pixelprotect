import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  FolderLock,
  ShieldAlert,
  BarChart3,
  Activity,
  Bot,
  UserCog,
  Settings,
  Bell,
  FileText
} from "lucide-react";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "20px",
        borderRight: "1px solid #1e293b"
      }}
    >
      <h2
        style={{
          color: "#38bdf8",
          marginBottom: "30px"
        }}
      >
        🛡 PixelProtect
      </h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}
      >
        <Menu
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          link="/dashboard"
        />

        <Menu
          icon={<FolderLock size={20} />}
          text="Secure Files"
          link="/files"
        />

        <Menu
          icon={<ShieldAlert size={20} />}
          text="Threat Center"
          link="/threats"
        />

        <Menu
          icon={<Activity size={20} />}
          text="Activity Monitor"
          link="/activity"
        />

        <Menu
          icon={<BarChart3 size={20} />}
          text="Analytics"
          link="/analytics"
        />

        <Menu
          icon={<FileText size={20} />}
          text="Reports"
          link="/reports"
        />

        <Menu
          icon={<Bot size={20} />}
          text="AI Assistant"
          link="/assistant"
        />

        <Menu
          icon={<UserCog size={20} />}
          text="Admin Panel"
          link="/admin"
        />

        <Menu
          icon={<Bell size={20} />}
          text="Notifications"
          link="/notifications"
        />

        <Menu
          icon={<Settings size={20} />}
          text="Settings"
          link="/settings"
        />
      </nav>
    </div>
  );
}

function Menu({
  icon,
  text,
  link
}: {
  icon: any;
  text: string;
  link: string;
}) {
  return (
    <Link
      to={link}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "12px",
        borderRadius: "10px",
        color: "#cbd5e1",
        textDecoration: "none"
      }}
    >
      {icon}
      {text}
    </Link>
  );
}