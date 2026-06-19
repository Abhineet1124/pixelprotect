import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Shield, Sparkles } from "lucide-react";

export default function RegisterPage() {

const navigate = useNavigate();

const [firstName,setFirstName]=useState("");
const [lastName,setLastName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");


const handleRegister = async(e:any)=>{

e.preventDefault();

try{

await axios.post("http://localhost:5000/api/auth/register",{
firstName,
lastName,
email,
password
});


alert("Registered Successfully");
navigate("/login");


}catch(err){

alert("Registration Failed");

}

};



return (

<div className="page">


{/* BACKGROUND CREATURES */}

<div className="dragon dragonLeft">
🐉
</div>


<div className="dragon dragonRight">
🐉
</div>


<div className="snake snakeLeft">
🐍
</div>


<div className="snake snakeRight">
🐍
</div>



<div className="orb one"></div>
<div className="orb two"></div>



{/* REGISTER CARD */}


<div className="register-card">


<div className="logo">

<Shield size={55}/>

<h1>
PixelProtect
</h1>

<Sparkles className="spark"/>

</div>



<h2>
Create Account
</h2>


<p>
Secure your digital world
</p>



<form onSubmit={handleRegister}>


<input
placeholder="First Name"
value={firstName}
onChange={(e)=>setFirstName(e.target.value)}
/>


<input
placeholder="Last Name"
value={lastName}
onChange={(e)=>setLastName(e.target.value)}
/>



<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>



<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>



<button>

Create Account

</button>


</form>



<div className="login">

Already protected?

<span onClick={()=>navigate("/login")}>
Login
</span>

</div>



</div>





<style>

{`

*{
box-sizing:border-box;
}



.page{

height:100vh;
width:100%;
overflow:hidden;

display:flex;
align-items:center;
justify-content:center;

background:
radial-gradient(circle at top,#0f172a,#020617);

position:relative;

font-family:
Inter,
sans-serif;

}



/* CARD */


.register-card{


width:420px;

padding:45px;

border-radius:25px;


background:
rgba(255,255,255,.08);


border:
1px solid rgba(255,255,255,.18);


backdrop-filter:
blur(25px);


box-shadow:
0 0 60px rgba(34,211,238,.25);


position:relative;

z-index:10;


color:white;


}





.logo{

display:flex;
align-items:center;
justify-content:center;
gap:10px;

color:#22d3ee;


}



.logo h1{

font-size:34px;

background:
linear-gradient(90deg,#22d3ee,#3b82f6);

-webkit-background-clip:text;
color:transparent;

}



.spark{

animation:
float 2s infinite;

}





h2{

text-align:center;

margin-top:30px;

}



p{

text-align:center;

opacity:.7;

}





form{

margin-top:25px;

}



input{


width:100%;

padding:15px;

margin:10px 0;


border-radius:12px;


background:
rgba(255,255,255,.1);


border:
1px solid rgba(255,255,255,.2);


outline:none;


color:white;


}




button{


width:100%;

padding:15px;

margin-top:20px;


border:none;

border-radius:12px;


background:
linear-gradient(
90deg,
#06b6d4,
#2563eb
);


color:white;

font-size:17px;

cursor:pointer;


box-shadow:
0 0 30px #06b6d4;


transition:.3s;

}



button:hover{

transform:scale(1.05);

}





.login{

text-align:center;

margin-top:20px;

opacity:.8;

}



.login span{

color:#22d3ee;

cursor:pointer;

}





/* CREATURES */


.dragon{


position:absolute;

font-size:220px;

opacity:.14;


filter:
drop-shadow(0 0 50px #38bdf8)
blur(.5px);


z-index:2;


pointer-events:none;


}





.dragonLeft{

top:20%;

animation:
dragonMoveLeft
10s
infinite
ease-in-out;

}





.dragonRight{


bottom:5%;


animation:

dragonMoveRight
12s
infinite
ease-in-out;


}






.snake{


position:absolute;

font-size:150px;


opacity:.22;


filter:
drop-shadow(0 0 40px #22d3ee);


z-index:2;


pointer-events:none;


}






.snakeLeft{


left:8%;

top:55%;


animation:

snakeMove
5s
infinite;


}





.snakeRight{


right:8%;

top:25%;


animation:

snakeMove
6s
infinite
reverse;


}






/* GLOW BALLS */


.orb{


position:absolute;

border-radius:50%;


filter:
blur(80px);


opacity:.45;


animation:
pulse
5s
infinite;


z-index:0;


}



.one{


width:260px;
height:260px;


background:#2563eb;


top:10%;
left:10%;


}




.two{


width:260px;
height:260px;


background:#06b6d4;


bottom:10%;
right:10%;


}





/* ANIMATIONS */


@keyframes float{


50%{

transform:
translateY(-15px);

}

}





@keyframes dragonMoveLeft{


0%{

left:-150px;

transform:
rotate(-15deg);

}



50%{

left:20px;

transform:
rotate(10deg);

}



100%{

left:-150px;

transform:
rotate(-15deg);

}


}





@keyframes dragonMoveRight{


0%{

right:-150px;

transform:
scaleX(-1)
rotate(-15deg);

}




50%{

right:20px;

transform:
scaleX(-1)
rotate(10deg);

}





100%{

right:-150px;

transform:
scaleX(-1)
rotate(-15deg);

}



}






@keyframes snakeMove{


0%{

transform:
translateY(40px)
rotate(-10deg);

}



50%{

transform:
translateY(-30px)
rotate(10deg);

}



100%{

transform:
translateY(40px)
rotate(-10deg);

}



}





@keyframes pulse{


50%{

transform:
scale(1.5);

}


}




`}

</style>


</div>


);

}