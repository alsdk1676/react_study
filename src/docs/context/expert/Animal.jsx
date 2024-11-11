import React from 'react';

// animal로 state와 action을 넘겨서 리스트로 화면에 출력하기
const Animal = ({state, actions}) => {
  const { animals } = state;
  const { remove, insert } = actions;
  const animalList = animals.map((animal, i) => (
    <li key={i}>
      <button onClick={() => { remove(i) }}>{animal}</button>
    </li>
  ))
  return (
    <div>
      {animalList}
    </div>
  );
};

export default Animal;