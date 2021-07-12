import React, { useState } from "react";
import "./List.modules.css";
import dummy from "../db/data.json"
import { useParams } from "react-router-dom"
import List_element from "./List_element";
function List() {
    let [num, numfunc] = useState(0);
    const listparam = useParams().catalog; // useparams쓰면 넘어오는게 오브젝트라 안에 속성값도 맞춰야됨
    const title_kind = dummy.titles.filter(title => title.kind === listparam);
    return (
        <div className="list" >
            {title_kind.map(title => (
                List_element(title)
            ))}
        </div>
    )
}

export default List;