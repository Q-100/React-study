import React, { useState } from "react";
import "./List.modules.css";
import dummy from "../db/data.json"
function List() {
    let [num, numfunc] = useState(0);
    let [title, titlefunc] = useState(["오늘 저녁은 찹스테이크", "리액트 공부", "코인 ㅈ됬다"]);
    return (
        <div className="list" >
            {dummy.titles.map(title => (
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