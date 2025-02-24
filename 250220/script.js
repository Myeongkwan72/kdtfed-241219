/*
regExp = Regular Expression = 정규표현식
문자열 + 정규표현식 + 배열

1. 패턴 : 찾고자 하는 문자의 형식을 하나의 정형화된 형태로 정의
2. 플래그 : 위에서 정의한 패턴의 값을 찾고자 할 때, 추가적인 옵션 적용
3. 클래스 : 패턴 내 부가적인 정보를 적용하고자 할 때, 사용할 수 있는 요소
*/

/* 
1. test() : 정규표현식의 패턴과 일치하는지 여부를 논리형 값으로 보여주는 함수
2. match() : 정규표현식의 패턴과 일치하는 값을 찾아주는 함수
3. replace() : 문자열 가운데 정규표현식 패턴과 일치하는 문자열을 찾아서 
새로운 문자열로 대체해주는 함수
*/

/*
정규표현식의 주요 플래그
1. i : international의 약어 - 영문의 대소문자를 구별하지 않고 문자열을 찾을 때
2. g : 문자열 가운데 사전에 정의한 패턴과 일치하는 모든 요소를 찾아오고 싶을 때
만약 g를 사용하지 않는다면, 좌측부터 시작되는 문자열 가운데 가장 먼저 찾아낸 요소만 반환
3. m : 문자열의 행이 바뀌어도 검색 가능

정규표현식의 주요 클래스
1. \d : 0~9 사이의 숫자
2. \D : 숫자가 아닌 모든 문자
3. \s : 공백, 탭, 줄바꿈
4. \S : 공백이 아닌 모든 문자
5. \w : 단어에 들어가는 개별 문자
6. \W : 단어에 들어가지 않는 모든 문자

정규표현식의 특수문자
1. ^ : 특정 문자로 시작하는 문자열
2. $ : 특정 문자로 끝나는 문자열

정규표현식의 범위 설정
1. [] : 해당 범위에 속하는 값들을 찾아서 배열의 형태로 반환

정규표현식의 반복 검색
1. {} : 반복하고자 하는 횟수
*/

// const regexp = new RegExp(/\d{3}/);

// console.log(regexp.test("hi"));
// console.log(regexp.test("123"));

// const str = "ES2025 is powerful";
// const pattern = /ES2025/;

// console.log(str.match(/ES6/));
// console.log(str.match(pattern));
// console.log(str.replace(pattern, "Love"));

// const str = "Love is Power777!";

// const pattern = /love/i;

// console.log(pattern.test(str));

// const pattern = /Power\d{3}/;

// console.log(str.match(pattern));

// const hello = "ehllo, everyone.";

// const pattern = /^H/i;

// console.log(pattern.test(hello));

// const str = "ES2025";

// ^ 이 [] 안에 들어가면 범위 내의 값을 부정함
// console.log(str.match(/[^0-9]/g));

// const str = "Ooooooooooops";

// console.log(str.match(/o{2,5}/i));

const number = /^[0-9]+$/;

const positive = /^[1-9]\d+$/;

const negative = /^\-[1-9]\d*$/;

const engWord = /^[a-zA-z]*$/;

const engAndWord = /^[a-zA-Z0-9]+$/;

const korword = /^[가.힣]*$/;

const korAndEng = /^[가.힣a-zA-Z]+$/;
