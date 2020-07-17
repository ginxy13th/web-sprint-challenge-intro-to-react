import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './CharacterCard.jsx';

const CharactersPage = () => {

    const [data, setData] = useState([])

    useEffect(() => {
            axios
            .get('https://swapi.dev/api/people')
            .then(response => {
                console.log(response)
                setData([response.data.results])
            })

            .catch(error => {console.log('error', error)})

    }, [])

    return(
        <div className='CharactersPage'>
            {data.map(character => {
                return (
                    <Card
                    key={character.id}
                    img={character.url}
                    name={character.name}
                    films={character.films}
                    />
                )
            })}
        </div>
    )
}

export default CharactersPage;