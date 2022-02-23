import { React, useEffect, useState } from 'react';
import {Redirect} from 'react-router-dom';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import { userId } from '../../components/isAuth.js';


export default function AddToCartScreen(props) {

    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;

    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {

            if(localStorage.getItem('profile')) {
                try {
                    setLoading(true);
                    const token = localStorage.getItem('profile').split('"')[3];
                    const decoded = jwt.decode(token);
                    const { data } = await axios.get(`/api/cart/addToCart/${decoded.id}/${productId}/${qty}`);
                    setLoading(false);
                    setCart(data);
                } catch (err) {
                    setCart("");
                    setLoading(false);
                }
            } else {
                setCart("Not Logged In");
            }
        };
        fetchData();
    }, [cart]);


    if (!cart) {
        return <div>Cart Not Found!</div>
    }

    return (
        <div>

            { loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox>{error}</MessageBox>
            ) : (
                cart ? (
                    (cart==="Not Logged In") ? ( <Redirect to="/auth" /> ) : ( <Redirect exact to={`/cart/${userId}`} /> )
                ) : (
                    <p>Data Not Obtained</p>
                )
            )
            }
        </div>
    )
}