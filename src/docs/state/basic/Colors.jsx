import React, { useState } from 'react';

const Colors = () => {
  // 빨간색 버튼을 누르면 글자색을 빨갛게
  // 파란색 버튼을 누르면 글자색을 파랗게
  // "핑크색"을 입력하면 글자 색을 없앤다 (e함수에서 검사)
  // const [result, setResult] = useState("안녕")
  // 상태 2개 필요 : color, result

  // const result = "결과";

  const [result, setResult] = useState("")
  const [color, setColor] = useState("")

  // 컬러를 클릭했을 때 각각의 함수 호출
  const onClickToColorRed = () => { setColor("red") }
  const onClickToColorBlue = () => { setColor("blue") }
  const onChangeToInputValue = (e) => { 
    console.log(e.target.value)
    // e.target.value가 "핑크색"이면 setColor에 빈 문자열 넣어준 다음 return 해줘.
    if(e.target.value === "핑크색"){ setColor("") }
    return setResult(e.target.value)
  }
    // console.log(color)

  return (
    <div>
      {/* 스타일 변경 : p 태그에서 사용 (key=value 형태 = {객체 형태로}) */}
      {/* <p style = {{color : color}}>{result}</p>  */}
      <p style = {{color}}>{result}</p> 
      <input type="text" onChange={onChangeToInputValue} />
      <button onClick={onClickToColorRed}>빨간색</button>
      <button onClick={onClickToColorBlue}>파란색</button>
    </div>
  );
};

export default Colors;