import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function RegisterPage(){

const navigate = useNavigate();


const [firstName,setFirstName]=useState("");
const [lastName,setLastName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const [error,setError]=useState("");



const handleRegister = async(
e:React.FormEvent
)=>{

e.preventDefault();


try{


await axios.post(
"http://localhost:5000/api/auth/register",
{
firstName,
lastName,
email,
password
}
);


navigate("/login");


}
catch(err){

setError(
"Registration failed"
);

}

};



return (

<div
style={{
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"#020617",
color:"white"
}}
>


<form

onSubmit={handleRegister}

style={{

background:"#1e293b",
padding:"35px",
borderRadius:"15px",
width:"380px"

}}

>


<h1>
🛡 PixelProtect
</h1>


<h2>
Create Account
</h2>



<input
placeholder="First Name"
value={firstName}
onChange={
e=>setFirstName(e.target.value)
}
style={input}
/>


<input
placeholder="Last Name"
value={lastName}
onChange={
e=>setLastName(e.target.value)
}
style={input}
/>



<input
placeholder="Email"
type="email"
value={email}
onChange={
e=>setEmail(e.target.value)
}
style={input}
/>



<input
placeholder="Password"
type="password"
value={password}
onChange={
e=>setPassword(e.target.value)
}
style={input}
/>



{
error &&
<p style={{color:"red"}}>
{error}
</p>
}



<button
type="submit"

style={{

width:"100%",
padding:"12px",
background:"#2563eb",
color:"white",
border:"none",
borderRadius:"8px",
marginTop:"10px"

}}

>

Register

</button>


<p
style={{
cursor:"pointer",
marginTop:"15px"
}}

onClick={()=>navigate("/login")}

>

Already have account? Login

</p>


</form>


</div>

);

}


const input = {

width:"100%",
padding:"12px",
margin:"8px 0",
borderRadius:"8px",
border:"none"

};