import React from 'react';

const person = ( props ) => {
    return(
        <div className="person">
            <p className="name"> Hi.! I'm {props.name} and I am {props.age} old </p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;