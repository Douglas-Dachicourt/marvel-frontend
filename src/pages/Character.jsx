import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const Character = () => {

    const params = useParams()
    const characterId = params.characterId
    // console.log(characterId);
    const [data, setData] = useState("")
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {


        const fetchData = async () => {

            try {
                const response = await axios.get(`https://app.northflank.com/u/dd-74/project/project-douglas/services/marvel-backend/instances/68328bb1-df15-4f17-975e-54ccacf79bf0/logs/character/${characterId}`)
                // console.log(response.data);
                setData(response.data)
                setIsLoading(false)

            } catch (error) {
                console.log(error);
            }

        }

        fetchData()


    }, [characterId])

    return isLoading ? <p>Chargement...</p> : <div>

        {/* {data.map((comic) => {
            // console.log(comic);
            return <div key={comic._id}>
                <p>{comic.name}</p>
            </div>


        })} */}



    </div>






}

export default Character