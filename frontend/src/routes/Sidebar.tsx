import {
  LayoutDashboard,
  FolderLock,
  ShieldAlert,
  BarChart3,
  Activity,
  Bot,
  Settings,
  LogOut
} from "lucide-react";

import { useNavigate } from "react-router-dom";


export default function Sidebar() {

const navigate = useNavigate();


const menu = [
{
name:"Dashboard",
icon:<LayoutDashboard size={20}/>,
path:"/dashboard"
},
{
name:"Secure Files",
icon:<FolderLock size={20}/>,
path:"/files"
},
{
name:"Threat Center",
icon:<ShieldAlert size={20}/>,
path:"/threats"
},
{
name:"Analytics",
icon:<BarChart3 size={20}/>,
path:"/analytics"
},
{
name:"Activity",
icon:<Activity size={20}/>,
path:"/activity"
},
{
name:"AI Assistant",
icon:<Bot size={20}/>,
path:"/assistant"
},
{
name:"Settings",
icon:<Settings size={20}/>,
path:"/settings"
}

];


function logout(){

localStorage.removeItem("token");
localStorage.removeItem("user");

navigate("/login");

}



return (

<div
style={{
width:"260px",
background:"#020617",
padding:"25px",
borderRight:"1px solid #1e293b",
minHeight:"100vh"
}}
>


<h2
style={{
color:"#38bdf8",
marginBottom:"35px"
}}
>
🛡 PixelProtect
</h2>



{
menu.map((item)=>(
<div
key={item.name}
onClick={()=>navigate(item.path)}
style={{
display:"flex",
gap:"15px",
alignItems:"center",
padding:"14px",
marginBottom:"10px",
borderRadius:"12px",
cursor:"pointer",
color:"#cbd5e1",
transition:"0.3s"
}}

onMouseEnter={(e)=>
e.currentTarget.style.background="#1e293b"
}

onMouseLeave={(e)=>
e.currentTarget.style.background="transparent"
}

>

{item.icon}

{item.name}

</div>
))
}




<div
onClick={logout}
style={{
marginTop:"40px",
display:"flex",
gap:"15px",
padding:"14px",
cursor:"pointer",
color:"#f87171"
}}
>

<LogOut size={20}/>

Logout

</div>



</div>

);

}