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
});