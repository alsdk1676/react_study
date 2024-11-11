import React, { useContext, useState } from 'react';
import { AnimalsContext } from './AnimalsContext';
import Animal from './Animal'

// Context에 저장된 동물 세 마리를 버튼으로 출력
// input에 동물 입력 후 엔터 : 동물 버튼 추가 (context 메서드 insert 사용)
// 동물 버튼을 클릭하면 해당 버튼을 삭제 (context 메서드 remove 사용)
const Animals = () => {
  const { state, actions } = useContext(AnimalsContext);
  const [inputValue, setInputvalue] = useState();
  const onChangeInputValue = (e) => {
    setInputvalue(e.target.value);
  }

  const onKeyDownAddAnimal = (e) => {
    console.log(e)
    if(e.key === 'Enter'){
      actions.insert(inputValue)
    }
  }

  const animalList = state.animals.map((animal, i) => {
    <li key={i}><button onClick={() => { actions.remove(i) }}>{animal}</button></li>
  })
  // console.log(useContext(AnimalsContext))
  console.log(state.animals)
  console.log(actions)

  // animal로 state와 action을 넘겨서 리스트로 화면에 출력하기
  return (
    <ul>
      {/* {state.animals.map((animal, i) => {
        <li key={i}>
          <button onClick={() => { actions.remove(i) }}>{animal}</button>
        </li>
      })}  */}
      <input type="text" onChange={onChangeInputValue} onKeyDown={onKeyDownAddAnimal} />
      <Animal state={state} actions={actions} />
      {/* {animalList} */}
    </ul>
  );
};

export default Animals;