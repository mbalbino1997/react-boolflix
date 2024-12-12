import style from "./Header.module.css"
import SearchButton from "../../searchbutton/SearchButton"
export default function Header() {
    return (
        <header className={style.header}>
            <h1>BOOLFLIX</h1>
            <div>
                <input type="text" />
                <SearchButton />
            </div>

        </header>
    )
}