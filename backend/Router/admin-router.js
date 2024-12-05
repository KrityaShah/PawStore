const express = require('express')
const router = express.Router();
const adminController = require('../controllers/admin-controller')



router.route('/adminhome').get(adminController.adminHome)
router.route('/addBreed').post(adminController.addBreed)
router.route('/addProduct').post(adminController.addProduct)

module.exports = router;