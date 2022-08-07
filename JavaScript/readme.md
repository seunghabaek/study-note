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
