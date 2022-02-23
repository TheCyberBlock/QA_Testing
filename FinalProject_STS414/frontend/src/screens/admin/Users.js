import { React, useEffect, useState } from 'react';
import axios from 'axios';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';


export default function Users() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(`/api/admin/users`);
                setLoading(false);
                setUsers(data);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchData();
    }, [users.length]);

    return (

        <div>
            <br />
            <h1>Users</h1>
            <br />
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Delete</th>
                </tr>

                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox>{error}</MessageBox>
                ) : (
                    users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><button onClick={() => {
                                if (window.confirm("Are you sure?")) {
                                    window.location.href = `/admin/users/delete/${user._id}`
                                }
                            }} className="btn btn-outline-error my-2 my-sm-0">Delete User</button></td>
                        </tr>
                    ))
                )
                }
            </table>
        </div>
    )
}
