import { useEffect, useState } from "react";


export default function ThreatPage(){

const [threats,setThreats] = useState<any[]>([]);



useEffect(()=>{

fetch(
"http://localhost:5000/api/threats"
)
.then(res=>res.json())
.then(data=>setThreats(data));

},[]);



return (

<div
style={{
padding:"30px",
background:"#020617",
minHeight:"100vh",
color:"white"
}}
>


<h1>
🚨 Threat Monitoring Center
</h1>


<div
style={{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"20px",
marginTop:"30px"
}}
>


<div className="card">
<h3>
Total Threats
</h3>

<h1>
{threats.length}
</h1>

</div>



<div className="card">

<h3>
Risk Status
</h3>

<h1>
{
threats.length > 0
?
"⚠️ ALERT"
:
"🛡 SAFE"
}
</h1>


</div>


<div className="card">

<h3>
Security Engine
</h3>

<h1>
ACTIVE
</h1>

</div>


</div>



<h2
style={{
marginTop:"40px"
}}
>
Threat Timeline
</h2>



{
threats.map((t)=>(


<div
key={t.id}
style={{
background:"#1e293b",
padding:"20px",
borderRadius:"12px",
margin:"15px 0"
}}
>


<h3>
{t.type}
</h3>


<p>
Severity:
{" "}
{t.severity}
</p>


<p>
{t.description}
</p>


<p>
Risk Score:
{" "}
{t.riskScore}
</p>


</div>


))
}


</div>

)

}