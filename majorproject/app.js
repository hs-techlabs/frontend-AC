const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing');

const mongoURI = "mongodb://127.0.0.1:27017/wanderlust";
main().then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB:", err);
});

async function main(){
    await mongoose.connect(mongoURI);
}

app.get('/', (req, res) => {
    res.send("Hi! i am root");
});

app.get("/listings", async (req, res) => {
    let sampleListings = new Listing({
        title: "My new villa",
        description: "by the beach",
        price: 1300,
        location: "Goa",
        country: "India"
    });
    await sampleListings.save();
    console.log("Sample listing saved to the database");
    res.send("successful testing");
});

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
});