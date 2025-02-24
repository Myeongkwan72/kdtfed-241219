const string = prompt("영문 소문자로 된 문자열을 입력해주세요.");

// const firstCh = string[0].toUpperCase();
// const remainStr = string.slice(1);
// const result = firstCh + remainStr;

// split() : 문자열을 배열로 변환
// join() : 배열을 문자열로 변환

// concat() : 서로 다른 2개의 배열 혹은 유사배열을 1개의 배열로 병합

const result = [string[0].toUpperCase(), ...string.slice(1)].join("");
document.write(result);
