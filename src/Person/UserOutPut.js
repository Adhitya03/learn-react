import React from 'react';

const UserOutPut = ( props ) =>{
    return(

        <div className="UserOutPut">
            <p>Name : {props.name} </p>
            <p>Bio : Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>

    )
};

export default UserOutPut;