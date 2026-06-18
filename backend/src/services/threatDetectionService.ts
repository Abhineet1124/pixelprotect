import {
createThreat
}
from "./threatService";



export async function detectThreat(
action:string,
details:string
){


let risk = 0;

let severity = "LOW";



if(
action === "FAILED_LOGIN"
){

risk = 40;
severity = "MEDIUM";


}



if(
action === "MULTIPLE_FAILED_LOGIN"
){

risk = 90;
severity = "HIGH";

}



if(
action === "SUSPICIOUS_UPLOAD"
){

risk = 70;
severity = "HIGH";

}



if(risk > 0){


return await createThreat(

action,

severity,

details,

risk

);


}


return null;


}