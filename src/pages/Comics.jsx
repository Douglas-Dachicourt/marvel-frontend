import axios from "axios"
import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"


const Comics = () => {

    const [data, setData] = useState("")
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {

        const fetchData = async () => {


            try {

                const response = await axios.get("http://localhost:3000/comics")
                console.log(response.data)
                setData(response.data.results)
                setIsLoading(false)

            } catch (error) {
                console.log(error.message);

            }

        }


        fetchData()

    }, [])


    return isLoading ? <p className="loading">chargement...</p> : <>
        <h1 className="character-title">Liste des Comics</h1>
        <div className="container comics">

            {data.map((comic) => {
                // console.log(comic);
                return <article key={comic._id} className="comic-article" >
                    <div className="title-comic">
                        <h2 >{comic.title}</h2>
                        <img src={comic.thumbnail.path + "." + comic.thumbnail.extension} alt="" />
                    </div>
                    {comic.description ? <div className="descript-comic">
                        <p>{comic.description}</p>
                    </div> : (<div className="descript-comic">A description will be available soon ...</div>
                    )}


                </article>
            })}


        </div>

    </>



}


export default Comics