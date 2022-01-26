import React from 'react';
import '../Styles/Home.css'

const Home = () => {
    return <section id='Home'>
        <h1 className='heading'>Welcome to my React App!</h1>
        <p className='desc'>In this app I have demonstrated the use of REST API's to fetch the data</p>
        <p>You may would like to take a look at other react applications built by me. </p>
        <p> You can see them here <a href='https://www.github.com/digambar-t7' target={'_blank'} >www.github.com/digambar-t7</a></p>
    </section>;
};

export default Home;
