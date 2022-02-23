import React, { useEffect, useState } from 'react';
import '../../App.css';
import Product from '../../components/Product.js';
import axios from 'axios';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';

export default function ProductivityScreen() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData =  async () => {
            try {
                setLoading(true);
                const {data} = await axios.get('/api/softwares/category/Productivity');
                setLoading(false);
                setProducts(data);
            } catch(err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>PRODUCTIVITY SOFTWARES</h1>
            <div className="list center">
                { loading ? (
                    <LoadingBox></LoadingBox> 
                ) : error ? ( 
                    <MessageBox>{error}</MessageBox>
                ) : (
                        products.map((product) => (
                            <Product key={product._id} product={product}></Product>
                        ))
                )
                }      
            </div>
        </div>
    )
}