import React from 'react';

const Foods = ({foods, style}) => {
  return (
    <div>
      {foods.map((food, i) => <Food key={i} food={food} style={style}/>)}
    </div>
  );
};

export default Foods;