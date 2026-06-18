import { useEffect, useState } from "react";
import axios from "axios";


export default function ActivityPage() {

  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    fetchActivities();

  }, []);



  async function fetchActivities() {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/activity"
      );


      setLogs(response.data);

    } catch (error) {

      console.log("Activity fetch error", error);

    } finally {

      setLoading(false);

    }

  }



  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "30px"
      }}
    >


      <h1>
        🕒 Security Activity Center
      </h1>



      <p style={{color:"#94a3b8"}}>
        Monitor your PixelProtect security events
      </p>



      {loading && (
        <h3>
          Loading activities...
        </h3>
      )}



      {!loading && logs.length === 0 && (

        <h3>
          No activity found
        </h3>

      )}



      {logs.map((log)=>(


        <div

          key={log.id}

          style={{
            background:"#1e293b",
            padding:"20px",
            marginTop:"20px",
            borderRadius:"15px",
            borderLeft:"5px solid #38bdf8"
          }}

        >


          <h2>
            🔐 {log.action}
          </h2>


          <p>
            {log.details}
          </p>


          <small style={{color:"#94a3b8"}}>

            {new Date(
              log.createdAt
            ).toLocaleString()}

          </small>


        </div>


      ))}


    </div>

  );

}