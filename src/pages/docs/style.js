import styled from 'styled-components';
import { boxStyle, flexCenter, flexCenterColumn } from '../../global/common';
import { fadeIn } from '../../styles/keyframes';

const S = {};

// const StyledDiv = styled.div`
  S.StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  border: solid 1px #333;
  `;

// 백틱 -> js문법

// const StyledButton = styled.button`
S.StyledButton = styled.button`
  /* background-color: orange; */
  background-color: ${(props) => props.backgroundColor}; 
  // props.backgroundColor : return 값 blue (key로 가져옴)
  border: none;
`

S.Input = styled.input`
  width: 200px;
  height: 200px;
  border: solid 1px green;
  color: ${(props) => props.color};
`;

S.Strong = styled.strong`
  /* font-size: ${(props) => props.fontSize}; */
  font-size: ${({fontSize}) => fontSize};
`;

S.P = styled.p`
  font-weight: ${(props) => props.fontWeight};
  /* font-weight: ${(props) => props?.fontWeight}; */
  color : ${(props) => props.color};
  /* color : ${(props) => props && props.color}; */
  `;

S.Wrap = styled.div`
  ${flexCenterColumn}
  
  & span { /* & : 자기 자신을 선택택 */
    color: green;
  }
  
  & button {
    width: 100%;
  }
` /* ``안에서 자식 요소 선택하기 */

S.Box = styled.div`
  ${boxStyle}
  ${flexCenter}

  p {
    /* 테마가 정의한 폰트로 폰트 크기를 정의 */
    font-size: ${({theme}) => theme.FONT_SIZE["h1"]};
    /* font-size: 25px; */
    font-weight: 900;
    animation: ${fadeIn} 1s forwards ease-in;
  }
`

// export { StyledDiv, StyledButton }
export default S;