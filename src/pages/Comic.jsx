import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"



const Comic = () => {

    const params = useParams()
    const comicId = params.comicId
    const [data, setData] = useState("")
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {

        const fetchData = async () => {

            try {

                const response = await axios.get(`https://app.northflank.com/u/dd-74/project/project-douglas/services/marvel-backend/instances/68328bb1-df15-4f17-975e-54ccacf79bf0/logs/comic/${comicId}`)
                console.log(response.data);
                setData(response.data)
                setIsLoading(false)

            } catch (error) {
                console.log(error.message);
            }


        }




        fetchData()



    }, [])

    return isLoading ? <p>Chargement...</p> : <div>


    </div>



}

export default Comic