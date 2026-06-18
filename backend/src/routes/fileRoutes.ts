import express from "express";
import multer from "multer";
import path from "path";

import {
encryptFile
} from "../services/encryptionService";

import {
logActivity
} from "../services/activityService";


const router = express.Router();


const upload = multer({
dest:"uploads/temp"
});



router.post(
"/upload",
upload.single("file"),

async(req,res)=>{


if(!req.file){

return res.status(400).json({
message:"No file"
});

}



const encryptedPath =
path.join(
"uploads",
req.file.filename + ".enc"
);



encryptFile(
req.file.path,
encryptedPath
);



await logActivity(
"FILE_UPLOAD",
`Uploaded ${req.file.originalname}`
);



res.json({

message:"File encrypted and stored 🔐",

file:{
original:req.file.originalname,
encrypted:encryptedPath
}

});


});


export default router;