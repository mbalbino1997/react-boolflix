import style from "./SearchPage.module.css"
import Card from "../../components/card/Card"
export default function () {
    return (<>
        <section>
            <div className="container">
                <h1>Film</h1>
                <div className="row">
                    <div className="col">
                        <Card />
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <h1>Serie TV</h1>
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