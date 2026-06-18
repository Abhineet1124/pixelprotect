import Sidebar from "../components/Sidebar";

export default function AIAssistantPage() {
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
        <h1>AI Security Assistant</h1>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "12px",
            marginTop: "20px",
          }}
        >
          <p>
            Why is my risk score high?
          </p>

          <hr />

          <p>
            Your account shows:
          </p>

          <ul>
            <li>8 failed login attempts</li>
            <li>Login from new device</li>
            <li>42 downloads in 10 minutes</li>
          </ul>

          <p>
            Recommended:
          </p>

          <ul>
            <li>Enable MFA</li>
            <li>Change password</li>
            <li>Review recent activity</li>
          </ul>
        </div>
      </div>
    </div>
  );
}