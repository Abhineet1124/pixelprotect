import Sidebar from "../components/Sidebar";

export default function DashboardPage() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#020617,#0f172a,#020617)",
        color: "white",
      }}
    >
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "35px",
          overflow: "auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h1 style={{ fontSize: "32px" }}>
              Security Dashboard
            </h1>

            <p style={{ color: "#94a3b8" }}>
              Real-time protection overview
            </p>
          </div>


          <div
            style={{
              background:"#052e16",
              padding:"12px 20px",
              borderRadius:"20px",
              color:"#4ade80",
              border:"1px solid #22c55e"
            }}
          >
            ● System Protected
          </div>
        </div>



        {/* Cards */}
        <section
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(3,1fr)",
            gap:"20px",
            marginTop:"35px"
          }}
        >

          <Card
            title="Security Score"
            value="96%"
            icon="🛡️"
            detail="Excellent protection"
          />

          <Card
            title="Threats Blocked"
            value="1284"
            icon="⚡"
            detail="Last 30 days"
          />

          <Card
            title="Protected Storage"
            value="48 GB"
            icon="🔒"
            detail="Encrypted files"
          />

        </section>



        {/* Lower Section */}
        <div
          style={{
            display:"grid",
            gridTemplateColumns:"2fr 1fr",
            gap:"25px",
            marginTop:"30px"
          }}
        >


          {/* Activity */}
          <div
            style={{
              background:"#111827",
              padding:"25px",
              borderRadius:"18px",
              border:"1px solid #1e293b"
            }}
          >

            <h2>
              Recent Security Activity
            </h2>


            {[
              "Malware scan completed",
              "New device authenticated",
              "Suspicious login blocked",
              "File encryption completed"
            ].map((item,index)=>(
              <div
                key={index}
                style={{
                  marginTop:"18px",
                  padding:"15px",
                  background:"#1e293b",
                  borderRadius:"10px"
                }}
              >
                🟢 {item}
              </div>
            ))}


          </div>




          {/* Protection */}
          <div
            style={{
              background:"#111827",
              padding:"25px",
              borderRadius:"18px",
              border:"1px solid #1e293b"
            }}
          >

            <h2>
              Protection
            </h2>


            <Progress
              name="File Encryption"
              value="90%"
            />

            <Progress
              name="Threat Detection"
              value="96%"
            />

            <Progress
              name="AI Monitoring"
              value="85%"
            />


          </div>


        </div>


      </main>
    </div>
  );
}





function Card({
  title,
  value,
  icon,
  detail
}:{
  title:string;
  value:string;
  icon:string;
  detail:string;
}){

return (

<div
style={{
background:"rgba(30,41,59,.8)",
padding:"25px",
borderRadius:"18px",
boxShadow:"0 0 25px rgba(59,130,246,.15)",
border:"1px solid #334155"
}}
>


<div
style={{
fontSize:"30px"
}}
>
{icon}
</div>


<h2
style={{
fontSize:"34px",
margin:"10px 0"
}}
>
{value}
</h2>


<p>{title}</p>


<small
style={{
color:"#94a3b8"
}}
>
{detail}
</small>


</div>

)

}




function Progress({
name,
value
}:{
name:string;
value:string;
}){

return (

<div style={{marginTop:"25px"}}>

<p>{name}</p>


<div
style={{
height:"8px",
background:"#1e293b",
borderRadius:"10px"
}}
>

<div
style={{
width:value,
height:"100%",
background:"#22c55e",
borderRadius:"10px"
}}
/>

</div>

</div>

)

}