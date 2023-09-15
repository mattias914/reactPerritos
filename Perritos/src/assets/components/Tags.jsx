import React from 'react';
import Badge from 'react-bootstrap/Badge';


const Tags = (props) => {
    return (
    <>
        <Badge className='badge' bg ={props.color}>
            {props.badge}
        </Badge>
    </>
    );
};
export default Tags;
