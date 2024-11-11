import React from 'react';
import Food from './Food';

// FoodContainer에서 foods, style 받음
const Foods = ({foods, style}) => {
  return (
    <div>
      {/* {foods.map((food, i) => <li>{food.name}</li>)} */}
      {/* Component로 나누고 싶어서 */}
      {foods.map((food, i) => <Food key={i} food={food} style={style} />)}
    </div>
  );
};

export default Foods;