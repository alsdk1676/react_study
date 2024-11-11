import React, { useContext } from 'react';
import { FontSizeConsumer, FontSizeContext } from './FontContext';

// p태그의 폰트사이즈를 context의 기본 폰트사이즈로 지정하고
// 버튼을 누르면 0.5rem으로 작아지게 만든다.
const FontSizeComponent = () => {
  // const onClickToChangeFontSize = () = > {}
  const {state, action} = useContext(FontSizeContext);
  return (
    <FontSizeConsumer>
      {(context) => (
        <>
          {/* <p style={{fontSize : context.state.fontSize}}>중간 ChildContainer입니다!🤔</p> */}
          <p style={{fontSize : state.fontSize}}>중간 ChildContainer입니다!🤔</p>
          {/* <button onClick={() => { context.action.setFontSize("0.3rem") }}>작아져라!😁</button> */}
          <button onClick={() => { action.setFontSize("0.3rem") }}>작아져라!😁</button>
        </>
      )}
    </FontSizeConsumer>
  );
};

export default FontSizeComponent;