// 사용자에게 12개월 중 좋아하는 월의 정보를 입력받으세요.

// 사용자가 입력한 값이 12월~2월이라면 : 스키의 계절, 겨울을 좋아하시네요.
// 사용자가 입력한 값이 3월~5월이라면 : 책 일기 좋은, 봄을 좋아하시네요.
// 사용자가 입력한 값이 6월~8월이라면 : 여행가기 좋은, 여름을 좋아하시네요.
// 사용자가 입력한 값이 9월~11월이라면 : 선선한 날씨인, 가을을 좋아하시네요.

// if 조건문을 활용해서 코드 작성

let favoriteMonth = prompt("당신이 좋아하는 월을 알려주세요.");

if (favoriteMonth !== "" || favoriteMonth !== null) {
  favoriteMonth = parseInt(favoriteMonth);
  if (3 <= favoriteMonth && favoriteMonth <= 5) {
    alert("책 읽기 좋은, 봄을 좋아하시네요.");
  } else if (6 <= favoriteMonth && favoriteMonth <= 8) {
    alert("여행가기 좋은, 여름을 좋아하시네요.");
  } else if (9 <= favoriteMonth && favoriteMonth <= 11) {
    alert("선선한 날씨인, 가을을 좋아하시네요.");
  } else if (
    isNaN(favoriteMonth) ||
    0 === favoriteMonth ||
    13 <= favoriteMonth
  ) {
    alert("정상적인 월을 입력하세요.");
  } else {
    alert("스키의 계절, 겨울을 좋아하시네요.");
  }
}

window.location.reload();
