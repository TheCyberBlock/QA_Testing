import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import { userId } from '../../components/isAuth';



export default function UpdateAccount() {

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
                <h1> Update Account Information</h1> <br /> <br />
               
                <form onSubmit={ () => {
                    axios.post(`/api/account/update/${userId}`, {
                        "name" : document.getElementById("name").value,
                        "email" : document.getElementById("email").value,
                        "oldPassword" : document.getElementById("pass").value,
                        "newPassword" : document.getElementById("passNew").value,
                        "newPassword2" : document.getElementById("passNew2").value
                    })
                } }>

                <div className="content">
                    <label for="name">Name : &nbsp;</label>
                    <input type="text" id="name" className="form-control" defaultValue={user.name}></input>
                 <br /> <br />

                 <label for="email">Email : &nbsp;</label>
                    <input type="email" id="email" className="form-control" defaultValue={user.email}></input>
                <br /> <br />

                    <label for="pass">Old Password : &nbsp;</label>
                    <input type="text" id="pass" className="form-control" placeholder="Old Password"></input> <br /> <br />

                    <label for="passNew">New Password : &nbsp;</label>
                    <input type="text" id="passNew" className="form-control" placeholder="New Password"></input> <br /> <br />

                    <label for="passNew2">Repeat Password : &nbsp;</label>
                    <input type="text" id="passNew2" className="form-control" placeholder="Repeat New Password"></input> <br /> <br />

                    <input type="submit" value="Update" className="btn btn-outline-success my-2 my-sm-0"></input>
                    </div>
                </form> 

            </div>
        )
        }
        </div>
        
    )
}