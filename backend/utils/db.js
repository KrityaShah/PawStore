
const mongoose = require("mongoose")

const URI = "mongodb://localhost:27017/paw_store"

// mongoose.connect(URI);

const connectDb = async () => {


    try {
        await mongoose.connect(URI);
        console.log("Connectiong successfull to DB");
        
    } catch (error) {
        console.error("database connection failed");
        process.exit(0)
    }


}



module.exports = connectDb;