import React from 'react';
import '../Styles/Spinner.css'

const Spinner = () => {
    return <div id='Spinner'>
        <img src={require('../Images/infinite_loading.gif')} />
        <h5 id='loading'>Please wait while we load your data</h5>
    </div>;
};

export default Spinner;
