import style from "./SearchButton.module.css"
export default function SearchButton({ onClick = () => { } }) {

    return (
        <button className={style.search_btn} onClick={onClick}>search</button>
    )
}