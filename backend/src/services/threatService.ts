import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();



export async function getThreats(){

const threats =
await prisma.threatLog.findMany({

orderBy:{
createdAt:"desc"
}

});


return threats;

}



export async function createThreat(
type:string,
severity:string,
description:string,
riskScore:number
){

return await prisma.threatLog.create({

data:{

type,
severity,
description,
riskScore

}

});

}