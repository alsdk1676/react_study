import React, { useEffect, useState } from 'react';

const SideEffect = () => {
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState(0);

  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16)
  }

  const onClickToChangeColor = () => {
    setColor(getRandomColor())
  }

  const onClickToIncrease = () => {
    // setNumber(number + 1)
    setNumber((prev) => {
      console.log(prev, "이전 값")
      return number + 1;
    })
    // 되돌리기 가능
  }

  // useEffect(() => {
  //   console.log("리랜더링😎")
  // }, []) // 의존성 배열

  useEffect(() => {
    console.log("리랜더링😎")
  }, [number]) // 의존성 배열

  // 넘버가 바뀔때만 리랜더링, 컬러가 바뀔땐 리랜더링X

  console.log(color) // 색 변하는지 확인
   
  return (
    <div>
      <h1 color={{color}}>{number}</h1>
      {/* <button onClick={() => {setNumber(number + 1)}}>+1 증가</button> */}
      <button onClick={onClickToIncrease}>+1 증가</button>
      <button onClick={onClickToChangeColor}>색상 변경</button>
    </div>
  );
};

export default SideEffect;