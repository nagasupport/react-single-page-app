import React from 'react';
import '../card/card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img alt="empPhoto" src={`http://robohash.org/${props.emp.id}?set=set2&size=180x180`} />
        <h2>{props.emp.name}</h2>
        <p>{props.emp.email}</p>
    </div>
);