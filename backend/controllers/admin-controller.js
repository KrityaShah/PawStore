const Breed = require('../model/breed-model');
const Product = require('../model/product-model');
// admin home
const adminHome = async (req, res) => {
    try {
        return res
        .status(200)
        .json({message: "welcome to admin"})
    } catch (error) {
        console.error(error);
        
    }
}

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


module.exports = {adminHome, addBreed, addProduct}