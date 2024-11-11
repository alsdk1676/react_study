import React from 'react';

// const Food = (props) => {

  // name을 props에서 key으로 사용
  //   const { name } = props;

  //   return (
    //   <li>
    // name 뿌려주기 =>  라면, 피자, 쌀국수, 치킨, 떡볶이
    //     {name}
    //   </li>
    // )
    // }

// Foods에서 받아오기
// 객체이기 때문에 받아올 때 { }로 받아오기
 const Food = ({food, style}) => {
  // const { name } = props;
  return (
    <li style={style}>{food.name}</li>
  );
}
export default Food;