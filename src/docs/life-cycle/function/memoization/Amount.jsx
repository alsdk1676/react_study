import React from 'react';

const Amount = ({
  divStyle,
  pStyle,
  buttonStyle,
  props,
  onClickToAddAmount,
  onClickToSubtractAmount,
  onClickToAddCoupon,
  onClickToSubtractCoupon
 }) => {
  console.log("자식(Amount) 랜더링")
  const {amount, coupon} = props;

  return (
    <div style={divStyle}>
      <button stype={buttonStyle} onClick={onClickToSubtractAmount}>-</button>
      <p style={pStyle}>수량 : {amount} </p>
      <button stype={buttonStyle} onClick={onClickToAddAmount}>+</button>
      <button stype={buttonStyle} onClick={onClickToSubtractCoupon}>-</button>
      <p style={pStyle}>쿠폰 : {coupon}</p>
      <button stype={buttonStyle} onClick={onClickToAddCoupon}>+</button>
    </div>
  );
};

export default Amount;