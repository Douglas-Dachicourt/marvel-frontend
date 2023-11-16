import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const Characters = () => {

    const [data, setData] = useState("")
    const [isLoading, setIsLoading] = useState(true)





    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await axios.get("http://localhost:3000/characters")
                console.log(response.data.results);
                setData(response.data.results);
                setIsLoading(false)


            } catch (error) {
                console.log(error.message);

            }

        }

        fetchData()


    }, []);

    return isLoading ? <p className="loading">Chargement...</p> : (

        <>
            <h1 className="character-title">Séléctionne ton héro</h1>
            <div className="container listing">
                {data.map((hero) => {
                    return <article key={hero.name} >
                        <Link style={{ textDecoration: "1px solid red" }}>
                            <div className="hero-name">
                                <p >{hero.name}</p>
                            </div>
                        </Link>

                        <div className="character-preview">
                            <img className="hero-pics" src={hero.thumbnail.path + "." + hero.thumbnail.extension} alt="hero-pictures" />
                            <p className="hero-description">{hero.description}</p>
                        </div>

                    </article>
                })}
            </div>
        </>

    )


}



export default Characters