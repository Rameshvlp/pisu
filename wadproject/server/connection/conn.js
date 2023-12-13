const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Nidhin:Heisenberg@cluster0.hvcci2z.mongodb.net/').then(()=>{
        console.log("Successfully Connected to MongoDB")
    }).catch((err)=>{
        console.log(err);
})