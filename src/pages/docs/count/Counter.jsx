import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../../../modules/count';

const Counter = () => {
  // store에 있는 값을 접근하기 위한 훅 함수 useSelector();
  // console.log(useSelector((state) => state))
  // const number = useSelector((state) => state.number); 통째로가 return값 = 통째로 0값
  const number = useSelector((state) => state.number);
  //  액션 발생시키기 위한 훅 함수 useDispatch()
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const onChangeToInputValue = (e) => {
    // input이 완성될때마다 inputValue에 값 들어감 
    setInputValue(e.target.value);
  }
  
  console.log(inputValue)

  return (
    <div>
      <h1>{number}</h1>
      <input type="text" onChange={onChangeToInputValue} value={inputValue} />
      <div>
        {/* dispatch가 액션 발생 시킴 */}
        <button onClick={() => { dispatch(decrease(inputValue)) }}>감소</button>
        <button onClick={() => { dispatch(increase(inputValue)) }}>증가</button>
      </div>
    </div>
  );
};

export default Counter;