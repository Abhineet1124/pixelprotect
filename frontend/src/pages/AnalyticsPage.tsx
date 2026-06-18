import {
Line
} from "react-chartjs-2";


import {

Chart as ChartJS,

CategoryScale,

LinearScale,

PointElement,

LineElement,

Title,

Tooltip,

Legend

} from "chart.js";


ChartJS.register(

CategoryScale,

LinearScale,

PointElement,

LineElement,

Title,

Tooltip,

Legend

);



export default function AnalyticsPage(){


const data = {


labels:[

"Mon",
"Tue",
"Wed",
"Thu",
"Fri",
"Sat",
"Sun"

],


datasets:[

{

label:"Threat Detection",

data:[

2,
5,
3,
8,
4,
7,
1

],

borderWidth:3

},


{

label:"Login Activity",

data:[

10,
15,
12,
20,
18,
25,
22

],

borderWidth:3

}


]


};



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
📊 Security Analytics
</h1>



<div

style={{

display:"grid",

gridTemplateColumns:"repeat(3,1fr)",

gap:"20px",

marginTop:"30px"

}}

>


<div className="card">

<h3>
Security Score
</h3>

<h1>
96%
</h1>

</div>


<div className="card">

<h3>
Threat Level
</h3>

<h1>
LOW
</h1>

</div>


<div className="card">

<h3>
Protected Storage
</h3>

<h1>
48 GB
</h1>

</div>


</div>



<div

style={{

marginTop:"50px",

background:"#1e293b",

padding:"25px",

borderRadius:"15px"

}}

>


<h2>
Threat & Login Trends
</h2>


<Line data={data}/>


</div>



</div>

)

}