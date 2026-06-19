import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  Users,
  ShieldAlert,
  Activity,
  UserRoundCheck,
  AlertTriangle,
  Server
} from "lucide-react";


export default function AdminDashboardPage(){

const [users,setUsers]=useState<any[]>([]);
const [threats,setThreats]=useState<any[]>([]);
const [logs,setLogs]=useState<any[]>([]);


useEffect(()=>{

fetch("http://localhost:5000/api/admin/users")
.then(r=>r.json())
.then(setUsers);


fetch("http://localhost:5000/api/admin/threats")
.then(r=>r.json())
.then(setThreats);


fetch("http://localhost:5000/api/admin/activity")
.then(r=>r.json())
.then(setLogs);


},[]);



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
"linear-gradient(135deg,#7c3aed,#2563eb)",
padding:"30px",
borderRadius:"20px",
marginBottom:"30px"
}}
>

<h1 style={{margin:0}}>
👑 Admin Security Console
</h1>


<p
style={{
color:"#ddd6fe"
}}
>
Manage users, threats and platform health
</p>

</div>




<div
style={{
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(220px,1fr))",
gap:"20px"
}}
>


<Card
title="Total Users"
value={users.length}
icon={<Users/>}
/>


<Card
title="Threat Events"
value={threats.length}
icon={<ShieldAlert/>}
/>


<Card
title="Activities"
value={logs.length}
icon={<Activity/>}
/>


<Card
title="System Status"
value="ONLINE"
icon={<Server/>}
/>


</div>





<div
style={{
marginTop:"35px",
display:"grid",
gridTemplateColumns:
"1fr 1fr",
gap:"20px"
}}
>



<section
style={box}
>

<h2>
<UserRoundCheck size={20}/>
 Registered Users
</h2>


{
users.map(user=>(

<div
key={user.id}
style={item}
>

<strong>
{user.email}
</strong>

<p
style={{
color:"#94a3b8"
}}
>

Risk Score:
{user.riskScore}

</p>

</div>

))
}

</section>





<section
style={box}
>


<h2>
<AlertTriangle size={20}/>
 Recent Threats
</h2>



{
threats.map(t=>(

<div
key={t.id}
style={item}
>

<strong>
{t.type}
</strong>


<p
style={{
color:"#f87171"
}}
>

Severity:
{t.severity}

</p>


</div>

))
}



</section>


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



const box = {

background:"#1e293b",
padding:"25px",
borderRadius:"18px",
border:"1px solid #334155"

};


const item = {

background:"#0f172a",
padding:"15px",
borderRadius:"12px",
marginTop:"15px"

};