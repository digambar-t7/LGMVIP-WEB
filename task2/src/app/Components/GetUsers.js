import React, { useState, useEffect } from 'react';
import '../Styles/GetUsers.css'
import Card from './Card.js';
import Spinner from './Spinner';

const GetUsers = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {
        setLoading(true);
        const response = await fetch(" https://reqres.in/api/users?page=2");
        const json = await response.json();
        setUsers(json.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchUsers();
    }, []);


    return <main id='container'>
        <h1 className='title'>Fetched User Details!</h1>
        <div className='inner'>
            {loading ? <Spinner /> : users.map((e) => {
                return < Card key={e.id} user={e} />
            })}

        </div>
    </main>;
};

export default GetUsers;
