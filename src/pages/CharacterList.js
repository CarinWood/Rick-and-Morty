import { useCharacters } from '../hooks/useCharacters'
import './characterList.css'
import { Link } from 'react-router-dom'



const CharacterList = () => {

    const {error, data, loading} = useCharacters()

   console.log({error, loading, data})

   if(loading) return <div>Loading...</div>
   if(error) return <div>Something went wrong</div>
  
  
   return (
    <div className="characterList">
        {data.characters.results.map(character => {
                return (
                <Link to={`/${character.id}`}>
                    <img src={character.image} alt="" />
                    <h2>{character.name}</h2>
                </Link>)
        })}
    </div>
  )
}

export default CharacterList