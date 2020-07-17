import React, {useState, useEffect} from 'react';
import axios from "axios";
import Card from './CharacterCard.jsx';
import styled from 'styled-components';

const CardContainer = styled.div`
display:flex;
flex-wrap: wrap;
justify-content:center;
`;

const CharactersPage = () => {

    const [data, setData] = useState([])

    useEffect(() => {
            axios
            .get('https://swapi.dev/api/people/')
            .then(response => {
                console.log(response)
                setData(response.data.results)
            })

            .catch(error => {console.log('error', error)})

    }, [])

    return(
        <CardContainer>
            {data.map(character => {
                return (
                    <>
                    <Card
                    key={character.id}
                    name={character.name}
                    height={character.height}
                    eyeColor={character.eye_color}
                    hairColor={character.hair_color}
                    mass={character.mass}
                    />
                    </>
                )
            })}
        </CardContainer>
    )
}

export default CharactersPage;