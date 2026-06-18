import {
useState
}
from "react";


export default function AIAssistantPage(){


const [message,setMessage]=useState("");

const [reply,setReply]=useState("");



async function askAI(){


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

}

);


const data =
await res.json();


setReply(
data.reply
);


}



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
🤖 AI Security Assistant
</h1>



<textarea

placeholder="Ask security question..."

value={message}

onChange={
e=>setMessage(e.target.value)
}

style={{

width:"100%",

height:"120px",

marginTop:"30px"

}}

/>



<button

onClick={askAI}

style={{

marginTop:"20px",

padding:"12px 30px"

}}

>

Analyze

</button>



<div

style={{

marginTop:"30px",

background:"#1e293b",

padding:"20px",

borderRadius:"15px"

}}

>


<h3>
AI Response
</h3>


<p>
{reply}
</p>


</div>



</div>

)

}