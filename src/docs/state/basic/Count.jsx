import React, { useState } from 'react';

const Count = () => {

  const [number, setNumber] = useState(10);
  // setNumber만 number를 변경할 수 있음 => 상태를 변경해줌

  const decrease = () => {
    console.log(number)    
    setNumber(number - 1) // 함수 사용
    number -= 1;
  }
  const increase = () => {
    console.log(number)
    setNumber(number + 1)
    number += 1;
  }

  return (
    <div>
      <button onClick={decrease}>-1 감소</button>
      {number}
      <button onClick={increase}>+1 증가</button>
      
    </div>
  );
};

export default Count;