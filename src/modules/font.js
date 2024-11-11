import { createAction, handleActions } from 'redux-actions';

// type 생성
const INCREASE = 'font/increase'
const DECREASE = 'font/decrease'

// action 생성
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// initialState 초기값 생성
const initialState = {
  fontSize : "1rem",
  inputFontSize : "1rem"
}
// reducer 생성
const font = handleActions({
  [INCREASE] : (state, action) => ({ fontSize : "5rem"}),
  [DECREASE] : (state, action) => ({ fontSize : "2rem"})
}, initialState) // initialState : 초기값

// reducer 내보내기
export default font;