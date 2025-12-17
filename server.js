const express = require("express");
const app = express();
app.use(express.json());

let users = [];
let posts = [];

app.post("/register",(req,res)=>{
 users.push(req.body);
 res.json({message:"User registered"});
});

app.post("/post",(req,res)=>{
 posts.push(req.body);
 res.json({message:"Post created"});
});

app.get("/posts",(req,res)=>{
 res.json(posts);
});

app.listen(3001,()=>console.log("Social media app running"));

 
