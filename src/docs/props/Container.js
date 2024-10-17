import React from 'react';
// import Component from './Component';
import Component2 from './Component2';

const Container = () => {
  const name = "서민아";
  const age = 20;
  const printName = (name) => { // 함수의 선언
    console.log(name)
  };
  return (
    <div>
      {/* <Component name={name} age={age}/> */}
      {/* 객체로 보기 때문에 key = value */}
      <Component2 printName={printName}> 
        <span>회원입니다😊</span>
      </Component2>
    </div>
  );
};

export default Container;