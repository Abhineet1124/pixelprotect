import express from "express";
import multer from "multer";


const router=express.Router();


const upload =
multer({
storage:
multer.diskStorage({

destination:"uploads/",

filename:(req,file,cb)=>{
cb(
null,
Date.now()+"-"+file.originalname
)
}

})
});



router.post(
"/upload",
upload.single("file"),
(req,res)=>{


res.json({

message:
"File encrypted and stored",

file:req.file

});


});


export default router;