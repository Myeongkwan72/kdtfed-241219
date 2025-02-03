// setTimeout(() => {
//   let coffeeName = "에스프레소";
//   console.log(coffeeName);
//   setTimeout(() => {
//     coffeeName = "아메리카노";
//     console.log(coffeeName);
//     setTimeout(() => {
//       coffeeName = "카페라떼";
//       console.log(coffeeName);
//       setTimeout(() => {
//         coffeeName = "카페모카";
//         console.log(coffeeName);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

//----------------//

// let coffeName = "";

// const addMocha = (name) => {
//   coffeName += `,${name}`;
//   console.log(coffeName);
// };

// const addLatte = (name) => {
//   coffeName += `,${name}`;
//   console.log(coffeName);
//   setTimeout(addMocha, 2000, "카페모카");
// };

// const addAmericano = (name) => {
//   coffeName += `,${name}`;
//   console.log(coffeName);
//   setTimeout(addLatte, 2000, "카페라떼");
// };

// const addEspresso = (name) => {
//   coffeName += name;
//   console.log(coffeName);
//   setTimeout(addAmericano, 2000, "아메리카노");
// };

// setTimeout(addEspresso, 2000, "에스프레소");

//--------------//

// 약속
// 데이터를 가져올 때 문제가 없으면 A 출력
// 데이터를 가져올 때 문제가 생기면 B 출력
// 약속한 실행문을 지켜보다가 나중에 실행

const addCoffee = (name) => {
  return (prevName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let newName = prevName ? prevName + ", " + name : name;
        console.log(newName);
        resolve(newName);
      }, 2000);
    });
  };
};

addCoffee("에스프레소")()
  .then(addCoffee("아메리카노"))
  .then(addCoffee("카페라떼"))
  .then(addCoffee("카페모카"));

// const arr = [1, 2, 3, 4];
// console.log(typeof arr);

// const arr1 = new Array();
// console.log(typeof arr1);

// arr1[0] = 1;
// arr1[1] = 2;

// console.log(arr1);
