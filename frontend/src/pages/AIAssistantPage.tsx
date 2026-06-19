import { useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  Bot,
  Send,
  ShieldCheck,
  Sparkles
} from "lucide-react";


export default function AIAssistantPage(){

const [message,setMessage]=useState("");
const [reply,setReply]=useState("");
const [loading,setLoading]=useState(false);



async function askAI(){

if(!message) return;


setLoading(true);

try{

const res =
await fetch(
"http://localhost:5000/api/ai",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
message
})

});


const data =
await res.json();


setReply(data.reply);


}
catch{

setReply(
"AI service unavailable. Check backend connection."
);

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
"linear-gradient(135deg,#06b6d4,#2563eb)",
padding:"30px",
borderRadius:"20px"
}}
>


<h1 style={{margin:0}}>

🤖 PixelProtect AI Assistant

</h1>


<p
style={{
color:"#dbeafe"
}}
>

AI powered threat analysis and security guidance

</p>


</div>




<div
style={{
marginTop:"30px",
background:"#1e293b",
padding:"25px",
borderRadius:"20px"
}}
>


<h2
style={{
display:"flex",
gap:"10px",
alignItems:"center"
}}
>

<Bot/>

Ask Security AI

</h2>



<textarea

placeholder="Example: Analyze my security risk..."

value={message}

onChange={
e=>setMessage(e.target.value)
}


style={{

width:"100%",
height:"130px",
marginTop:"20px",
background:"#020617",
color:"white",
padding:"15px",
borderRadius:"15px",
border:"1px solid #334155",
resize:"none"

}}

/>




<button

onClick={askAI}

style={{

marginTop:"20px",
background:"#2563eb",
color:"white",
padding:"12px 25px",
border:"none",
borderRadius:"12px",
cursor:"pointer",
display:"flex",
gap:"10px",
alignItems:"center"

}}

>


<Send size={18}/>

{
loading
?
"Analyzing..."
:
"Analyze"
}


</button>


</div>





<div
style={{
marginTop:"25px",
background:"#1e293b",
padding:"25px",
borderRadius:"20px"
}}
>


<h2
style={{
display:"flex",
gap:"10px",
alignItems:"center"
}}
>

<Sparkles/>

AI Response

</h2>



{
reply ? (

<p
style={{
color:"#cbd5e1",
lineHeight:"1.7"
}}
>
{reply}
</p>

)

:

(

<div
style={{
display:"flex",
gap:"10px",
color:"#94a3b8"
}}
>

<ShieldCheck/>

AI ready for security analysis

</div>

)

}


</div>




</div>

</div>

)

}