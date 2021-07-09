import React, { useState } from "react";
import Customer_tmp from "./Customers_tmp"


function Customer(props) {
    const [name, namefunc] = useState("Mike");
    const [age, agefunc] = useState(props.age); // 넘겨받은 props는 컴포넌트 안에서 수정이 불가능함 그대로써야됨
    // 대신 넘겨받은 props를 새로운 state로 저장해서 만든 state를 수정해서 사용하면됨

    function changeText(e) {
        console.log(e.target.value)
    }
    return (
        <div>
            <input type="text" onChange={changeText} /> {/* onChagne={(e) => { console.log(e.target.value) }} 와 같음*/}
            <div>
                <h2>{name}{age}</h2>
                <Customer_tmp name={name} />
                <button onClick={() => {
                    namefunc(name === "Mike" ? "Jane" : "Mike");
                    agefunc(age + 1)
                }}>이름 변경</button>
            </div>
        </div>
    );

}

export default Customer;