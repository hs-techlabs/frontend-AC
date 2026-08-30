const express = require('express');
const app = express();
console.dir(app);
let port=8080;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

app.get('/',(req,res)=>{
    res.send("main page");
});

app.get('/about',(req,res)=>{
    res.send("about page");
});

app.get('/contact',(req,res)=>{
    res.send("contact page");
});

// app.get("*",(req,res)=>{
//     res.send("404 page not found");
// });



// app.use((req,res)=>{
//     console.log("request received");
//     let text=`<h1>Welcome to Express</h1>
//     <p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>
//     <p>It allows you to set up middlewares to respond to HTTP Requests, defines a routing table which is used to perform different actions based on HTTP Method and URL, and allows you to dynamically render HTML Pages based on passing arguments to templates.</p>`;
//     res.send(text);
// });