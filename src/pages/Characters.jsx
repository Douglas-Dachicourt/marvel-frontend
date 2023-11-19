import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"


const maxLetters = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}


const Characters = () => {

    const [data, setData] = useState("")
    const [isLoading, setIsLoading] = useState(true)



    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await axios.get("https://site--marvel-backend--5p86lc7n4dj5.code.run/characters")
                // console.log(response);
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
            <h1 className="character-title">Séléctionne ton Super-héro</h1>
            <div className="container listing">
                {data.map((hero) => {
                    return <article key={hero.name} className="article">
                        <Link to={"/character/" + hero._id} className="hero-name">
                            <div >
                                <p >{maxLetters(hero.name, 12)}</p>
                            </div>
                        </Link>

                        <div className="character-preview">
                            <Link to={"/character/" + hero._id}>
                                {hero.thumbnail.path.includes("image_not_available") || hero.thumbnail.extension === "gif" ? <img className="no-hero-portrait" src="https://live.staticflickr.com/1878/44377254611_96d0b13955_c.jpg" alt="no-hero-founded" /> :
                                    <img className="hero-pics" src={hero.thumbnail.path + "." + hero.thumbnail.extension} alt="hero-pictures" />
                                }</Link>

                            <p className="hero-description">{hero.description}</p>
                        </div>

                    </article>
                })}
            </div>
        </>

    )


}



export default Characters