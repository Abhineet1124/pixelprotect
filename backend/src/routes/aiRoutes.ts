import express from "express";

import {
analyzeSecurity
}
from "../services/aiService";


const router =
express.Router();



router.post(
"/",

(req,res)=>{


const {
message
}=req.body;



const result =
analyzeSecurity(message);



res.json(result);


}

);



export default router;