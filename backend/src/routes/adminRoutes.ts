import express from "express";
import prisma from "../lib/prisma";

const router = express.Router();


// all users
router.get("/users", async(req,res)=>{

try{

const users =
await prisma.user.findMany({
select:{
id:true,
email:true,
firstName:true,
lastName:true,
riskScore:true,
createdAt:true
}
});


res.json(users);


}catch(error){

res.status(500).json({
message:"Unable to fetch users"
});

}

});




// activity logs

router.get("/activity", async(req,res)=>{

const logs =
await prisma.activityLog.findMany({

orderBy:{
createdAt:"desc"
}

});


res.json(logs);

});




// threats

router.get("/threats", async(req,res)=>{


const threats =
await prisma.threatLog.findMany({

orderBy:{
createdAt:"desc"
}

});


res.json(threats);


});



export default router;