import style from "./Card.module.css"
import Placeholder from "../../assets/imgs/placeholder.jpg"
import it from "../../assets/imgs/it.png"
import en from "../../assets/imgs/en.png"
import fr from "../../assets/imgs/fr.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function Card({ movie = "", serie = "" }) {
    const flagIcon = {
        it,
        en,
        fr
    }
    const { title, original_title, original_language, vote_average } = movie
    const totalStars = 5;
    const BASE_URL = "https://image.tmdb.org/t/p/w342"
    const rating = Math.ceil(vote_average / 2);
    return (

        <div className="card">
            <p>TITOLO: <br />{title}</p>
            <p>TITOLO ORIGINALE: <br />{original_title}</p>
            <p>LINGUA:</p><img src={flagIcon[original_language]} alt="" />
            <p>VOTO: <br />
                {[...Array(totalStars)].map((_, index) => (
                    <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        color={index < rating ? "gold" : "lightgray"}
                    />
                ))}</p>
            <figure className={style.img_position}>
                <img className="card-img" src={movie.poster_path ? `${BASE_URL}${movie.poster_path}` : Placeholder} alt="" />
            </figure>
        </div>

    )

}