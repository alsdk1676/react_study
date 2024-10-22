import React from 'react';

// const Food = (props) => {
  //   const { name } = props;
  //   return (
    //   <li>
    //     {name}
    //   </li>
    // )
    // }
const Food = ({food, style}) => {
  // const { name } = props;
  return (
    // <li style={style}>{food.name}</li>
    <li style={style}>{food.name}</li>
  );
}
export default Food;