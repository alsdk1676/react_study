import React, { useRef, useState } from 'react';

const Name2 = () => {
  // 사용자가 입력한 이름을 p태그에 실시간으로 작성하고
  // 버튼을 클릭하면 이름 뒤에 "님"이 붙도록 구현
  // 입력 후 엔터를 누르면 p태그에 반영

  const [result, setResult] = useState("");
  const inputRef = useRef();
  const onChangeToInput = (e) => {
    // console.log(e)
    setResult(e.target.value)
  }

  const onClickToSorryButton = () => {
    setResult(result + "님")
    // console.log(inputRef.current.value)
    setResult(inputRef.current.value.replaceAll("님", "") + "님")
  }

  return (
    <div>
      <p>{result}</p>
      {/* key값을 비교할 때는 keyevent에서 가져오기!! */}
      <input ref={inputRef} value={result} type="text" onChange={onChangeToInput} onKeyDown={(e) => { console.log(e) }} />
      {/* value={result} : input에 작성하는 결과랑 출력되는 결과 같음 */}
      <button onClick={onClickToSorryButton}>모르겠어요 버튼</button>
    </div>
  );
};

export default Name2;