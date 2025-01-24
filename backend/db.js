const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/crud-example";

const connectToMongo = async () =>{
    try {
        await mongoose.connect(mongoURI,{});
        console.log("Connected to monogo...");
    } catch (error) {
        console.error('errors',error.message);
    }
}

module.exports = connectToMongo;
