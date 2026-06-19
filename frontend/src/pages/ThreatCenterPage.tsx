import Sidebar from "../components/Sidebar";
import {
ShieldAlert,
AlertTriangle,
ShieldCheck
} from "lucide-react";

export default function ThreatCenterPage() {
const threats = [
{
id: 1,
type: "Brute Force Attempt",
severity: "HIGH",
time: "2 mins ago",
score: 85
},
{
id: 2,
type: "New Device Login",
severity: "MEDIUM",
time: "10 mins ago",
score: 52
},
{
id: 3,
type: "Suspicious Download",
severity: "CRITICAL",
time: "25 mins ago",
score: 95
}
];

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
    <h1
      style={{
        marginBottom: "30px"
      }}
    >
      🛡 Threat Intelligence Center
    </h1>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(320px,1fr))",
        gap: "20px"
      }}
    >
      {threats.map((threat) => (
        <ThreatCard
          key={threat.id}
          threat={threat}
        />
      ))}
    </div>
  </div>
</div>
);
}

function ThreatCard({
threat
}: {
threat: any;
}) {
const color =
threat.severity === "CRITICAL"
? "#ef4444"
: threat.severity === "HIGH"
? "#f97316"
: "#eab308";

const icon =
threat.severity === "CRITICAL" ? ( <ShieldAlert size={30} />
) : threat.severity === "HIGH" ? ( <AlertTriangle size={30} />
) : ( <ShieldCheck size={30} />
);

return (
<div
style={{
background: "#1e293b",
borderRadius: "18px",
padding: "25px",
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
color
}}
>
{icon} </div>
    <span
      style={{
        background: color,
        color: "white",
        padding:
          "6px 12px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: "bold"
      }}
    >
      {threat.severity}
    </span>
  </div>

  <h2
    style={{
      marginTop: "20px"
    }}
  >
    {threat.type}
  </h2>

  <p
    style={{
      color: "#94a3b8"
    }}
  >
    Detected {threat.time}
  </p>

  <div
    style={{
      marginTop: "20px"
    }}
  >
    <p>
      Risk Score:
      <strong>
        {" "}
        {threat.score}
      </strong>
    </p>

    <div
      style={{
        marginTop: "10px",
        height: "8px",
        background:
          "#0f172a",
        borderRadius: "999px"
      }}
    >
      <div
        style={{
          width:
            threat.score + "%",
          height: "100%",
          background:
            color,
          borderRadius:
            "999px"
        }}
      />
    </div>
  </div>
</div>
);
}
