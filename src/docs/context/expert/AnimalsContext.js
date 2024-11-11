import React, { useState } from 'react';

// 컨텍스트 생성 및 초기화
const AnimalsContext = React.createContext({
  state : { animals : [] },
  action : { insert : () => {}, remove : () => {}}
});

// Provider 생성
// animals 리스트 초기값 ["누렁이", "야옹이", "점박이"]
const AnimalsProvider = ({children}) => {
  const [animals, setAnimals] = useState("누렁이", "야옹이", "점박이");

  const insert = (animal) => { setAnimals(animals.concat(animal)) };
  // const remove = (i) => { animals.filter((animal, index) => i != index)};
  const remove = (i) => { setAnimals(animals.filter((animal, index) => i != index)) };
  // 비교하기 위해 i, index 이름만 바꿔주기

  const value = {
    // state : { animals : [] },
    state : { animals : animals },
    action : { insert : insert, remove : remove }
  }

  return (
    <AnimalsContext.Provider value={value}>
      {children}
    </AnimalsContext.Provider>
  )
}

export { AnimalsContext, AnimalsProvider } ;

// useContext를 사용하므로 consumer는 필요 없다.
// 버튼을 눌렀을 때 삭제하는 remove라는 메서드 생성
// 화면에서 동물을 입력 받았을 때 추가하는 insert라는 메서드 생성