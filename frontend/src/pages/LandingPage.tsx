import { Link } from "react-router-dom";
import {
Shield,
Lock,
Activity,
Bell,
Database,
Zap
} from "lucide-react";


export default function LandingPage(){

return (

<div
style={{
minHeight:"100vh",
background:
"radial-gradient(circle at top,#1e40af,#020617 55%)",
color:"white",
fontFamily:"Arial"
}}
>


<nav
style={{
padding:"25px 50px",
display:"flex",
justifyContent:"space-between",
alignItems:"center"
}}
>


<h2
style={{
color:"#38bdf8"
}}
>
🛡 PixelProtect
</h2>


<div>

<Link to="/login">

<button style={btn1}>
Login
</button>

</Link>


<Link to="/register">

<button style={btn2}>
Get Started
</button>

</Link>

</div>


</nav>





<section
style={{
padding:"70px 30px",
textAlign:"center"
}}
>


<div
style={{
display:"inline-block",
background:"#0f172a",
padding:"10px 20px",
borderRadius:"30px",
color:"#38bdf8"
}}
>

⚡ AI Security Platform

</div>


<h1
style={{
fontSize:"70px",
margin:"25px 0"
}}
>

Secure.
Detect.
Protect.

</h1>



<p
style={{
fontSize:"20px",
maxWidth:"800px",
margin:"auto",
color:"#cbd5e1",
lineHeight:"1.7"
}}
>

PixelProtect combines encrypted cloud storage,
AI threat detection, activity monitoring and
security analytics into one platform.

</p>



<div
style={{
marginTop:"40px"
}}
>

<Link to="/register">

<button style={bigBtn}>
Start Protecting
</button>

</Link>


</div>


</section>





<section
style={{
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(220px,1fr))",
gap:"20px",
padding:"40px"
}}
>


<Stat
icon={<Shield/>}
title="Threat Protection"
value="24/7"
/>


<Stat
icon={<Lock/>}
title="Encryption"
value="AES-256"
/>


<Stat
icon={<Activity/>}
title="Monitoring"
value="Live"
/>


<Stat
icon={<Database/>}
title="Storage"
value="Secure"
/>


</section>






<section
style={{
padding:"40px",
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(250px,1fr))",
gap:"25px"
}}
>


<Card
icon={<Lock/>}
title="Encrypted Vault"
text="Protect files using secure encryption."
/>


<Card
icon={<Zap/>}
title="AI Detection"
text="Identify suspicious behavior instantly."
/>


<Card
icon={<Bell/>}
title="Smart Alerts"
text="Get notified about security events."
/>


</section>



<footer
style={{
textAlign:"center",
padding:"30px",
color:"#94a3b8"
}}
>

© 2026 PixelProtect Security Platform

</footer>


</div>

)

}





function Card({
icon,
title,
text
}:any){

return (

<div
style={{
background:"#1e293b",
padding:"25px",
borderRadius:"20px",
border:
"1px solid #334155"
}}
>

<div
style={{
color:"#38bdf8"
}}
>
{icon}
</div>


<h2>
{title}
</h2>


<p
style={{
color:"#cbd5e1"
}}
>
{text}
</p>


</div>

)

}




function Stat({
icon,
title,
value
}:any){

return (

<div
style={{
background:
"rgba(30,41,59,.8)",
padding:"25px",
borderRadius:"20px"
}}
>


{icon}


<h1>
{value}
</h1>


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




const btn1={
background:"#0ea5e9",
border:"none",
padding:"12px 25px",
borderRadius:"12px",
color:"white",
cursor:"pointer"
};


const btn2={
marginLeft:"15px",
background:"transparent",
border:"1px solid #38bdf8",
padding:"12px 25px",
borderRadius:"12px",
color:"white",
cursor:"pointer"
};


const bigBtn={
background:"#2563eb",
border:"none",
padding:"16px 40px",
borderRadius:"14px",
color:"white",
fontSize:"18px",
cursor:"pointer"
};