import React from 'react';

const Component = (props) => { // Container에서 던져준 변수 props로 받기
  console.log(props) // 결과 : {name: '서민아', age: 20}
  return (
    <div>
      <p>자식 컴포넌트😎</p>
      <p>저의 이름은 : {props.name}</p>  
      <p>저의 나이는 : {props.age}입니다.😊</p>
    </div>
  );
};

export default Component;