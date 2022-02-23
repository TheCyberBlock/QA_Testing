import { React, useEffect, useState } from 'react';
import axios from 'axios';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import { userId } from '../../components/isAuth';

export default function ViewAccount() {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData =  async () => {
            try {
                setLoading(true);
                const {data} = await axios.get(`/api/account/${userId}`);
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
                <br /> <br />
                <center>
                    <i className="fa fa-user-circle-o" style={{fontSize:70+'px'}}></i>
                </center> <br /><br />
                <div>
                    <h1>Hello, {user.name}</h1>
                    <h3>{user.email}</h3>
                </div>

                <a href="/account/update"><button className="btn btn-outline-update my-2 my-sm-0">Update Account</button></a>
                <button onClick={() => {
                    if(window.confirm("Are you sure?")) {
                        window.location.href="/account/delete"
                    }
                }} className="btn btn-outline-error my-2 my-sm-0">Delete Account</button>
            
            </div>
        )
        }
        </div>
        
    )
}
