const express = require('express');
const app = express();
const path = require('path');

const port=8080;

// const publicPath = path.join(__dirname, "public");
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/",(req, res)=>{
    res.render("home");
})

app.get("/rolldice",(req, res)=>{
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice",{randomNumber});
});

// app.get("/ig/:username",(req, res)=>{
//     let {username} = req.params;
//     res.render("instagram", {username });
// });

app.get("/ig/:username",(req, res)=>{
    let {username} = req.params;
    const instadata=require("./data.json");
    const data=instadata[username];
    console.log(data);
    res.render("instagram.ejs", {data});
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

