import { React, useEffect, useState } from 'react';
import axios from 'axios';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import { userId } from '../../components/isAuth';
import { Redirect } from 'react-router';

export default function DeleteAccount() {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData =  async () => {
            try {
                setLoading(true);
                const {data} = await axios.get(`/api/account/delete/${userId}`);
                setLoading(false);
                setUser(data);
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
            <div>
                { localStorage.removeItem("profile") }
                <Redirect to="/"></Redirect>
            </div>
        )
        }
        </div>
        
    )
}
