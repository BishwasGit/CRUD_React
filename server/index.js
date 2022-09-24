const express = require('express');
const mongoose = require('mongoose');
const app = express();

const FoodModel = require("./models/Food")

app.use(express.json())


mongoose.connect("mongodb+srv://BishwasShrestha:pass123@crud.usv5lc6.mongodb.net/food?retryWrites=true&w=majority",{
    useNewUrlParser:true,
})

app.get("/", async (req,res)=>{

    const food = new FoodModel({foodName : "Apple", daysSinceIAte : 3});

    try { 
        await food.save();
        res.send("inserted data to database")
    }
    catch(err){
        console.log(err)
    }
})

app.listen(3001,()=>{
    console.log("server running on port 3001......")
})