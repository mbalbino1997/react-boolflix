import style from "./Card.module.css"
export default function Card({ movie }) {
    if (!movie) {
        return <div>Nessun film disponibile</div>;
    }
    const { title, original_title, original_language, vote_average } = movie
    return (

        <div>
            <h1>{title}</h1>
            <h1>{original_title}</h1>
            <h3>{original_language}</h3>
            <h4>{vote_average}</h4>
        </div>

    )
}