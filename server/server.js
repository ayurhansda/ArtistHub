require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");


const corsOptions = {
	origin: "http://localhost:3000",
	methods:"GET, POST, PUT, DELETE, HEAD, PATCH",
	credentials: true
};

//Middleware
app.use(cors(corsOptions));
app.use(express.json());



//Mounting the router
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => {
	app.listen(PORT, () => {
		console.log(`Server is running at port: ${PORT}`);
	});
});

