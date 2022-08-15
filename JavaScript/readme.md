## 연산자

AND -> &
OR -> |
XOR -> ^
NOT -> ~
LEFT SHIFT -> <<
RIGHT SHIFT -> >>
no sign RIGHT SHIFT -> >>>

## if와 ?를 이용한 조건처리

조건에 따라 다른 행동을 해야할 때 "?"와 함께 사용 가능

'''
let accessAllowed;
let age = prompt('나이를 입력해 주세요.','');

if(age > 18) {
aaaccessAllowed = true;
} else {
accessAllowed = false;
}
'''

와 같은 조건문을 다음과 같이 변형 가능.

'''
let accessAllowed = (age > 18) ? true : false
'''

이러한 "?"는 다중으로 사용이 가능하다.

'''
let age = prompt('나이를 입력해주세요.','');

let message = (age < 3) ? 'hello baby' :
(age < 18) ? 'hello' :
(age < 100) ? 'congraturations!' :
'you are too old, or invalid value!'

alert(message);
'''

const message = (login == '직원') ? '안녕하세요' :
(login == '임원') ? '환영합니다.' :
(login == '') ? '로그인이 필요합니다.' : '';

## 논리 연산자

||(OR), &&(AND), !(NOT)

JavaScript에서만 제공하는 논리연산자의 특별한 부가 기능

1. ||(OR)
   : "첫번째 true인 값 찾기", 만약 없다면, 마지막 값 반환

'''
const result = value1 || value2 || value3
'''
왼쪽부터 차례대로 진행하면서 가장 "먼저" true가 나오는 값의 value를 반환

2. &&(AND)
   : "첫번째 false인 값 찾기", 만약 없다면, 마지막 값 반환

'''
const result = value1 && value2 && value3
'''
왼쪽부터 차례데로 진행하면서 가장 "먼저" false가 나오는 값의 value를 반환

- &&의 우선순위는 ||보다 높음.

let a = prompt('숫자를 입력하세요.', '');

## 함수

함수 이름 짓기 convention

- "get...": 값을 반환함
- "calc...": 무언가를 계산함
- "create...": 무언가를 생성함
- "check...": 무언가를 확인하고 boolean값을 반환함.

함수는 동작 하나만 담당해야 함 (단일 책임 원칙)

함수 자체가 주석 역할을 할 수 있어야 한다.

## 주석

- 코드에 대해서 설명하는 주석은 좋은 주석이 아님.
- 아키텍쳐에 대한 설명이 들어가는 건 좋은 주석.
- 왜 이렇게 문제를 해결했는지에 대한 설명이 들어가는 것도 좋은 주석.

## 테스트

### Behavior Driven Development

: test + documentation + example

### example (spec)

'''
describe("pow", function() {

it("주어진 숫자의 n 제곱", function() {
assert.equal(pow(2, 3), 8);
});
});
'''

### spec(명세서)은 세 가지 구성요소로 이뤄짐.

1. describe("title", function() {...})
   : 구현하고자 하는 기능에 대한 설명.
2. it("유스 케이스 설명", function() {...})
   : 유스케이스에 대한 설명과 테스트 함수
3. assert.equal(value1, value2)
   : 기능구현이 제대로 되었다면, it block 안에 코드가 문제없이 동작.

- spec의 목적

1. 테스트: 함수가 의도하는 동작을 제대로 수행하고 있는지 보장.
2. 문서: 함수가 어떤 동작을 수행하는지
3. 예시: 실제 동작하는 예시

### 바벨

: 명세서에 새롭게 등록된 기능을 사용하다 보면 호환성 문제가 발생할 수 있는데, 이럴 때 바벨의 역할이 드러난다.

1. 트랜스파일러로서의 역할
   : 코드를 구 표준에 맞게 재작성해주는 프로그램.
2. 폴리필 (polyfill)
   ; 변경된 표준을 준수할 수 있도록 기존 함수의 동작 방식을 수정하거나, 새롭게 구현한 함수의 스크림트.
