const mongoose = require("mongoose")

const dotenv = require("dotenv")
dotenv.config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("DB is Connected Successfully");
    })
    .catch((error)=>{
        console.log("DB Facing Connection Issues");
        console.log(error);
        process.exit(1);
    })
};

module.exports = connectWithDb;