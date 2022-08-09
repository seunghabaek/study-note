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
