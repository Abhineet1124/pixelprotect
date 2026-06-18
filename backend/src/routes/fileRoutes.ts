import express from "express";
import multer from "multer";
import path from "path";

import {
encryptFile
}
from "../services/encryptionService";


const router = express.Router();



const upload =
multer({
dest:"uploads/temp"
});



router.post(
"/upload",
upload.single("file"),

(req:any,res)=>{


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



res.json({

message:
"File encrypted and stored 🔐",

file:{
original:req.file.originalname,
encrypted:encryptedPath
}

});


});



export default router;