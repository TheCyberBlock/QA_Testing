import bcrypt from 'bcryptjs'; // "bcrypt" This is to hash the password in database
import jwt from 'jsonwebtoken'; // safe way to store user in browser for a certain time , And for that ./models/user.js is created

import User from '../models/user.js'; // to cereate number of user using same model in database
import Cart from '../models/cart.js';

export const signin = async (req, res) => {
    //we need to bring email and password from the front-end
    const { email, password } = req.body; //all the post data which is going to be sent will available in req.body 

    try {
        const existingUser = await User.findOne({ email }); // to find the user with the email address linked to it

        if (!existingUser) return res.status(404).json({ message: "User doesn't exist." }); // if can not find the user?

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password); // this will check the password, with the password of 
        // same user which is already hashed

        if (!isPasswordCorrect) return res.status(404).json({ message: "Invalid password!" })

        // if the user and password is correct 
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id, admin: existingUser.isAdmin }, "test", { expiresIn: "1h" });

        //returning token
        // res.status(200).json({ result: existingUser, token });
        // localStorage.setItem('id', existingUser.email)
        res.status(200).json({ token });

        
    } catch (error) {
        res.status(500).json({ message: "something went wrong!" });
    }
}

export const signup = async (req, res) => {
    const { userName, email, password, confirmPassword } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) return res.status(400).json({ message: "User already exists!" });

        if (password !== confirmPassword) return res.status(404).json({ message: "passwords don't match!" });

        const hashedPassword = await bcrypt.hash(password, 12); // 12 is the difficulty level of storing password

        const result = await User.create({ email, password: hashedPassword, name: `${userName}` });

        const userCart = await Cart.insertMany({ userId: result._id, total: 0 });

        const token = jwt.sign({ email: result.email, id: result._id, admin: result.isAdmin }, "test", { expiresIn: "1h" });

        res.status(200).json({ token }); // after user sign up or sign in, he gets specific token.and it will be checked for doing anything in the web app
        
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });

        console.log(error);
    }
}
