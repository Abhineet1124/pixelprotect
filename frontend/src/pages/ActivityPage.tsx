import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import {
  ShieldCheck,
  UploadCloud,
  Clock
} from "lucide-react";


export default function ActivityPage() {

  const [logs,setLogs] = useState<any[]>([]);
  const [loading,setLoading] = useState(true);


  useEffect(()=>{

    fetchActivities();

  },[]);



  async function fetchActivities(){

    try{

      const response =
      await axios.get(
        "http://localhost:5000/api/activity"
      );

      setLogs(response.data);

    }
    catch(error){

      console.log(error);

    }
    finally{

      setLoading(false);

    }

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
"linear-gradient(135deg,#0ea5e9,#2563eb)",
padding:"25px",
borderRadius:"20px",
marginBottom:"30px"
}}
>

<h1 style={{margin:0}}>
🕒 Security Activity Monitor
</h1>

<p
style={{
color:"#dbeafe"
}}
>
Track every security event happening inside PixelProtect
</p>

</div>



{loading && (

<h3>
Loading security events...
</h3>

)}



{
!loading && logs.length===0 && (

<div
style={{
background:"#1e293b",
padding:"25px",
borderRadius:"15px"
}}
>

No activity detected

</div>

)
}





<div
style={{
display:"flex",
flexDirection:"column",
gap:"20px"
}}
>


{logs.map((log)=>(


<div
key={log.id}

style={{
background:"#1e293b",
padding:"22px",
borderRadius:"18px",
borderLeft:
"5px solid #38bdf8",
boxShadow:
"0 10px 25px rgba(0,0,0,.2)"
}}
>


<div
style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center"
}}
>


<div
style={{
display:"flex",
gap:"15px",
alignItems:"center"
}}
>


<div
style={{
background:"#0f172a",
padding:"12px",
borderRadius:"12px",
color:"#38bdf8"
}}
>

{
log.action === "FILE_UPLOAD"
?
<UploadCloud size={25}/>
:
<ShieldCheck size={25}/>
}

</div>


<div>

<h2 style={{margin:0}}>
{log.action}
</h2>

<p
style={{
color:"#cbd5e1"
}}
>
{log.details}
</p>

</div>


</div>



<div
style={{
color:"#94a3b8",
display:"flex",
gap:"6px",
alignItems:"center"
}}
>

<Clock size={15}/>

{
new Date(
log.createdAt
).toLocaleString()
}

</div>


</div>


</div>


))}


</div>


</div>

</div>

);

}