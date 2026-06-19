import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/authService";

import {
ShieldCheck,
LockKeyhole,
Radar
} from "lucide-react";


export default function LoginPage(){

const navigate = useNavigate();

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [error,setError]=useState("");
const [loading,setLoading]=useState(false);



async function handleLogin(e:React.FormEvent){

e.preventDefault();

setLoading(true);
setError("");


try{

const data = await loginUser(
email,
password
);


localStorage.setItem(
"token",
data.token
);


localStorage.setItem(
"user",
JSON.stringify(data.user)
);


navigate("/dashboard");


}
catch{

setError(
"Invalid email or password"
);

}
finally{

setLoading(false);

}

}



return (

<div className="login-page">


<div className="grid"></div>


<div className="orb orb1"></div>
<div className="orb orb2"></div>



<div className="dragon">
🐉
</div>



{/* Scanner behind card */}

<div className="security-ring"></div>





<div className="hero">


<div className="brand">


<ShieldCheck size={70}/>


<h1>
PixelProtect
</h1>


</div>



<h2>
AI Cyber Security Platform
</h2>


<p>

Next generation protection system with
AI threat detection, encrypted storage
and real-time monitoring.

</p>



<div className="features">


<div>

<LockKeyhole/>

Encrypted Data

</div>



<div>

<Radar/>

Threat Detection

</div>



<div>

<ShieldCheck/>

Zero Trust

</div>


</div>


</div>









<form

className="login-card"

onSubmit={handleLogin}

>


<div className="icon">

<ShieldCheck size={60}/>

</div>



<h1>

Welcome Back

</h1>



<p>
Access your secure dashboard
</p>





<input

type="email"

placeholder="Email"

value={email}

onChange={
e=>setEmail(e.target.value)
}

/>





<input

type="password"

placeholder="Password"

value={password}

onChange={
e=>setPassword(e.target.value)
}

/>





{

error &&

<div className="error">

{error}

</div>

}





<button>


{
loading
?
"Scanning..."
:
"Login Securely"
}


</button>






<p className="signup">

New user?


{" "}


<Link to="/register">

Create account

</Link>


</p>



</form>






<style>

{`

*{
box-sizing:border-box;
}


.login-page{


height:100vh;
width:100%;

overflow:hidden;


display:flex;

align-items:center;


background:

radial-gradient(
circle at top,
#0ea5e9,
#020617 60%
);


color:white;

position:relative;


font-family:
Inter,
Arial,
sans-serif;


}







.grid{


position:absolute;

inset:0;


background-image:

linear-gradient(
rgba(255,255,255,.05) 1px,
transparent 1px
),

linear-gradient(
90deg,
rgba(255,255,255,.05) 1px,
transparent 1px
);


background-size:
40px 40px;


animation:
gridMove 15s linear infinite;


}






.orb{


position:absolute;

width:300px;

height:300px;


border-radius:50%;


filter:blur(90px);

opacity:.5;

}




.orb1{

background:#2563eb;

left:5%;

top:10%;

}





.orb2{

background:#06b6d4;

right:5%;

bottom:10%;

}





.dragon{


position:absolute;

font-size:250px;


opacity:.15;


left:-150px;


filter:
drop-shadow(
0 0 50px #22d3ee
);


animation:

dragonMove
12s
infinite
ease-in-out;


}





/* FIXED CIRCLE */


.security-ring{


position:absolute;


right:120px;

top:50%;


transform:translateY(-50%);



width:430px;

height:430px;


border-radius:50%;


border:

2px solid rgba(34,211,238,.35);



opacity:.5;



animation:

rotate
10s linear infinite;



z-index:1;


}



.security-ring:after{


content:"";


position:absolute;


inset:45px;


border-radius:50%;



border:

2px dashed #22d3ee;


}








.hero{


width:55%;


padding-left:80px;


z-index:5;


}



.brand{


display:flex;

align-items:center;

gap:20px;


color:#22d3ee;


}




.brand h1{


font-size:60px;


background:

linear-gradient(
90deg,
#22d3ee,
#3b82f6
);


-webkit-background-clip:text;

color:transparent;


}





.hero h2{

font-size:35px;

}





.hero p{


max-width:550px;


color:#cbd5e1;


font-size:18px;


line-height:1.7;


}






.features{


display:flex;

gap:20px;

margin-top:35px;


}



.features div{


background:

rgba(255,255,255,.1);


padding:20px;


border-radius:20px;


backdrop-filter:blur(20px);


display:flex;

flex-direction:column;

gap:10px;


}









.login-card{


width:420px;


margin-right:120px;


padding:40px;



background:

rgba(255,255,255,.12);



border-radius:30px;



backdrop-filter:

blur(25px);




border:

1px solid rgba(255,255,255,.2);



box-shadow:

0 0 60px rgba(34,211,238,.25);



z-index:10;


position:relative;


}








.icon{


display:flex;

justify-content:center;


color:#22d3ee;


animation:

pulse
2s
infinite;


}





.login-card h1{


text-align:center;


}




.login-card p{


text-align:center;


color:#94a3b8;


}







input{


width:100%;


padding:15px;


margin-top:15px;



border-radius:14px;



background:#020617;



border:

1px solid #334155;



color:white;


outline:none;


}








button{


width:100%;


margin-top:25px;


padding:16px;



border:none;



border-radius:14px;



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


}







.error{


color:#fb7185;


text-align:center;


margin-top:15px;


}




.signup a{


color:#22d3ee;


}





@keyframes pulse{


50%{

transform:scale(1.1);

}

}





@keyframes rotate{


100%{

transform:rotate(360deg);

}

}







@keyframes dragonMove{


0%{

left:-150px;

}


50%{

left:50px;

}


100%{

left:-150px;

}


}





@keyframes gridMove{


100%{

transform:translateY(40px);

}

}



`}

</style>



</div>

);

}