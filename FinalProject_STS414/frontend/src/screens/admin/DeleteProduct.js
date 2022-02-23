import { React, useEffect, useState } from 'react';
import axios from 'axios';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import { Redirect } from 'react-router';


export default function DeleteProduct(props) {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const userId = props.match.params.id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(`/api/admin/products/delete/${userId}`);
                setLoading(false);
                setUser(data);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (

        <div>

                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox>{error}</MessageBox>
                ) : (
                    <Redirect to="/admin/products" />
                )
                }

        </div>
    )
}
