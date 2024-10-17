import React from 'react';

const FoodContainer = () => {

  const foods = [
    { id : 1, name : "라면"},
    { id : 2, name : "피자"},
    { id : 3, name : "쌀국수"},
    { id : 4, name : "치킨"},
    { id : 5, name : "떡볶이"},
  ]

  const style = {
    listStyle : "none",
  }

  return (
    // <ul>
    //   {/* {foods.map((food) => food.name)} */}
    //   {/* {foods.map((food, i) => <li key={i}>{food.name}</li>)}  */}
    //   {/* {foods.map({name}) => Food name={name}} */}
    //   {/* 순서없기 떄문에 li태그 사용, 번호(인덱스 i)를 주지않으면 다 찾아야됨 */}
    // </ul>
    <Foods foods={foods} style={style}/>
  );
};

export default FoodContainer;