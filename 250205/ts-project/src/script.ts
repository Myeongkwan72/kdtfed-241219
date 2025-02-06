/* 
1. 타입 종류

1) 원시 타입
- nunmber
- string
- boolean
- undefined
- null

2. 타입 주석
- 변수명 오른쪽 : 타입 기입

3. 타입 추론
- 해당 변수에 입력된 값의 타입을 추론
> 추론된 타입에 맞는 값만 입력 가능

4. literal 타입

5. 참조 타입
- 배열
- 객체
- 튜플 : 배열을 최초 선언했을 때, 

6. generic 타입
- 

*/

const numArr01: number[] = [1, 2, 3];
const numArr02: Array<number> = [1, 2, 3];

const strArr01: string[] = ["hello", "world"];
const strArr02: Array<string> = ["hello", "world"];

const boolArr01: boolean[] = [true, false];
const boolArr02: Array<boolean> = [true, false];

let multiArr01: (Number | string)[] = [1, "hello"];
const multiArr02: Array<Number | string> = [1, "hello"];

const doubleArr01: number[][] = [[1, 2, 3], [4, 5], [6]];
const doubleArr02: Array<Array<number>> = [[1, 2, 3], [4, 5], [6]];

const tup01: [number, number] = [1, 2];
const tup02: Array<Number | Number> = [1, 2];

multiArr01 = [1, "1"];
