import React from 'react';

import './Person.css';

const person = ( props ) => {
    return (
        <div className="Person">
            <p onClick={props.click}> {props.name} phone {props.phone} </p>
            <p>{props.children}</p>
            <button onClick={props.addToFav}> Add To Favorites </button>
        </div>
    )
};

export default person;