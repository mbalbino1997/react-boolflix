import style from "./SearchPage.module.css"
import Card from "../../components/card/Card"
import { useContext } from "react"
import GlobalContext from "../../context/GlobalContext"
export default function () {
    const { moviesArray, setMoviesArray } = useContext(GlobalContext);
    return (<>
        <section>
            <div className="container">
                <h1 className={style.movie_type}>Film</h1>
                <div className="row">
                    {moviesArray.map((movie) => (
                        <div key={movie.id} className="col">
                            <Card movie={movie} />
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <h1 className={style.movie_type}>Serie TV</h1>
                <div className="row">
                    <div className="col">
                        <Card />
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}