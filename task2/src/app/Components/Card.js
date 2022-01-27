import React from 'react';
import '../Styles/Card.css';

const Card = (props) => {
  const { first_name, last_name, email, avatar } = props.user;

  const copyEmail = (e) => {
    navigator.clipboard.writeText(e.innerText)
  }
  return <div id='Card'>
    {/* <img src={avatar} /> */}
    <div className='bg' style={{ backgroundImage: `url(${avatar})` }}></div>
    <h4 className='name'>{`${first_name} ${last_name}`}</h4>
    <p className='email' onClick={copyEmail}>{email}</p>
  </div>;
};

export default Card;
