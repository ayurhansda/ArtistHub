const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		requre: true,
	},
	email: {
		type: String,
		require: true,
	},
	phone: {
		type: String,
		require: true,
	},
	password: {
		type: String,
		required: true,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	}
});

//Securing the password (acts as middleware)
userSchema.pre("save", async function() {
	const user= this;

	if (!user.isModified('password')) {
		next();
	}

	try {
		const saltRound = await bcrypt.genSalt(10);
		const hash_password = await bcrypt.hash(user.password, saltRound);
		user.password = hash_password;
	} catch (error) {
		next(error);
	}
});

//Comparing the password
userSchema.methods.comparePassword = async function (password) {
	return bcrypt.compare(password, this.password);
};




//JWT (for authentication and authorization) always stored on client side (jwt.sign & jwt.verify)
//Components of JWT (i) Header (ii) Payload (iii) Signature

userSchema.methods.generateToken = async function () {
	try {
		return jwt.sign({
			userId: this._id.toString(),
			email: this.email,
			isAdmin: this.isAdmin
		},
			process.env.JWT_SECRET_KEY, {
				expiresIn: "30d"
			}
		);
	} catch (error) {
		console.error(error);
	}

};  //Instance method


//Defining model or collection name
const User = new mongoose.model("User", userSchema);

module.exports = User;
