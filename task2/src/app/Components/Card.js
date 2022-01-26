import React from 'react';
import '../Styles/Card.css'

const Card = (props) => {
  const { first_name, last_name, email, avatar } = props.user;
  console.log("im in card component")

  const copyEmail = (e) => {
    navigator.clipboard.writeText(e.innerText)
  }

  return <div id='Card'>
    <img src={require(avatar)} />
    <h4 className='name'>{`${first_name} ${last_name}`}</h4>
    <p className='email' onClick={copyEmail}>{email}</p>
  </div>;
};

export default Card;
