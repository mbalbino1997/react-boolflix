import style from "./SearchPage.module.css";
import Card from "../../components/card/Card";
import { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";

export default function SearchPage() {
    const { booleanFirstFetch, moviesArray, seriesArray, movieIndex, serieIndex, setMovieIndex, setSerieIndex } = useContext(GlobalContext);

    // Stati per tracciare l'indice attivo per Film e Serie TV
    const [indexActiveCard, setIndexActiveCard] = useState(null);


    // Funzione per gestire la card attiva
    function handleActiveCard(cardID) {
        setIndexActiveCard((prevIndex) => (prevIndex === cardID ? null : cardID));
    }

    // Funzioni per spostare le card dei Film
    const moveLeftMovies = () => {
        setMovieIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };
    const moveRightMovies = () => {
        setMovieIndex((prevIndex) => Math.min(prevIndex + 1, moviesArray.length - 1));
    };

    // Funzioni per spostare le card delle Serie TV
    const moveLeftSeries = () => {
        setSerieIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };
    const moveRightSeries = () => {
        setSerieIndex((prevIndex) => Math.min(prevIndex + 1, seriesArray.length - 1));
    };

    return ((moviesArray?.length || 0) > 0 || (seriesArray?.length || 0) > 0 ?
        <>
            {/* Sezione Film */}
            <section className={style.section_top}>
                <div className="container">
                    <h1 className={style.movie_type}>Film</h1>
                    <div className="row" style={{ position: "relative" }}>
                        {/* Freccia sinistra */}
                        {movieIndex > 0 && (
                            <button className="arrowLeft" onClick={moveLeftMovies}>
                                &lt;
                            </button>
                        )}
                        {/* Card dei Film */}
                        {moviesArray.slice(movieIndex, movieIndex + 6).map((movie) => (
                            <div key={movie.id} className="col">
                                <Card
                                    movie={movie}
                                    onClick={() => handleActiveCard(movie.id)}
                                    index={indexActiveCard}
                                />
                            </div>
                        ))}
                        {/* Freccia destra */}
                        {movieIndex < moviesArray.length - 6 && (
                            <button className="arrowRight" onClick={moveRightMovies}>
                                &gt;
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* Sezione Serie TV */}
            <section className={style.section_bot}>
                <div className="container">
                    <h1 className={style.movie_type}>Serie TV</h1>
                    <div className="row" style={{ position: "relative" }}>
                        {/* Freccia sinistra */}
                        {serieIndex > 0 && (
                            <button className="arrowLeft" onClick={moveLeftSeries}>
                                &lt;
                            </button>
                        )}
                        {/* Card delle Serie TV */}
                        {seriesArray.slice(serieIndex, serieIndex + 6).map((serie) => (
                            <div key={serie.id} className="col">
                                <Card
                                    serie={serie}
                                    onClick={() => handleActiveCard(serie.id)}
                                    index={indexActiveCard}
                                />
                            </div>
                        ))}
                        {/* Freccia destra */}
                        {serieIndex < seriesArray.length - 6 && (
                            <button className="arrowRight" onClick={moveRightSeries}>
                                &gt;
                            </button>
                        )}
                    </div>
                </div>
            </section>
        </>
        : booleanFirstFetch ? <><h1 className="no-results">NESSUN RISULTATO CORRISPONDENTE</h1></> : <><h1 className="no-results">EFFETTUA UNA RICERCA</h1></>
    );
}
