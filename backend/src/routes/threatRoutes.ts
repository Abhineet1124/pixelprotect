import express from "express";

import {
  getThreats
} from "../services/threatService";


const router = express.Router();


router.get(
"/",
async(req,res)=>{

try{

const threats =
await getThreats();


res.json(threats);


}
catch(error){

console.log(error);

res.status(500).json({
message:"Threat fetch failed"
});

}

});


export default router;