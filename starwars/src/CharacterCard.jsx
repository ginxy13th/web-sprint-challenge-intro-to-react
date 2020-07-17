import React from 'react';

const Card = ({img, name, films}) => {
return (
    <div>
        <img src={img}></img>
        <p>{name}</p>
        <p>{films}</p>
    </div>
)
}
export default Card;