import React from 'react';
import Button from './style';

// 매개변를 받을 때 개수가 몇 개 들어올 지 모르는 경우 : ...rest
// const BasicButton = ({variant, shape, size, border, color, font, children}) => {
// variant, shape, size, border, color, font
const BasicButton = ({children, ...rest}) => {
  return (
    // <Button
    //   variant={variant}
    //   shape={shape}
    //   size={size}
    //   border={border}
    //   color={color}
    //   font={font}
    // >{children}</Button>      
    <Button {...rest}>{children}</Button>
  );
};

export default BasicButton;