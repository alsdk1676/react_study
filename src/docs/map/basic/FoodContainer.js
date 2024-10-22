import React from 'react';
import Food from './Food';
import Foods from './Foods';

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
    <Foods foods={foods} style={style} />
    // <div>
    //   {foods.map((food) => food.name)}
    // </div> 
    // <ul>
    //   {/* {foods.map((food) => <li>{food.name}</li>)}  */}
    //   {/* 순서없기 떄문에 li태그 사용, 번호(인덱스 i)를 주지않으면 처음부터 끝까지 다 찾아야됨 */}
    // </ul>  
    // <ul>
    //   {foods.map((food, i) => <li key={i}>{food.name}</li>)}
    // </ul>
    // <ul>
    //   {foods.map((food, i) => <Food food={food} />)}
    //   이름만 필요한 경우
    //   {foods.map((name, i) => <Food key={i} name={name} />)}
    // </ul>
  );
};

export default FoodContainer;