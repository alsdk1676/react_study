import React, { useState } from 'react';

const Count = () => {

  // let number = 0;

  // 2개의 매개변수 [상태를 사용할 변수, 상태를 바꿀 수 있는 setter 메서드] = useState(초기값);
  const [number, setNumber] = useState(10);
  // setNumber만 number를 변경할 수 있음 => 상태를 변경해줌

  const decrease = () => {
    console.log(number)    
    // number -= 1;
    // console 창에는 변화가 나타나지만 화면 숫자는 변하지 않음
    // 결국 상태가 변해야 하기 때문에 useState 사용
    setNumber(number - 1) // 함수 사용
  }
  const increase = () => {
    console.log(number)
    // number += 1;
    setNumber(number + 1)
  }

  return (
    <div>
      {/* onClick 했을 때 decrease 실행 */}
      <button onClick={decrease}>-1 감소</button>
      {number} {/* number 보여주기 */}
      <button onClick={increase}>+1 증가</button>
      
    </div>
  );
};

export default Count;