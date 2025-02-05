let num01 = parseInt(prompt("100 이하의 숫자 a를 입력해주세요"));
let num02 = parseInt(prompt("100 이하의 숫자 b를 입력해주세요"));
let num03 = parseInt(prompt("100 이하의 숫자 c를 입력해주세요"));

if (!isNaN(num01)) {
  if (num01 !== 0 && num01 < num02 && num01 < num03) {
    alert(`셋 중에서 가장 작은 숫자는 ${num01}입니다.`);
  } else if (num01 <= 0 || num01 > 100) {
    alert("100 이하의 숫자로 다시 입력해주세요.");
    location.reload();
  } else if (num02 !== 0 && num02 < num01 && num02 < num03) {
    alert(`셋 중에서 가장 작은 숫자는 ${num02}입니다.`);
  } else if (num02 <= 0 || num02 > 100) {
    alert("100 이하의 숫자로 다시 입력해주세요.");
    location.reload();
  } else if (num03 !== 0 && num03 < num01 && num03 < num02) {
    alert(`셋 중에서 가장 작은 숫자는 ${num03}입니다.`);
  } else if (num03 <= 0 || num03 > 100) {
    alert("100 이하의 숫자로 다시 입력해주세요.");
    location.reload();
  }
} else {
  alert("숫자가 아닙니다.");
  location.reload();
}
