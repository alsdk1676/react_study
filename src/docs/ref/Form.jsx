import React from 'react';

const Form = () => {
  // CheckInput에서 Props로 전달받은 함수와 스타일을 적용하여 화면 값 유효성 검사
  return (
    <form>
      <input type="text" name="email"/>
      <input type="text" name="password"/>
      <input type="text" name="name"/>
      <input type="text" name="age"/>



    </form>
  );
};

export default Form;