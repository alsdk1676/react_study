import React from 'react';
// import { useRef } from 'react';

const Check = () => {

  const inputRef = useRef([]);

  const onClickToCheck = () => {
    // 빈 값 검사하기
    for(let input of inputRef.current){
      if(!input.value){
        alert(`${input.name}을 입력하세요`);
        return;
      }
    }
    formRef.current.submit();
    // console.log(inputRef)
  }

  return (
    <div>
      <form>
        <div>
          <span>아이디</span>

          <input type="text" name="id" ref={(element) => { inputRef.current[0] = element }} />
          </div>
          <div>
          <span>비밀번호</span>
          <input type="text" name="password" ref={(element) => {inputRef.current[1] = element }} />
          {/* <input type="text" name="password" ref={(element(s)) => {inputRef.current[1]}*/} {/* current는 console창에서 확인 */}
          </div>
          <button onclick={onClickToCheck} type='button'>전송</button>
      </form>
    </div>
  );
};

export default Check;