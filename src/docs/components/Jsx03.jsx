// 실습
// name과 message를 넣어서 랜더링하기
// name : 이름, message : 환영합니다

const Jsx03 = () => {
  // 컴포넌트에서 사용되는 변수는 지역 변수로!
  const name = "서민아";
  const message = "환영합니다🤗";

  return (
    <>
      저의 이름은 {name} <br />
      <p style={{color : "red"}}>{message}</p>
      {/* key : value 형태로 집어넣기 */}
    </>
  )
}
  export default Jsx03;
