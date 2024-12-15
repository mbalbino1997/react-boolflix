import style from "./Card.module.css"
import Placeholder from "../../assets/imgs/placeholder.jpg"
import it from "../../assets/imgs/it.png"
import en from "../../assets/imgs/en.png"
import fr from "../../assets/imgs/fr.png"
import ja from "../../assets/imgs/jp.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function Card({ movie = "", serie = "", onClick = () => { }, index = null }) {
    const flagIcon = {
        it,
        en,
        fr,
        ja
    }
    const validData = movie || serie
    const { name, original_name, title, original_title, original_language, vote_average, id } = validData

    const BASE_URL = "https://image.tmdb.org/t/p/w342"
    const rating = Math.ceil(vote_average / 2);
    return (

        <div className={`card ${index === id ? "active" : ""}`} onClick={onClick}>
            <p>TITOLO: <br />{title || name}</p>
            <p>TITOLO ORIGINALE: <br />{original_title || original_name}</p>
            <p>LINGUA:</p><img src={flagIcon[original_language]} alt="" />
            <p>VOTO: <br />
                {[...Array(5)].map((m, i) => (
                    <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        color={i < rating ? "gold" : "lightgray"}
                    />
                ))}</p>
            <figure className={style.img_position}>
                <img className="card-img" src={validData.poster_path ? `${BASE_URL}${validData.poster_path}` : Placeholder} alt="" />
            </figure>
        </div>

    )

}