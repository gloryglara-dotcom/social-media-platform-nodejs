const express = require("express");
const app = express();
app.use(express.json());

let posts = [];

app.post("/post", (req, res) => {
  posts.push(req.body);
  res.json({ message: "Post created" });
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.listen(3001, () => {
  console.log("Social Media server running on port 3001");
});
