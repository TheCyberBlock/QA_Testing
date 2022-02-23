import { React, useEffect, useState } from 'react';
import axios from 'axios';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';


export default function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(`/api/admin/products`);
                setLoading(false);
                setProducts(data);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (

        <div>
            <br />
            <h1>Products</h1>
            <br />
            <table>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>

                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox>{error}</MessageBox>
                ) : (
                    products.map((product) => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            {
                                product.isGame ? (<td>Game</td>) : (<td>Software</td>)
                            }
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td><button onClick={() => {
                                window.location.href = `/admin/products/update/${product._id}`
                            }} className="btn btn-outline-update my-2 my-sm-0">Update Product</button></td>
                            <td><button onClick={() => {
                                if (window.confirm("Are you sure?")) {
                                    window.location.href = `/admin/products/delete/${product._id}`
                                }
                            }} className="btn btn-outline-error my-2 my-sm-0">Delete Product</button></td>
                        </tr>
                    ))
                )
                }
            </table>
        </div>
    )
}
