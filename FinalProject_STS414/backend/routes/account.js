import express from 'express';
import User from "../models/user.js";
import Cart from "../models/cart.js";
import History from "../models/history.js";
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';


const accountRouter = express.Router();



accountRouter.post('/update/:id', expressAsyncHandler(async (req, res) => {

    const user = await User.findById(req.params.id);
    var userName = "";
    var userEmail = "";
    var hashedPassword = "";
    var update = null;
    const oldPass = req.body.oldPassword;
    const newPass = req.body.newPassword;
    const newPass2 = req.body.newPassword2;
    const options = { returnNewDocument: true };

    if(req.body.name) { userName = req.body.name } else { userName = user.name }
    if(req.body.email) { userEmail = req.body.email } else { userEmail = user.email }

    if(oldPass && newPass && newPass2) {
        if(await bcrypt.compare(oldPass, user.password)) {
            if(newPass === newPass2) {
                hashedPassword = await bcrypt.hash(newPass, 12);
            } else {
                console.log("Not same new password")
            }
        } else {
            console.log("Old pass is wrong")
        }
    }

    if(hashedPassword) {
        update = {
            "$set": {
                "name": userName,
                "email": userEmail,
                "password": hashedPassword
            }
        };
    } else {
        update = {
            "$set": {
                "name": userName,
                "email": userEmail
            }
        };
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, update, options);
        res.send(updatedUser);
    } catch(err) {
        res.status(404).send({"message":err.message})
    }

}));

accountRouter.get('/delete/:id', expressAsyncHandler(async (req, res) => {

    const userCart = await Cart.findOneAndDelete({ userId: req.params.id });
    const user = await User.findByIdAndDelete(req.params.id);

}));

accountRouter.get('/history/:id', expressAsyncHandler(async (req, res) => {

    const user = await User.findById(req.params.id);
    const history = await History.findOne({ "userId": req.params.id })
    if(history) {
        res.send(history.purchase);
    } else {
        res.send([]);
    }

}));

accountRouter.get('/:id', expressAsyncHandler(async (req, res) => {

    const user = await User.findById(req.params.id);
    if(user) {
        res.send(user);
    } else {
        res.status(404).send({ message: 'User Not Found!!' })
    }

}));



export default accountRouter;