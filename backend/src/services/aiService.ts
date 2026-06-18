export function analyzeSecurity(
message:string
){

const text =
message.toLowerCase();


if(
text.includes("login")
){

return {

reply:
"Multiple failed logins can indicate brute force attacks. Enable MFA and review login activity.",

risk:
"HIGH"

};

}



if(
text.includes("file")
){

return {

reply:
"Monitor unusual downloads, file deletion patterns and permission changes.",

risk:
"MEDIUM"

};

}



if(
text.includes("password")
){

return {

reply:
"Use strong passwords, MFA and avoid password reuse.",

risk:
"MEDIUM"

};

}



return {

reply:
"Security looks normal. Continue monitoring activity logs and threat alerts.",

risk:
"LOW"

};


}