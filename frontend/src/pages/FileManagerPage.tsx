import { useState } from "react";
import { uploadFile } from "../services/fileService";


export default function FileManagerPage(){

const [file,setFile]=useState<File|null>(null);


async function upload(){

if(!file){
alert("Select a file first");
return;
}


try{


const result =
await uploadFile(file);



alert(
result.message
);


}
catch(error){

alert(
"Upload failed"
);

}


}



return (

<div
style={{
padding:"30px",
color:"white"
}}
>


<h1>
Secure File Vault 🔒
</h1>


<p style={{color:"#94a3b8"}}>
AES-256 encrypted cloud storage
</p>



<div
style={{
marginTop:"30px",
background:"#111827",
padding:"30px",
borderRadius:"18px",
border:"1px solid #334155"
}}
>


<h2>
Upload New File
</h2>


<input
type="file"
onChange={(e)=>
setFile(
e.target.files?.[0] || null
)
}
/>


<br/>


<button

onClick={upload}

style={{
marginTop:"20px",
padding:"12px 25px",
background:"#2563eb",
color:"white",
border:"none",
borderRadius:"10px",
cursor:"pointer"
}}

>

Encrypt & Upload

</button>


</div>




<div
style={{
marginTop:"30px",
background:"#111827",
padding:"25px",
borderRadius:"18px"
}}
>

<h2>
Protected Files
</h2>


<div
style={{
background:"#1e293b",
padding:"15px",
borderRadius:"10px"
}}
>

📄 ResearchPaper.pdf

<br/>

<span
style={{
color:"#4ade80"
}}
>
🟢 Encrypted
</span>

</div>


</div>


</div>

)

}