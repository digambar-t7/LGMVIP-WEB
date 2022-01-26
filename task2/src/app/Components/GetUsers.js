import React, { useState, useEffect } from 'react';
import '../Styles/GetUsers.css'
import Card from './Card.js';
import Spinner from './Spinner';

const GetUsers = () => {

    const [users, setUsers] = useState([
        {
            "email": "digambartu@gmail.com",
            "first_name": "digambar",
            "last_name": "tupurwadi",
            "id": "1",
            "avatar": "../digambar.png"
        }
    ]);
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {
        setLoading(true);
        const response = await fetch();
        const json = await response.json;
        setUsers(json.data);
        setLoading(false);
    }

    useEffect(() => {
        // fetchUsers();
        setUsers(users)
    }, []);


    return <main id='container'>
        <h1 className='title'>Fetched User Details!</h1>
        <div className='inner'>
            {loading ? <Spinner /> : users.map((e) => {
                < Card key={e.id} user={e} />
            })}

        </div>
    </main>;
};

export default GetUsers;
