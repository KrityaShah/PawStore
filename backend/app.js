require('dotenv').config();
const express = require('express')
const cors = require("cors");
const app = express();
const PORT = 5000;
const router = require('./Router/auth-router')
const adminRouter = require('./Router/admin-router')
const connectDb = require("./utils/db")


const corsOptions = {
    origin: "http://localhost:5173",
    method: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
 };
 
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", router);
app.use("/admin/", adminRouter);


connectDb().then(()=>{
    app.listen(PORT, ()=>{
    console.log(`Server is running: ${PORT}`);
    })
})