import React, { useEffect, useState } from 'react';
import '../../App.css';
import Product from '../../components/Product.js';
import axios from 'axios';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';

export default function SoftwareScreen() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    var Internet = [["Internet"]];
    var Communication = [["Communication"]];
    var Productivity = [["Productivity"]];

    useEffect(() => {
        const fetchData =  async () => {
            try {
                setLoading(true);
                const {data} = await axios.get('/api/softwares');
                setLoading(false);
                setProducts(data);
            } catch(err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    products.forEach(item => {
        if(item.category === "Internet") {
            Internet.push(item);
        } else if(item.category === "Communication") {
            Communication.push(item);
        } else if(item.category === "Productivity") {
            Productivity.push(item);
        }
    });

    const allSoftwares = [Internet, Communication, Productivity];


    return (
        <div>
            { loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox>{error}</MessageBox>
            ) : (

                allSoftwares.map((category) => {
                    return (
                        <div>
                            <br /> <br />
                            <a href={`/softwares/category/${category[0]}`} id="blackLink"><h1>{category[0]}</h1></a>
                            <br /> <br />

                            <div key={category[0]} id="main">

                                {
                                    category.slice(1, category.length).slice(0, 4).map((product) => {
                                        return (
                                            <div className="categoryProducts">
                                                <Product key={product._id} product={product} />
                                            </div>
                                        )
                                    })
                                }

                            </div></div>
                    )
                })
            )
            }

        </div>
    )
}