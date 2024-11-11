import { useRef } from "react";

const Check = () => {

  const inputRef = useRef([]);
  const formRef = useRef();

  const onClickToCheck = () => {
    // console.log(inputRef)
    // 빈 값 검사하기

    // 배열이기 때문에 반복문 돌려서 확인하기 (빠른 for문 사용함)
    for(let input of inputRef.current){
      // console.log(input);
      if(!input.value){
        // console.error(`${input.name} 를 입력하세요`);
        alert(`${input.name} 를 입력하세요`);
        return;  
      }
    }
    formRef.current.submit();
  }

  return (
    <div>
      <form ref={formRef}>
        <div>
          <span>아이디</span>
          {/* ref={} : {}안에 함수 넣을 수 있음 */}
          {/* element = <input type="text" name="id".. */}
          {/* inputRef.current[0]에 element 넣기 */}
          <input type="text" name="id" ref={(element) => { inputRef.current[0] = element }} />
        </div>
        <div>
          <span>비밀번호</span>
          <input type="text" name="password" ref={(element) => { inputRef.current[1] = element }} />
        </div>
        <button onClick={onClickToCheck} type='button'>전송</button>
      </form>
    </div>
  );
};

export default Check;