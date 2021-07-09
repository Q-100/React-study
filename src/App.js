import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { func } from "prop-types";
import Customer from "./components/Customer"

function App() { // 모든 함수형 컴포넌트 이름은 대문자로 시작해야함
  let [title, titlefunc] = useState(["오늘 저녁은 찹스테이크", "리액트 공부", "코인 ㅈ됬다"]); // useState 사용 시 저장된 내용과 내용을 변경하는 함수를 반환함(숫자,문자,array,object 모두 가능)
  // state를 사용하는 이유 : 기존 변수에 사용하면 새로고침을 해야 변경된 내용이 렌더링 되지만 state를 사용하면 state내용이 변경될 시 새로고침 없이 자동으로 재랜더링됨
  let [num, numfunc] = useState(0);
  let [time, timefunc] = useState(new Date().toLocaleTimeString());

  function changeTitle() {
    let tmp = [...title];
    tmp[0] = "오늘 저녁은 김치볶음밥";
    titlefunc(tmp);
    console.log(title);

  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>BLOG</div>
      </div>
      <button onClick={changeTitle}> {/* chagneTitle()로 적으면 이건 함수가 바로 실행이됨 소괄호를 없애야 눌러야 실행됨*/}
        변경
      </button>
      <div className="list">
        <h3>{title[0]} <span onClick={() => { numfunc(num + 1) }}>★</span>{num}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <Customer age={10} />
      {/* 이런식으로 컴포넌트 여러개를 하더라도 각 기능과 동작은 각각 일어남 */}
      <Customer age={20} />
      <Customer age={30} />
    </div>

  );
}

export default App;
