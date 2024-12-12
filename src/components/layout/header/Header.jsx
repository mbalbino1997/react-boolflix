import style from "./Header.module.css";
import SearchButton from "../../searchbutton/SearchButton";
import { useState, useEffect } from "react";
import { useContext } from "react";
import axios from "axios";
import GlobalContext from "../../../context/GlobalContext";
export default function Header() {
    const { moviesArray, setMoviesArray } = useContext(GlobalContext);
    const [queryText, setQueryText] = useState("");
    const BASE_URI = "https://api.themoviedb.org/3/search/movie";
    const API_KEY = "3ddebe04883de61a2570f2eb4a6c7c21";
    function fetchData() {
        axios.get(BASE_URI, {
            params: {
                api_key: API_KEY,
                query: queryText,
                language: "it"
            },
        }).then((res) => {
            setMoviesArray(res.data.results);
            console.log(res.data.results);

        }).catch((err) => { console.error(err.message); })
    }
    // useEffect(() => {
    //     fetchData();

    // }, [])
    return (
        <header className={style.header}>
            <h1 className={style.title}>BOOLFLIX</h1>
            <div className={style.search}>
                <input type="text" value={queryText} onChange={(e) => setQueryText(e.target.value)} />
                <SearchButton onClick={() => { fetchData() }} />
            </div>

        </header>
    )
}