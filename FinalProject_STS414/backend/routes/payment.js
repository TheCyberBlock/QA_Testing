import express, { response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import Stripe from 'stripe';
import Cart from "../models/cart.js";
import History from "../models/history.js";


const stripe = Stripe('sk_test_51I8pbmDpzxxYQ427Jce3tlRBSpf1cFWkVEzcE7ZIa54UeOOUS3ZeUyynLX2v2XJmBYCw1HsOP5z8QYhtLPBXC8MI00MtD73mpi')




const paymentRouter = express.Router();




paymentRouter.post("/payment/:id", cors(), async (req, res) => {
	const userID = req.params.id;
	const cart = await Cart.findOne({ userId: userID });
	const history = await History.findOne({ "userId" : userID })
	let { amount, id } = req.body;
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "CAD",
			description: "PRO GAMERS",
			payment_method: id,
			confirm: true
		})

		if(history) {
			var localPurchase = history.purchase;
			localPurchase.push({ 
				"bill": cart.total,
				"items": cart.items,
				"paymentId": payment.id
			})
			const update = {
				"$set": {
					"purchase": localPurchase
				}
			};
			const options = { returnNewDocument: true };

			const updatedHistory = await History.findOneAndUpdate({ "_id": history._id}, update, options);
		} else {
			const newHistory = await History.insertMany({
				"userId": userID,
				"purchase":[{
					"items": cart.items,
					"bill": cart.total,
					"paymentId": payment.id
				}]
			})
		}	

			const deleteCart = await Cart.findOneAndDelete({ "_id": cart.id });
		
			const newCart = await Cart.insertMany({ "userId": userID });
		// console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: error.message,
			success: false
		})
	}
})


paymentRouter.get("/payment/:id", async (req, res) => {
	const userID = req.params.id;
	const cart = await Cart.findOne({ userId: userID });

	

})


export default paymentRouter;