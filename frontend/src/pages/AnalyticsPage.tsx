import {
  Line
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import {
  Shield,
  Activity,
  HardDrive
} from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function AnalyticsPage() {
  const data = {
    labels: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],

    datasets: [
      {
        label: "Threat Detection",
        data: [2, 5, 3, 8, 4, 7, 1],
        borderColor: "#ef4444",
        backgroundColor: "#ef4444",
        borderWidth: 3,
        tension: 0.4
      },

      {
        label: "Login Activity",
        data: [10, 15, 12, 20, 18, 25, 22],
        borderColor: "#38bdf8",
        backgroundColor: "#38bdf8",
        borderWidth: 3,
        tension: 0.4
      }
    ]
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "30px"
      }}
    >
      <h1
        style={{
          marginBottom: "30px"
        }}
      >
        📊 Security Analytics Center
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px"
        }}
      >
        <StatCard
          icon={<Shield size={30} />}
          title="Security Score"
          value="96%"
        />

        <StatCard
          icon={<Activity size={30} />}
          title="Threat Level"
          value="LOW"
        />

        <StatCard
          icon={<HardDrive size={30} />}
          title="Protected Storage"
          value="48 GB"
        />
      </div>

      <div
        style={{
          marginTop: "40px",
          background: "#1e293b",
          padding: "25px",
          borderRadius: "18px",
          border:
            "1px solid rgba(255,255,255,0.08)"
        }}
      >
        <h2>Threat & Login Trends</h2>

        <Line
          data={data}
          options={{
            responsive: true,
            plugins: {
              legend: {
                labels: {
                  color: "white"
                }
              }
            },
            scales: {
              x: {
                ticks: {
                  color: "white"
                }
              },
              y: {
                ticks: {
                  color: "white"
                }
              }
            }
          }}
        />
      </div>
    </div>
  );
}

function StatCard({
  icon,
  title,
  value
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
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
          color: "#38bdf8",
          marginBottom: "10px"
        }}
      >
        {icon}
      </div>

      <h3>{title}</h3>

      <h1
        style={{
          marginTop: "10px"
        }}
      >
        {value}
      </h1>
    </div>
  );
}