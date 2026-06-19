import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  FileBarChart,
  ShieldAlert,
  Activity,
  Bell,
  CalendarCheck
} from "lucide-react";


export default function ReportsPage(){

const [report,setReport]=useState<any>(null);


useEffect(()=>{

fetch(
"http://localhost:5000/api/reports"
)

.then(res=>res.json())
.then(setReport)
.catch(console.error);


},[]);



if(!report){

return (

<div
style={{
minHeight:"100vh",
background:"#020617",
color:"white",
display:"flex",
alignItems:"center",
justifyContent:"center"
}}
>

Loading Security Report...

</div>

)

}



return (

<div
style={{
display:"flex",
minHeight:"100vh",
background:"#020617",
color:"white"
}}
>


<Sidebar/>


<div
style={{
flex:1,
padding:"30px"
}}
>


<div
style={{
background:
"linear-gradient(135deg,#14b8a6,#2563eb)",
padding:"30px",
borderRadius:"20px"
}}
>


<h1 style={{margin:0}}>
📊 Security Audit Reports
</h1>


<p
style={{
color:"#ccfbf1"
}}
>
Generated security overview of PixelProtect platform
</p>


</div>





<div
style={{
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(220px,1fr))",
gap:"20px",
marginTop:"30px"
}}
>


<Card

title="Threat Events"

value={
report.threats?.length || 0
}

icon={<ShieldAlert/>}

/>



<Card

title="Activities"

value={
report.activities?.length || 0
}

icon={<Activity/>}

/>



<Card

title="Notifications"

value={
report.notifications?.length || 0
}

icon={<Bell/>}

/>



</div>






<div
style={{
marginTop:"30px",
background:"#1e293b",
padding:"25px",
borderRadius:"20px"
}}
>


<h2>
<FileBarChart/>
 Audit Summary
</h2>


<p
style={{
color:"#94a3b8"
}}
>

Report Generated:

</p>


<h3>

<CalendarCheck size={18}/>

{" "}

{
new Date(
report.generatedAt
).toLocaleString()
}

</h3>



<div
style={{
marginTop:"25px",
background:"#0f172a",
padding:"20px",
borderRadius:"15px"
}}
>

<h3>
Security Status
</h3>


<p
style={{
color:"#4ade80"
}}
>

● System Monitoring Active

</p>


<p
style={{
color:"#4ade80"
}}
>

● Threat Detection Online

</p>


<p
style={{
color:"#4ade80"
}}
>

● Activity Logging Enabled

</p>


</div>


</div>




</div>


</div>

)

}




function Card({
title,
value,
icon
}:any){

return (

<div
style={{
background:"#1e293b",
padding:"25px",
borderRadius:"18px",
border:
"1px solid #334155"
}}
>


<div
style={{
display:"flex",
justifyContent:"space-between"
}}
>

{icon}

<h1>
{value}
</h1>


</div>


<p
style={{
color:"#94a3b8"
}}
>

{title}

</p>


</div>

)

}