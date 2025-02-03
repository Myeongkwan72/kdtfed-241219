// 자바 스크립트 코드 작성 혹은 생성 => 컴퓨터 메모리 공간 생성 => 객체 생성 => 실행 컨텍스트 (execution context) 생성

// execution context : 개발자가 현재 작성 혹은 생성 변수(식별자)가 어떤 것이 있는지, 실행시켜야 할 함수는 무엇인지 등의 정보를 저장 / 어떤 코드를 먼저 실행해야 하는가에 대한 우선순위를 결정하기 위한 목적

// 자바스크립트 코드가 어떤 곳에서 어떤 방식으로 실행되는지 이해

// 컴퓨터 > stack
// stack = 선입후출 구조
// queue = 선입선출 구조

// Call Stack : 자바스크립트 명령문을 처리하는 공간
// VariableEnvironment : 환경변수 / 현재 실행 컨텍스트 내 변수명, 함수 정보, 특정 함수가 실행 혹은 호출되는 순간 해당 함수를 스냅샷의 형태로 저장

// SnapShot : 일시정지 사진

// Lexical : 사전적인 = "사전"답사

// LexicalEnvironment : 초기에는 VariableEnvironment와 동일한 값으로 시작하지만, 특정 함수를 호출하면 해당 함수가 실시간 처리를 하고 있는 상태로 반영

// environmentRecord : 실행하고자 하는 코드 내부에 저장된 정보를 가지고 있음

//outer-EnvironmentReference : 살행하고자 하는 코드가 외부의 영향을 받고 있는지, 받고 있다면 누구의 영향을 받는지를 확인할 수 있는 정보값을 가지고 있음

// ThisBinding : 현재 변수 || 식별자가 가리켜야 하는 객체가 무엇인지에 대한 정보값을 가지고 있음

// let a = 1;
// function outer() {
//   function inner() {
//     console.log(a);
//     // 1
//     a = 3;
//   }
//   inner();
//   console.log(a);
//   // 3
// }

// outer();
// console.log(a);
// // 3

// 아우터 > 이너 > a값의 역순인 1 > 3 > 3 순으로 출력 (선입후출)

// function a() {
//   let x = 1;
//   console.log(x);
//   x;
//   console.log(x);
//   x = 2;
//   console.log(x);
// }

// a();

//

// function a() {
//   let x;
//   x = 1;
//   console.log(x);
//   x;
//   console.log(x);
//   x = 2;
//   console.log(x);
// }

// hoisting :

// function a() {
//   let x;
//   x;

//   x = 1;
//   console.log(x);
//   console.log(x);
//   x = 2;
//   console.log(x);
//   // 2
// }

// function a() {
//   console.log(b);
//   b = "bbb";

//   console.log(b);
//   function b() {}

//   console.log(b);
// }

// a();

//

function a() {
  let b;
  b = function b() {};

  console.log(b);
  b = "bbb";
  console.log(b);
  console.log(b);
}

a();
