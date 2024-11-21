require('dotenv').config();
const express = require('express')
const app = express();
const PORT = 5000;
const router = require('./Router/auth-router')
const adminRouter = require('./Router/admin-router')
const connectDb = require("./utils/db")


app.use(express.json());
app.use("/api/auth", router);
app.use("/admin/", adminRouter);


connectDb().then(()=>{
    app.listen(PORT, ()=>{
    console.log(`Server is running: ${PORT}`);
    })
})