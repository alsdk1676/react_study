import React, { useState } from 'react';

const User = ({user}) => {
  console.log(user)
  const {id, age, name, phone, address} = user; 

  // Users의 Props를 받아서 아래 내용들을 실습
  // 1) 유저의 데이터 중 경기도에 거주하는 사람의 데이터만 태그로 출력
  // console.log(address.includes("경기도")) => true, false
  // const userAddress = address.includes("경기도") ? (
  //   <li>
  //     <p>아이디 : {id}</p>
  //     <p>이름 : {name}</p>
  //     <p>나이 : {age}</p>
  //     <p>전화번호 : {id}</p>
  //     <p>주소 : {address}</p>
  //   </li>
  // ) : (<></>);
  
  // return (
  //   <ul>
  //     {userAddress}
  //   </ul>
  // );

  // 2) 유저의 데이터 중 나이가 20보다 큰 사람의 정보를 화면에 태그로 출력
  // const userAge = age > 20 ? (
  //   <li>
  //     <p>아이디 : {id}</p>
  //     <p>이름 : {name}</p>
  //     <p>나이 : {age}</p>
  //     <p>전화번호 : {id}</p>
  //     <p>주소 : {address}</p>
  //   </li>
  // ) : (<></>);
  
  // return (
  //   <ul>
  //     {userAge}
  //   </ul>
  // );

  // 3) 강남구의 사는 사람의 이름을 태그로 출력
  // const userName = address.includes("강남구") ? (
  //   <p>이름 : {name}</p>
  // ) : (<></>);

  // return(
  //   <ul>
  //     {userName}
  //   </ul>
  // )

  // 4) 모든 핸드폰 번호를 010-1234-5678로 변경해서 태그로 출력

  const [userPhone, setUserPhone] = useState(phone); // phone을 변경할 수 있는 건 useState

  const onclickToPhoneNumber = () => {
    setUserPhone("010-1234-5678")
  }


  return (
    <ul>
      {userPhone}
      <button onClick={onclickToPhoneNumber}>번호 변경</button>
    </ul>
  );
};
// 5) 장보고의 주소를 서울시 중랑구로 변경해서 태그로 출력

export default User;