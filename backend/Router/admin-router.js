const express = require('express')
const router = express.Router();
const adminController = require('../controllers/admin-controller')
const authMiddleware = require('../middleware/auth-middleware');
const adminMiddleware = require('../middleware/admin-middleware');

router.route('/create-admin').post(adminController.createAdmin);
router.route('/adminhome').get(adminController.adminHome)
router.route('/addBreed').post(adminController.addBreed)
router.route('/addProduct').post(adminController.addProduct)

router.route('/create-admin').post(adminController.createAdmin);
router.route('/login').post(adminController.adminLogin);
router.route('/users').get(authMiddleware, adminMiddleware, adminController.getAllUsers);
router.route('/users/:id').get(authMiddleware, adminMiddleware, adminController.getUserById);
// router.route('/users/update/:id').patch(authMiddleware, adminMiddleware, adminController.updateUserById);
router.route('/users/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteUserById);
// router.route('/projects').get(authMiddleware, adminMiddleware, adminController.getAllProjects);
// router.route('/projects/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteProjectById);




module.exports = router;