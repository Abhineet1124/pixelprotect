import { Shield, Activity, AlertTriangle, FolderOpen } from "lucide-react";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <Shield size={28} />
          <span>PixelProtect</span>
        </div>

        <div className="nav-links">
          <a href="#">Features</a>
          <a href="#">Security</a>
          <a href="#">Pricing</a>

          <button className="login-btn">Login</button>
          <button className="register-btn">Get Started</button>
        </div>
      </nav>

      <section className="hero">
        <h1>AI Powered Secure Cloud Storage</h1>

        <p>
          Enterprise-grade encrypted storage,
          threat intelligence, anomaly detection,
          compliance auditing and security analytics.
        </p>

        <div className="hero-buttons">
          <button className="register-btn">
            Start Free
          </button>

          <button className="login-btn">
            Watch Demo
          </button>
        </div>
      </section>

      <section className="stats-grid">
        <div className="card">
          <Shield size={40} />
          <h2>96%</h2>
          <p>Security Score</p>
        </div>

        <div className="card">
          <AlertTriangle size={40} />
          <h2>1284</h2>
          <p>Threats Blocked</p>
        </div>

        <div className="card">
          <FolderOpen size={40} />
          <h2>48 GB</h2>
          <p>Protected Storage</p>
        </div>

        <div className="card">
          <Activity size={40} />
          <h2>24/7</h2>
          <p>Monitoring</p>
        </div>
      </section>
    </div>
  );
}