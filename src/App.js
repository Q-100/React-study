import React, { useState } from "react";
import './App.css';
import Catalog from "./components/Catalog";
import Customer from "./components/Customer"
import Header from "./components/Header";
import List from "./components/List";

function App() {
  // 모든 함수형 컴포넌트 이름은 대문자로 시작해야함
  // useState 사용 시 저장된 내용과 내용을 변경하는 함수를 반환함(숫자,문자,array,object 모두 가능)
  // state를 사용하는 이유 : 기존 변수에 사용하면 새로고침을 해야 변경된 내용이 렌더링 되지만 state를 사용하면 state내용이 변경될 시 새로고침 없이 자동으로 재랜더링됨


  // function changeTitle() {
  //   let tmp = [...title];
  //   tmp[0] = "오늘 저녁은 김치볶음밥";
  //   titlefunc(tmp);
  //   console.log(title);
  // }

  return (
    <div className="App">
      <Header />
      <Catalog />
      <List />
      {/* <Customer age={10} /> */}
      {/* 이런식으로 컴포넌트 여러개를 하더라도 각 기능과 동작은 각각 일어남 */}
      {/* <Customer age={20} /> */}
      {/* <Customer age={30} /> */}
    </div>

  );
}

export default App;
