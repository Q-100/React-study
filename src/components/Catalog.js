import dummy from "../db/data.json"
import "./Catalog.modules.css"
import { Link } from "react-router-dom"
export default function Catalog() {
    return (
        <ul>
            {dummy.kinds.map(kind => (
                <li key={kind.id} className="catalog-nav">
                    <Link to={`/list/${kind.kind}`}>
                        {kind.kind}
                    </Link>
                    <hr />

                </li>
            ))}

        </ul>
    )
}