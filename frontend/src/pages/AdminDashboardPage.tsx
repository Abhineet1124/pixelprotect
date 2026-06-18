import {useEffect,useState} from "react";


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
background:"#020617",
color:"white",
minHeight:"100vh",
padding:"30px"
}}

>


<h1>
👑 Admin Security Console
</h1>



<div

style={{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"20px"
}}

>


<div className="card">

<h2>
Users
</h2>

<h1>
{users.length}
</h1>

</div>



<div className="card">

<h2>
Threats
</h2>

<h1>
{threats.length}
</h1>

</div>



<div className="card">

<h2>
Activities
</h2>

<h1>
{logs.length}
</h1>

</div>


</div>



<h2>
Users
</h2>


{
users.map(u=>(

<div
key={u.id}
className="card"
>

{u.email}

<br/>

Risk:
{u.riskScore}

</div>

))
}



<h2>
Recent Threats
</h2>


{
threats.map(t=>(

<div
key={t.id}
className="card"
>

{t.type}

<br/>

{t.severity}

</div>

))
}


</div>

)

}