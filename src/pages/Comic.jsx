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

                const response = await axios.get(`http://localhost:3000/comic/${comicId}`)
                console.log(response);
                setIsLoading(false)

            } catch (error) {
                console.log(error.message);
            }


        }




        fetchData()



    }, [])




}

export default Comic