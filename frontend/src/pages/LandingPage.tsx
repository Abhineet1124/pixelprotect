import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div
      style={{
        background: "#020617",
        color: "white",
        minHeight: "100vh",
        padding: "50px",
        textAlign: "center",
      }}
    >
      <h1>🛡 PixelProtect</h1>

      <h2>AI Powered Secure Cloud Storage</h2>

      <p>
        Enterprise-grade encrypted storage,
        threat intelligence and security analytics.
      </p>

      <div style={{ marginTop: "30px" }}>
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/register">
          <button style={{ marginLeft: "10px" }}>
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}