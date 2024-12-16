import style from "./Header.module.css";
import SearchButton from "../../searchbutton/SearchButton";
import { useState, useEffect } from "react";
import { useContext } from "react";
import axios from "axios";
import GlobalContext from "../../../context/GlobalContext";
export default function Header() {
    const { moviesArray, setMoviesArray } = useContext(GlobalContext);
    const { seriesArray, setSeriesArray } = useContext(GlobalContext);
    const { setMovieIndex, setSerieIndex } = useContext(GlobalContext);
    const [queryText, setQueryText] = useState("");
    const BASE_URI = "https://api.themoviedb.org/3/search/";
    const api_movie = "movie";
    const api_serie = "tv";
    const API_KEY = "3ddebe04883de61a2570f2eb4a6c7c21";
    function fetchData(urlEnd) {
        axios.get(BASE_URI + urlEnd, {
            params: {
                api_key: API_KEY,
                query: queryText,
                language: "it"
            },
        }).then((res) => {
            if (urlEnd === "movie") setMoviesArray(res.data.results);
            if (urlEnd === "tv") setSeriesArray(res.data.results);
            console.log(res.data.results);

        }).catch((err) => { console.error(err.message); })
    }
    const handleKey = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            searchFunction();
        }
    }
    function searchFunction() {
        fetchData(api_serie);
        fetchData(api_movie);
        setMovieIndex(0);
        setSerieIndex(0);
    }
    // useEffect(() => {
    //     fetchData();

    // }, [])
    return (<>
        <hr />
        <header className={style.header}>
            <h1 className={style.title}>BOOLFLIX</h1>
            <div className={style.search}>
                <input onKeyDown={handleKey} className={style.input_text} type="text" value={queryText} onChange={(e) => setQueryText(e.target.value)} />
                <SearchButton onClick={searchFunction} />
            </div>
        </header>
        <hr />
    </>
    )
}