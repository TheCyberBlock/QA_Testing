import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useEffect } from 'react';
import jwt from 'jsonwebtoken';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { userId } from '../components/isAuth';


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if(localStorage.getItem('profile')) {
                try {
                    setLoading(true);
                    const token = localStorage.getItem('profile').split('"')[3];
                    const decoded = jwt.decode(token);
                    const { data } = await axios.get(`/api/cart/${decoded.id}`);
                    setLoading(false);
                    setCart(data.items);
                    setTotal(data.total);
                } catch (err) {
                    setCart("");
                    setLoading(false);
                }
            } else {
                setCart("Not Logged In");
            }
            
        };
        fetchData();

    }, [total]);


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post(`/api/payment/payment/${userId}`, {
                amount: total*100,
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

            const res = await axios.get(`/api/payment/payment/${userId}`);

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
        <div id="CartScreen">
            <br />
            <h1>Items</h1>
            <br />
            <table>
                <tr>
                    <th>Name</th>
                    <th className="table-small">Qty</th>
                    <th className="table-small">Price</th>
                </tr>
        
            { loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox>{error}</MessageBox>
            ) : (
                cart ? (
                    (cart==="Not Logged In") ? (
                        <Redirect to="/auth"></Redirect>
                    ) : ( 
                        
                            cart.map((item) => (
                                <tr key={item._id}>
                                    <td>{item.productName}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.productPrice}</td>
                                </tr>
                            ))     
                    )
                ) : (
                    <p>Nothing in the Cart</p>
                )
            )

            }

                <tr>
                    <td  colSpan="2"><b>Total</b></td>
                    { isNaN(total) ? <td><b>0</b></td> : <td><b>{parseFloat(total).toFixed(2)}</b></td> }
                </tr>

            </table>    <br /> <br /> <br />

        </div>
        {!success ? 
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button className="btn my-2 my-sm-0">Pay</button>
        </form>
        :
       <div>
           <Redirect to="/account"></Redirect>
       </div> 
        }
            
        </>
    )
}