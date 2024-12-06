const User = require('../model/user-model');
const Breed = require('../model/breed-model');
const Product = require('../model/product-model');
const Admin = require('../model/admin-model');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


const adminHome = async (req, res) => {
    try {
        return res
        .status(200)
        .json({message: "welcome to admin"})
    } catch (error) {
        console.error(error);
        
    }
}


const adminLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if admin exists
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(400).json({ message: "Admin not found" });
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: admin._id, isAdmin: admin.isAdmin }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

        // Return response with token
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

const getAllUsers = async (req, res, next) => {
    try {
      const users = await User.find({}, { password: 0 });
      if (!users || users.length === 0) {
        return res.status(404).json({ message: "No Users Found!" });
      }
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  };


  const getUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id, { password: 0 });
      if (!user) {
        return res.status(404).json({ message: "User Not Found!" });
      }
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };

  const deleteUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await User.deleteOne({ _id: id });
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: "User Not Found!" });
      }
      res.status(200).json({ message: "User Deleted Successfully!" });
    } catch (error) {
      next(error);
    }
  };
  

const addBreed = async (req, res) => {
    try {
        const {breedname, description} = req.body;

        const breedExist = await Breed.findOne({breedname})
        
        if(breedExist){
            return res
            .status(400)
            .json({message: "Breed already exist!"});
        }

        const breedCreation = await Breed.create({breedname, description});

        return res
        .status(200)
        .json({message: "Breed added succesfully!"})

    } catch (error) {
        console.error(error);
    }
}

const addProduct = async (req, res) => {
    try{
        const {productName, description, price} = req.body;

        const productExist = await Product.findOne({productName});

        if(productExist){
            return res
            .status(400)
            .json({message: "Product already Exist!"})
        }

        const productCreation = await Product.create({productName, description, price});
        return res
        .status(200)
        .json({message: "Breed added succesfully!"})

    }catch(error){
        console.error(error);
        
    }
}

// Create a new admin
const createAdmin = async (req, res) => {
    const { username, email, password, secretKey } = req.body;
  
    // Check if secret key matches
    if (secretKey !== process.env.ADMIN_CREATION_KEY) {
      return res.status(403).json({ message: 'Unauthorized access' });
    }
  
    try {
      // Check if admin already exists
      const existingAdmin = await Admin.findOne({ email });
      if (existingAdmin) {
        return res.status(400).json({ message: 'Admin with this email already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new admin
      const newAdmin = new Admin({
        username,
        email,
        password: hashedPassword,
        isAdmin: true,
      });
  
      await newAdmin.save();
      res.status(201).json({ message: 'Admin created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };

module.exports = {adminHome, addBreed, addProduct, createAdmin, adminLogin, deleteUserById, getAllUsers, getUserById}