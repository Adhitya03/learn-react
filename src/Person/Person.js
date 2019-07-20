import React from 'react';

const person = ( props ) => {
    return(
        <div className="person">
            <p className="name" onClick={props.clicked}> Hi.! I'm {props.name} and I am {props.age} old </p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.change}/>
        </div>
    )
};

export default person;