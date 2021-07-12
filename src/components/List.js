import React, { useState } from "react";
import "./List.modules.css";
import dummy from "../db/data.json"
import { useParams } from "react-router-dom"
function List() {
    let [num, numfunc] = useState(0);
    const listparam = useParams().catalog;
    const title_kind = dummy.titles.filter(title => title.kind === listparam);
    console.log(listparam)
    return (
        <div className="list" >
            {title_kind.map(title => (
                <div>
                    <h3>{title.title} <span onClick={() => { numfunc(num + 1) }}>★</span>{num}</h3>
                    <p>2월 17일 발행</p>
                    <hr />
                </div>
            ))}



        </div>
    )
}

export default List;