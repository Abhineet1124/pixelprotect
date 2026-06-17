function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 50px",
          borderBottom: "1px solid #334155",
        }}
      >
        <h2>🛡️ PixelProtect</h2>

        <div>
          <button
            style={{
              marginRight: "10px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Login
          </button>

          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "20px",
          }}
        >
          AI-Powered Secure Cloud Storage
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#cbd5e1",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          Protect your digital assets with advanced encryption,
          real-time threat detection, security analytics,
          and intelligent cyber threat monitoring.
        </p>

        <div style={{ marginTop: "30px" }}>
          <button
            style={{
              padding: "15px 30px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              marginRight: "10px",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>

          <button
            style={{
              padding: "15px 30px",
              cursor: "pointer",
            }}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section
        style={{
          padding: "50px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          Core Security Features
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          {[
            "🔐 AES-256 Encryption",
            "⚠️ Threat Detection",
            "📊 Security Analytics",
            "🤖 AI Security Assistant",
            "📂 Secure File Storage",
            "📝 Audit Reports",
          ].map((feature) => (
            <div
              key={feature}
              style={{
                background: "#1e293b",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <h3>{feature}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "30px",
          borderTop: "1px solid #334155",
          marginTop: "50px",
        }}
      >
        © 2026 PixelProtect | Built by Abhineet Kumar Vishwakarma
      </footer>
    </div>
  );
}

export default App;