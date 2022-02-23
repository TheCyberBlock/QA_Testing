import { React, useEffect, useState } from 'react';
import axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ProductScreen(props) {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const productId = props.match.params.id;

    useEffect(() => {
        const fetchData =  async () => {
            try {
                setLoading(true);
                const {data} = await axios.get(`/api/product/${productId}`);
                setLoading(false);
                setProduct(data);
            } catch(error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        
        <div>
        { loading ? (
            <LoadingBox></LoadingBox> 
        ) : error ? ( 
            <MessageBox>{error}</MessageBox>
        ) : (
            <div className="productDetail">
            <div className="productDetail-name">
                <h1>{product.name}</h1>
            </div>
            
            <div className="productDetail-img">
                <img src={product.img} alt={product.name} className="img-fluid"/>
            </div>
            <div className="productDetail-details">
                <div className="productDetail-description">
                    <h4>Description</h4>
                    <p> {product.description}</p>
                </div>
                <div className="productDetail-category">
                    <h4>Category</h4>
                    <h6>{product.category}</h6>
                </div> <br />
                <div className="productDetail-price">
                    <h4>Price</h4>
                    <h5>$ {product.price}</h5>
                </div>
                <br />
                <form action={`/addToCart/${product._id}`}>
                    <div className="productDetail-qty">
                        <h4><label for="qty">Qty : </label></h4>
                        <h6>
                            <select name="qty" id="qty">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </h6>
                    </div>
                    <br />
                    <button className="btn btn-outline-success my-2 my-sm-0">Add to Cart</button>
                </form>
            </div>
            </div>
        )
        }
        </div>
        
    )
}
