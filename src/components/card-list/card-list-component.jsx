import React from 'react';
import {Card} from '../card/card.component'
import './card-list.styles.css'

export const CardList = (props) => ( 
    <div className='card-list'>
    {
        props.employess.map(emp => (
            <Card key={emp.id} emp={emp} />
        ))
    }
    </div>
);