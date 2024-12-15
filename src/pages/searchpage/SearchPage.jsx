import style from "./SearchPage.module.css"
import Card from "../../components/card/Card"
import { useContext, useState } from "react"
import GlobalContext from "../../context/GlobalContext"
export default function () {
    const { moviesArray, setMoviesArray, seriesArray } = useContext(GlobalContext);
    const [indexActiveCard, setIndexActiveCard] = useState(null);
    function handleActiveCard(cardID) {
        setIndexActiveCard((prevIndex) => prevIndex === cardID ? null : cardID)
    }
    return (<>
        <section className={style.section_top}>
            <div className="container">
                <h1 className={style.movie_type}>Film</h1>
                <div className="row">
                    {moviesArray.map((movie) => (
                        <div key={movie.id} className="col">
                            <Card movie={movie} onClick={() => handleActiveCard(movie.id)} index={indexActiveCard} />
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
        <section className={style.section_bot}>
            <div className="container">
                <h1 className={style.movie_type}>Serie TV</h1>
                <div className="row">

                    {seriesArray.map((serie) => (
                        <div key={serie.id} className="col">
                            <Card serie={serie} onClick={() => handleActiveCard(serie.id)} index={indexActiveCard} />
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
    </>
    )
}