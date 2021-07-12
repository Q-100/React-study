import dummy from "../db/data.json"
import "./Catalog.modules.css"
export default function Catalog() {
    return (
        <ul>
            {dummy.kinds.map(kind => (
                <li key={kind.id} className="catalog-nav">
                    {kind.kind}
                    <hr />
                </li>
            ))}

        </ul>
    )
}