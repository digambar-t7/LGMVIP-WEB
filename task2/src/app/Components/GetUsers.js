import React, { useState, useEffect } from 'react';
import '../Styles/GetUsers.css'
import Card from './Card.js';
import Spinner from './Spinner';

const GetUsers = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const fetchUsers = async (page) => {
        setLoading(true);
        const response = await fetch(`https://reqres.in/api/users?page=${page}`);
        const json = await response.json();
        setUsers(json.data);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }

    const nextPage = () => {
        setIsVisible(true)
        fetchUsers(2);
    }
    const previousPage = () => {
        setIsVisible(false)
        document.getElementById('left').style.display = "none";
        document.getElementById('right').style.display = "block";
        fetchUsers(1);
    }

    useEffect(() => {
        fetchUsers();
    }, []);


    return <main id='container'>
        {loading ? <Spinner /> :
            <>
                <h1 className='title'>Fetched User Details!</h1>
                <div className='inner'>
                    {users.map((e) => {
                        return < Card key={e.id} user={e} />
                    })}

                    <svg id='left' style={{ display: isVisible ? "block" : "none" }} className='arrow' onClick={previousPage} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <path d="M10,20A10,10,0,1,0,0,10,10,10,0,0,0,10,20ZM11.289,4.3,12.711,5.7l-4.3,4.344L12.7,14.289,11.3,15.711,5.586,10.063Z" />
                    </svg>
                    <svg id='right' style={{ display: isVisible ? "none" : "block" }} className='arrow' onClick={nextPage} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <path d="M10,20A10,10,0,1,0,0,10,10,10,0,0,0,10,20ZM8.711,4.3l5.7,5.766L8.7,15.711,7.3,14.289l4.289-4.242L7.289,5.7Z" />
                    </svg>
                </div>
            </>}
    </main>;
};

export default GetUsers;
