const express = require('express')
const router = express.Router();
const adminController = require('../controllers/admin-controller')


// router.route("/home").get((req, res) =>{
//     return res
//     .status(200)
//     .json("Welcome to admin")
// })


router.route('/adminhome').get(adminController.adminHome)

module.exports = router;