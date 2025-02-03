// 화씨 온도를 섭씨 온도로 변환해서 정보 제공

// 화씨 온도는 window라는 화면을 통해 전달받음

// 전달받은 화씨 온도를 어떻게 섭씨 온도로 변환시킬 것인가?

// BOM : Browser Object Model

const fah = prompt("당신이 변환할 화씨 온도를 입력하세요.");
const cel = ((fah - 32) / 1.8).toFixed(1);

alert(`화씨 온도 ${fah}는 섭씨 온도 ${cel}입니다.`);
