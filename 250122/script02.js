// 사용자에게 숫자를 입력 받아서
// 해당 숫자가 소수인지를 판별

const number = parseInt(prompt("숫자를 입력해주세요."));
let isPrime;

if (!isNaN(number)) {
  if (number === 0 || number === 1) {
    alert(`${number}(은)는 소수도 합성수도 아닙니다.`);
    location.reload();
  } else if (number === 2) {
    isPrime = true;
    alert(`${number}는 소수입니다.`);
  } else {
    for (let i = 2; i < number; i++) {
      if (number % 1 === 0) {
        isPrime = false;
        break;
      } else {
        isPrime = true;
      }
    }
  }
} else {
  alert("숫자가 아닙니다.");
  location.reload();
}

if (isPrime) {
  alert(`${number}는 소수입니다.`);
} else {
  alert(`${number}는 소수가 아닙니다.`);
}
