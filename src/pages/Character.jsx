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
                const response = await axios.get(`http://localhost:3000/character/${characterId}`)
                console.log(response.data);
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