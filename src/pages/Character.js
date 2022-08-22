import { useCharacter } from "../hooks/useCharacter"
import { useParams } from 'react-router-dom'

export default function Character() {
    const {id} = useParams()

    const {error, data, loading } = useCharacter(id)

    if(loading) return <div>Spinner...</div>
    if(error) return <div>Something went wrong</div>
  

  return (
    <div>

        <img src={data.character.image} width={750} height={750} alt=""/>
        <div>
            <h1>{data.character.name}</h1>
        </div>
        <div>
            {data.character.episode.map(item => {
                return <h4>{item.episode} - {item.name}</h4>
            })}
        </div>
    </div>
  )
}
