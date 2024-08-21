import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    // Save the user to the database
    try {
        await newUser.save();
        res.status(201).json("User created Successfully");
    } catch (err) {
        next(err);
    }
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, "User not found"));

        // Check if the password is correct
        const isPasswordCorrect = bcrypt.compareSync(password, validUser.password);
        if (!isPasswordCorrect) return next(errorHandler(401, "Invalid credentials"));

        // Create a JWT token
        const token = jwt.sign({ id: validUser._id, email: validUser.email }, process.env.JWT_SECRET);

        // Destructure password from user object
        const { password: _, ...userInfo } = validUser._doc;

        // Send the token in a cookie and the user info as a response
        res.cookie("access_token", token, { httpOnly: true }).status(200).json(userInfo);
    } catch (err) {
        next(err, "Error logging in");
    }
};