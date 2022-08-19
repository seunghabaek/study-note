describe("pow", function () {
  describe("x를 세 번 곱합니다", function () {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x}를 세 번 곱하면 ${expected}가 됩니다.`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  describe("x를 네 번 곱합니다", function () {
    function makeTest(x) {
      let expected = x * x * x * x;
      it(`${x}를 네 번 곱하면 ${expected}가 됩니다.`, function () {
        assert.equal(pow(x, 4), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  it("n이 음수일 때 결과는 NaN입니다.", function () {
    assert.isNaN(pow(2, -1));
  });

  it("n이 정수가 아닐 때 결과는 NaN입니다.", function () {
    assert.isNaN(pow(2, 1.4));
  });
});

let music = ["Jazz", "Blues"];

// 배열 뒤에 "Rock-n-Roll" 추가
music.push("Rock-n-Roll");
// 배열 정중앙의 요소를 "Classics"로 변경
music[Math.floor((music.length - 1) / 2)];
// "Rap"와 "Raggae" 를 배열의 앞에 추가
music.unshift("Rap", "Raggae");

const sumInput = () => {
  let numbers = [];

  while (true) {
    let value = prompt("숫자를 입력해주세요", "");

    if (value === "" || value === null || isFinite(value)) break;
    numbers.push(+value);
  }

  let sum = 0;
  for (number of numbers) {
    sum += number;
  }
  return sum;
};

alert(sumInput());

let dashStyle = ["background-color", "list-style-image", "-webkit-transition"];
