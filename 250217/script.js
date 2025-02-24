// const str = "hello";

// console.log(typeof str);

// const str = "good morning!";

// console.log(str.length);
// console.log(str.charAt(3));

const string = prompt("문자열을 입력해주세요.");
const letter = prompt("어떤 문자를 체크할까요?");

const counting = (string, letter) => {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    lf(string.charAt(i) === letter);
    count = +1;
  }
  return count;
};

const result = counting(string, letter);
document.write(`${string}에는 ${letter}가 ${result}개 있습니다.`);
