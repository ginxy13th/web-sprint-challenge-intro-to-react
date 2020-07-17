import React from 'react';
import styled from 'styled-components';


const CardDiv = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
border:2px solid black; 
width:20%;
background-color: beige;
border-radius:15%;
opacity: 0.5;
`;
const Name = styled.h3`
font-family: 'Syncopate', sans-serif;
`;


const Card = ({name, height, eyeColor, hairColor, mass}) => {
return (
    <CardDiv>
        <Name>{name}</Name>
        
        <p>Height: {height}</p>
        <p>Eye Color: {eyeColor}</p>
        <p>Hair Color: {hairColor}</p>
        <p>Mass: {mass}</p>
        
    </CardDiv>
)
}
export default Card;