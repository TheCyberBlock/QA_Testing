import { React, useEffect, useState } from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import { Redirect } from 'react-router';



export default function CartScreen(props) {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [payment, setPayment] = useState(false);

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


    return (

        <div id="CartScreen">
            <br />
            <h1>Cart</h1>
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
                                    <td><a href={`/addToCart/${item.productId}?qty=1`}><i className="fa fa-plus"></i></a>&nbsp;&nbsp;{item.qty}&nbsp;&nbsp;<a href={`/removeFromCart/${item.productId}?qty=1`}><i className="fa fa-minus"></i></a></td>
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

            <button className="btn my-2 my-sm-0"><a href="/payment">Payment</a></button>
        </div>
    )
}