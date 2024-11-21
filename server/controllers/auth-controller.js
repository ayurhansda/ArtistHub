const User = require("../models/user-models");
const bcrypt = require("bcryptjs");



//Home Logic
const home = async (req, res) => {
	try {
		res.status(200).json({message: "Welcome to Artist Hub using Controllers"});
	} catch(error) {
		console.log(error);
	}
};

//Registration Logic
const register = async (req, res) => {
	try {
		console.log(req.body);
		const { username, email, phone, password } = req.body;

		const userExist = await User.findOne({ email:email });

		if(userExist){
			return res.status(400).json({msg:"email already exists" });
		}


		const userCreated = await User.create({ username, email, phone, password });

		res.status(201).json({ msg: "Registration Successful", token: await userCreated.generateToken(), userId: userCreated._id.toString() }); //Status should be 201 whenever something new is created
	} catch(error) {
		res.status(500).json("internal server error");
	}
};

//Login Logic

const login = async(req, res) => {
	try {
		const { email, password } = req.body;

		const userExist = await User.findOne({ email });
		console.log(userExist);

		if (!userExist) {
			return res.status(400).json({ message: "Invalid Credentials" });
		}

		const isPasswordValid = await userExist.comparePassword(password);

		if(isPasswordValid){
			 res.status(200).json({ msg: "Login Successful", token: await userExist.generateToken(), userId: userExist._id.toString() });
		}else{
			res.status(401).json({message: "Invalid email or password" });
		}
	} catch (error) {
		res.status(500).json("Internal Server Error");
	}
};

module.exports = { home, register, login };
