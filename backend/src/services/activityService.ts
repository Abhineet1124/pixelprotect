import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();



export async function logActivity(
action:string,
details:string
){

return await prisma.activityLog.create({

data:{
action,
details
}

});

}



export async function fetchActivities(){

const logs =
await prisma.activityLog.findMany();


console.log(
"FROM DATABASE:",
logs
);


return logs;

}