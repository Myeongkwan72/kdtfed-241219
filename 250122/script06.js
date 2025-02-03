// const fruits = ["apple", "banana", "grape"];

// console.log(fruits);

// 전개연산자 = Spread Operator
// console.log(...fruits);

// const addNum = (...numbers) => {
//   let sum = 0;
//   numbers.forEach((number) => {
//     sum += number;
//   });

//   return sum;
// };

// console.log(addNum(1, 3, 5, 7));

const displayFavorite = (first, ...fruits) => {
  const str = `My Favorite Fruit is ${first}.`;
  return str;
};

displayFavorite("Apple", "Banana", "Cherry");
