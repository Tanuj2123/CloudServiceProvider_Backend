const dns = require("node:dns/promises");

dns.setServers(["1.1.1.1","8.8.8.8"]);

const mongoose = require("mongoose");

async function connectDB(){
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to DB successfully");
}


module.exports = connectDB;