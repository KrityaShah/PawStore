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


module.exports = {adminHome}