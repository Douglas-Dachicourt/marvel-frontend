import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


const Comics = () => {

    const [data, setData] = useState("")
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {

        const fetchData = async () => {


            try {

                const response = await axios.get("marvel-backend:8080/comics")
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
                        <Link to={"/comic/" + comic._id}>
                            <h2 >{comic.title}</h2>
                        </Link>

                        {comic.thumbnail.path.includes("image_not_available") ? <img className="no-pic-found" src="https://images.assetsdelivery.com/compings_v2/newdesignillustrations/newdesignillustrations1902/newdesignillustrations190211443.jpg" alt="" /> :
                            <img src={comic.thumbnail.path + "." + comic.thumbnail.extension} alt="" />
                        }
                    </div>
                    {comic.description ? <div className="descript-comic">
                        <p>{comic.description}</p>
                    </div> : (<div className="no-descript">
                        <p>Description is</p>
                        <img src="https://img.freepik.com/vecteurs-libre/style-grunge-abstrait-venir-eclaboussures-noires_1017-26690.jpg?w=1800&t=st=1700154900~exp=1700155500~hmac=b91b2e9dcb754d6b1e34ade528b727d1a8c26251b37bc1546d9d4f768168c172" alt="" />
                    </div>
                    )}


                </article>
            })}


        </div>

    </>



}


export default Comics