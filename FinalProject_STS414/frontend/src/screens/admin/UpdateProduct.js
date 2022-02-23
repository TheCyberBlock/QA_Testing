import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';




export default function UpdateProduct(props) {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const productId = props.match.params.id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(`/api/admin/product/${productId}`);
                setLoading(false);
                setProduct(data);
            } catch (error) {
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
                <div> <br /> <br />

                    <h1> Update Product,  { product.name } </h1> <br /> <br />

                    <form onSubmit={() => {
                        axios.post(`/api/admin/products/update/${productId}`, {
                            "name": document.getElementById("name").value,
                            "desc": document.getElementById("desc").value,
                            "price": document.getElementById("price").value,
                            "img": document.getElementById("img").value,
                            "type": document.getElementById("product").value,
                            "category": document.getElementById("category").value
                        })

                    }}>

                        <label for="name" >Name : &nbsp;</label>
                        <input type="text" id="name" className="form-control" defaultValue={product.name}></input>
                        <br /> <br />

                        <label for="desc">Description : &nbsp;</label>
                        <textarea id="desc" className="form-control" defaultValue={product.description} cols="25" rows="10"></textarea>
                        <br /> <br />

                        <label for="price">Price : &nbsp;</label>
                        <input type="number" className="form-control" id="price" min="0" step="any" defaultValue={product.price}></input> <br /> <br />

                        <label for="img">Image File : &nbsp;</label>
                        <input type="text" className="form-control" id="img" defaultValue={product.img}></input> <br /> <br />

                        <label for="product">Type : &nbsp;</label>

                        {
                            product.isGame ? (
                                <select id="product" className="form-control">
                                    <option value="true" selected="selected">Game</option>
                                    <option value="false">Software</option>
                                </select>
                            ) : (
                                <select id="product" className="form-control">
                                    <option value="true">Game</option>
                                    <option value="false" selected="selected">Software</option>
                                </select>
                            )
                        }

                        <br /> <br />

                        <label for="category">Category : &nbsp;</label>
                        { 
                            product.category=="FPS" ? (
                                <select id="category" className="form-control">
                                <option value="FPS" selected="selected">FPS</option>
                                <option value="RPG">RPG</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Internet">Internet</option>
                                <option value="Communication">Communication</option>
                                <option value="Productivity">Productivity</option>
                                </select>
                            ) : (
                                product.category=="RPG" ? (
                                    <select id="category" className="form-control">
                                    <option value="FPS">FPS</option>
                                    <option value="RPG" selected="selected">RPG</option>
                                    <option value="Fantasy">Fantasy</option>
                                    <option value="Internet">Internet</option>
                                    <option value="Communication">Communication</option>
                                    <option value="Productivity">Productivity</option>
                                    </select> 
                                ) : (
                                    product.category=="Fantasy" ? (
                                        <select id="category" className="form-control">
                                        <option value="FPS">FPS</option>
                                        <option value="RPG">RPG</option>
                                        <option value="Fantasy" selected="selected">Fantasy</option>
                                        <option value="Internet">Internet</option>
                                        <option value="Communication">Communication</option>
                                        <option value="Productivity">Productivity</option>
                                        </select>
                                ) : (
                                    product.category=="Internet" ? (
                                        <select id="category" className="form-control">
                                        <option value="FPS">FPS</option>
                                        <option value="RPG">RPG</option>
                                        <option value="Fantasy">Fantasy</option>
                                        <option value="Internet" selected="selected">Internet</option>
                                        <option value="Communication">Communication</option>
                                        <option value="Productivity">Productivity</option>
                                    </select>
                                ) : (
                                    product.category=="Communication" ? (
                                        <select id="category" className="form-control">
                                        <option value="FPS">FPS</option>
                                        <option value="RPG">RPG</option>
                                        <option value="Fantasy">Fantasy</option>
                                        <option value="Internet">Internet</option>
                                        <option value="Communication" selected="selected">Communication</option>
                                        <option value="Productivity">Productivity</option>
                                    </select>
                                ) : (
                                    product.category=="Productivity" ? (
                                        <select id="category" className="form-control">
                                        <option value="FPS">FPS</option>
                                        <option value="RPG">RPG</option>
                                        <option value="Fantasy">Fantasy</option>
                                        <option value="Internet">Internet</option>
                                        <option value="Communication">Communication</option>
                                        <option value="Productivity" selected="selected">Productivity</option>
                                    </select>
                                ) : (<select></select>)))))
                            )
                        }

                        <br /> <br />

                        <input className="btn btn-update" type="submit" value="Update"></input>
                    </form>


                </div>
            )
            }
        </div>

    )
}