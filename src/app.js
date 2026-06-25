const express = require("express");
const multer = require("multer");
const postModel = require("./models/post.model");
const uploadFile = require("./services/storage.service");


//instance of server
const app = express();


//middleware
app.use(express.json());
const upload = multer({storage:multer.memoryStorage()});


//create post route
app.post("/create-post",upload.single("image"),async (req,res)=>{

    const result = await uploadFile(req.file.buffer);

    const post = postModel.create({
        image: result.url,
        caption:req.body.caption
    });

    res.status(201).json({
        message:"new post created",
    });
});
 
//get post route
app.get("/posts",async (req,res)=>{
    const posts = await postModel.find();


    res.status(200).json({
        message:"post fetched succesfully",
        posts
    });
})











module.exports = app;