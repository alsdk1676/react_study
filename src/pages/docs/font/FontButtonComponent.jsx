import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../../../modules/count';

const FontButtonComponent = () => {
  const fontSize = useSelector((state) => state.fontSize)
  const dispatch = useDispatch();

  const [result, setResult] = useState("재미있는 리덕스 수업!");
  const onClickToFontSize = (e) => {
    console.log(e)
  }

  return (
    <div>
      <p onChange={onClickToFontSize}>{result}</p>
      <button onClick={(e) => { dispatch(decrease(console.log(e))) }}>2rem으로 변경하기</button>
      <button onClick={(e) => { console.log(e)}}>5rem으로 변경하기</button>
    </div>
  );
};

export default FontButtonComponent;