const mongoose = require('mongoose')


const breedSchema = new mongoose.Schema({
    breedname: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})


const Breed = new mongoose.model("Breed", breedSchema);

module.exports = Breed;