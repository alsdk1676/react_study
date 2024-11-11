import React from 'react';
import Component from './Component';
import Component2 from './Component2';

const Container = () => {
  const name = "서민아";
  const age = 20;
  const printName = (name) => { // 함수의 선언
    console.log(name)
    // name을 받아서 console에 출력해주는 함수
    // Component2에 넘겨야 사용 가능 (key = value 형태로)
  };
  return (
    <div>
      {/* Component에서 사용할 수 있도록 변수 선언하기(넘기기)
          : 객체로 보기 때문에 key = value 형태 */}
      {/* <Component name={name} age={age}/> */}

      <Component2 printName={printName}> {/* 결과 : console에 서민아 출력 */}
        <span>회원입니다😊</span>
      </Component2>
    </div>  
  );
};

export default Container;
 