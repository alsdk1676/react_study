import React from 'react';

const Component2 = (props) => {
  console.log(props)
  props.printName("서민아");
  return (
    <div>
      {props.children} {/* 태그를 키값으로 전달 */}

    </div>
  );
};

export default Component2;