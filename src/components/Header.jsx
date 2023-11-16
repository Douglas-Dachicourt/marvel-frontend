import { Link } from "react-router-dom"

const Header = () => {
    return <header>
        <div>
            <img src={"https://lereacteur-marvel-api.netlify.app/static/media/logo.ad6c786b.svg"} alt="logo-marvel-comics" />
        </div>

        <div>
            <Link to={"/"} className="menu-style">ACCUEIL</Link>
            <Link to={"/characters"} className="menu-style">PERSONNAGES</Link>
            <Link to={"/comics"} className="menu-style">COMICS</Link>
            <Link className="menu-style">FAVORIS</Link>
        </div>
    </header>
}


export default Header