import React, { useCallback, useMemo, useState } from 'react';
import Amount from './Amount';

const ProductContainer = () => {
  console.log("부모(Product) 랜더링🧑‍🍳")

  const containerStyle = {
    width : "500px",
    height : "300px",
    margin : "20px auto"
  };

  const productStyle = {
    border : "1px solid lightgray",
    padding : "30px",
    lineHeignt : "1.3"
  };

  const divStyle = {
    border : "1px solid blue",
    height : "60px",
    display : "flex",
    justifyContent : "space-evenly",
    alighItems : "center",
    marginTop : "20px",
    padding : "20px"
  };

  const pStyle = { lineHeignt : 0 };
  const buttonStyle = { width : "40px", height : "40px"} ;

  const [like, setLike] = useState(0);
  const [amount, setAmount] = useState(1); // 캐시에 들어간 초기값 : 1
  const [coupon, setCoupon] = useState(0);
  // const props = { amount : amount, coupon : coupon };

  // const props = useMemo(() => {
  //   console.log("값이 변화됨")
  //   return { amount : amount, coupon : coupon };
  // }, [amount, coupon]) // [amount] : amount 값 변경
  const amountMemo = useMemo(() => {
    console.log("amout 연산"); return amount;
  }, [amount])
  const couponMemo = useMemo(() => {
    console.log("coupon 연산"); return coupon;
  }, [coupon])

  const props = {amount : amountMemo, coupon : couponMemo}

  // useCallback 
  const onClickToAddAmount = useCallback(() => { setAmount(amount + 1) }, [amount]);
  const onClickToSubtractAmount = useCallback(() => { setAmount(amount - 1) }, [amount]);
  const onClickToAddCoupon = useCallback(() => { setCoupon(coupon + 1)}, [coupon]);
  const onClickToSubtractCoupon = useCallback(() => { setCoupon(coupon - 1)}, [coupon]);
  // const onClickToAddAmount = () => { setAmount(amount + 1) };
  // const onClickToSubtractAmount = () => { setAmount(amount - 1) };
  // const onClickToAddCoupon = () => { setCoupon(coupon + 1) };
  // const onClickToSubtractCoupon = () => { setCoupon(coupon - 1) };

  return (
    <div style={containerStyle}>
      <div style={productStyle}>
        <p>[책] 재용이가 알려주는 건물 하나 사서 팔아서 부자되기</p>
        <button onClick={() => {setLike(like + 1)}}>좋아요 {like}</button>
        <Amount
        divStyle={divStyle}
        pStyle={pStyle}
        buttonStyle={buttonStyle}
        props={props}
        onClickToAddAmount={onClickToAddAmount}
        onClickToSubtractAmount={onClickToSubtractAmount}
        onClickToAddCoupon={onClickToAddCoupon}
        onClickToSubtractCoupon={onClickToSubtractCoupon} />
      </div>
    </div>
  );
};

export default ProductContainer;