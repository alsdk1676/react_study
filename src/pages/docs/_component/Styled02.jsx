import React from 'react';
import S from '../style'

const Styled02 = () => {
  // strong, p
  // strong : 컴포넌트를 정의할 때 props로 글자 크기를 30px로 지정
  // p : 컴포넌트를 정의할 때 props로 폰트 굵기는 bold로, 컬러를 orange로 지정
  return (
    <div>
      <S.Strong fontSize={"30px"}>Strong 태그</S.Strong>
      <S.P fontWeight={"bold"} color={"orange"}>P 태그</S.P>
    </div>
  );
};

export default Styled02;