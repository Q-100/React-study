import React, { useState } from "react";
export default function List_element(title) {
    let [num, numfunc] = useState(0)
    return (
        <div>
            <h3>{title.title} <span onClick={() => { numfunc(num + 1) }}>★</span>{num}</h3>
            <p>7월 18일 발행</p>
            <hr />
        </div>
    )


}