const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing');

const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/wanderlust";

// Allows the Hoppscotch web client to call this local API from its own origin.
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") {
        return res.sendStatus(204);
    }

    next();
});
app.use(express.json());

main().then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB:", err);
});

async function main(){
    await mongoose.connect(mongoURI);
}

app.get('/', (req, res) => {
    res.json({ message: "Wanderlust API is running" });
});

app.get("/listings", async (req, res) => {
    const listings = await Listing.find({});
    res.json(listings);
});

app.get("/listings/:id", async (req, res) => {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
        return res.status(404).json({ error: "Listing not found" });
    }

    res.json(listing);
});

app.post("/listings", async (req, res) => {
    const listing = await Listing.create(req.body);
    res.status(201).json(listing);
});

app.patch("/listings/:id", async (req, res) => {
    const listing = await Listing.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (!listing) {
        return res.status(404).json({ error: "Listing not found" });
    }

    res.json(listing);
});

app.delete("/listings/:id", async (req, res) => {
    const listing = await Listing.findByIdAndDelete(req.params.id);

    if (!listing) {
        return res.status(404).json({ error: "Listing not found" });
    }

    res.sendStatus(204);
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.name === "ValidationError" ? 400 : 500).json({
        error: err.message || "Internal server error",
    });
});

const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
