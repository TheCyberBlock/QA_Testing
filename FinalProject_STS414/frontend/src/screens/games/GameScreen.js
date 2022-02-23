import React, { useEffect, useState } from 'react';
import '../../App.css';
import Product from '../../components/Product.js';
import axios from 'axios';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';

export default function GameScreen() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    var FPSGames = [["FPS"]];
    var RPGGames = [["RPG"]];
    var FantasyGames = [["Fantasy"]];

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/games');
                setLoading(false);
                setProducts(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    products.forEach(item => {
        if (item.category === "FPS") {
            FPSGames.push(item);
        } else if (item.category === "Fantasy") {
            FantasyGames.push(item);
        } else if (item.category === "RPG") {
            RPGGames.push(item);
        }
    });

    const allGames = [FPSGames, RPGGames, FantasyGames];

    return (
        <div>
            { loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox>{error}</MessageBox>
            ) : (

                allGames.map((category) => {
                    return (
                        <div>
                            <br /> <br />
                            <a href={`/games/category/${category[0]}`} id="blackLink"><h1>{category[0]}</h1></a>
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