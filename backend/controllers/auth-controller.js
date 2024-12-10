const User = require("../model/user-model");
const bcrypt = require("bcryptjs");

// for home
const home = async (req, res) => {
  try {
    res.status(200).json("welcome to home");
  } catch (error) {
    console.error(error);
  }
};

// for registration

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
        return   res.status(400).json({ message: "user already exist!" });
    }

    const saltRound = 10;
    const hashPassword = await bcrypt.hash(password, saltRound);
    const userCreation = await User.create({
      username,
      email,
      phone,
      password: hashPassword,
    });

   return res
    .status(200)
    .json({message: "Registration Sucessfull", token: await userCreation.generateToken(), userId: userCreation._id.toString()});
  } catch (error) {
    console.error(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
        return res.status(400).json({ message: "Invalid Credentail" });
    }

    const isPasswordValid  = await bcrypt.compare(password, userExist.password);
    if(isPasswordValid){
      return res.status(200).json({
            message: "Login sucessfull",
            token : await userExist.generateToken(),
            userId: userExist._id.toString(),
        })
    }else{
      return res.status(401).json({message: "invalid Credentail"});
    }
  } catch (error) {
    console.error(error);
  }
};


const user = async (req, res) =>{
  try {

      const userData = req.user;
      console.log(userData);
      return res.status(200).json({userData})
      
      } catch (error) {
      console.error(error)
  }
}

module.exports = { home, register, login, user };
