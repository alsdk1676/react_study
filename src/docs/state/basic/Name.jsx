import React, { useState } from 'react';

const Name = () => {
  // 사용자가 입력한 값을 화면에 출력하기
  // let result = "결과" // result의 상태가 변해야함

  const [result, setResult] = useState("")

  // input이 onChange가 됐을 때 e 객체 받기
  const onChangeInputValue = (e) => {
    // console.log(e)
    // console.log(e.target.value)
    setResult(e.target.value) // result에 있는 값 바꿔줌
  }
  return (
    <div>
      <p>{result}</p>
      {/* 입력할 수 있도록 input 태그 넣어주기 */}
      {/* input이 onChange가 됐을 때 e 객체 받기 */}
      <input type="text" onChange={onChangeInputValue} />
    </div>
  );
};

export default Name;