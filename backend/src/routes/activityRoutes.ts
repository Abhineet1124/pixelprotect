import express from "express";

import {
fetchActivities
} from "../services/activityService";


const router = express.Router();


router.get("/", async(req,res)=>{

try{

const activities = await fetchActivities();

console.log("ACTIVITY DATA:", activities);

res.json(activities);


}
catch(error){

console.log(error);

res.status(500).json({
message:"Activity fetch failed"
});

}

});


export default router;