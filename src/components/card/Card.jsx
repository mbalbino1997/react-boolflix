import style from "./Card.module.css"
import Placeholder from "../../assets/imgs/placeholder.jpg"
import it from "../../assets/imgs/it.png"
import en from "../../assets/imgs/en.png"
import fr from "../../assets/imgs/fr.png"
export default function Card({ movie = "", serie = "" }) {
    const flagIcon = {
        it,
        en,
        fr
    }
    const BASE_URL = "https://image.tmdb.org/t/p/w342"
    const { title, original_title, original_language, vote_average } = movie
    return (

        <div className="card">
            <p>TITOLO: <br />{title}</p>
            <p>TITOLO ORIGINALE: <br />{original_title}</p>
            <p>LINGUA:</p><img src={flagIcon[original_language]} alt="" />
            <p>VOTO: <br />{Math.ceil(vote_average / 2)}</p>
            <figure className={style.img_position}>
                <img className="card-img" src={movie.poster_path ? `${BASE_URL}${movie.poster_path}` : Placeholder} alt="" />
            </figure>
        </div>

    )

}