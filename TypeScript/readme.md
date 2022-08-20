# TypeScript

## 엄격도

: TypeScript가 "어느 수준"까지 관여할 것인지에 대한 옵션 값.
기본적으로 tsconfig.json 파일내 `"strict":true` 를 하게 되면 type에 관한 모든 flag 활성화

1. noImplicitAny
   : 타입이 any로 추론되지 않도록 에러를 발생시키는 옵션

2. strictNullChecks
   : null과 undefined를 보다 명시적으로 처리하여 우리의 예외처리의 스트레스를 줄여줌

## Types

1. 문자
   : string, 일반적으로 알고 있는 문자형 타입
2. 숫자
   : number, JavaScript에서는 정수를 위한 런타임 값을 따로 가지지 않기 때문에 int, float 와 같은 type이 존재하지 않고 오로지 `number`
3. boolean
   : true/ false
4. 배열

- 문자형 배열: string[] or Array<string>
- 숫자형 배열: number[] or Array<number>

5. 함수

- 매개변수 타입 표기

```
function greets(name: string) {
    console.log(`Hello ${name.toUpperCase()}`)
}
```

- 반환 타입 표기: optional

```
function greets(name: string): string {
    console.log(`Hello ${name.toUpperCae()}`)
}
```

6. 객체 타입
   : 객체의 타입을 정의하기 위해서는 해당 property들을 나열하고, 각 property들에 대한 타입을 정의해주면 됨.

- required

```
const printCoord = (pt:{x:number, y:number}) => {
    console.log(`The coordinate's x value is ${pt.x}`);
    console.log(`The coordinate's y value is ${pt.y}`);
}

printCoord({x:7, y:5})
```

- optional

```
const printName = (name:{first:string, last?:string}) => {
    console.log(`My name is ${name.first}`);
    console.log(`My name is ${name.first} ${name.last?}`);
}

printName({first:"Seungha"});
printName({first:"Seungha", las:"Baek"});
```

7. 유니언 타입
   : 서로 다른 타입들을 조합해서 새로운 타입을 정의해주는 방식

```
const printId = (id: string|number) => {
    console.log(`My id is ${id}`)
}

printId("slug0326");
printId(1234);
```

8. 타입 별칭
   : 타입의 객체를 사용자가 직접 지정할 수 있음 (type, interface)

```
type Point = {
    x:number,
    y:number
}

const printCoord = (pt:Point) => {
    console.log(`The coordinate's x value is ${pt.x}`);
    console.log(`The coordinate's y value is ${pt.y}`);
}

printCoord({x:7, y:5})
```

9. Interface
   : interface는 type 별칭과 거의 동일한 방식으로 사용 가능.

```
interface Point = {
    x:number,
    y:number,
}

const printCoord = (pt:Point) => {
    console.log(`The coordinate's x value is ${pt.x}`);
    console.log(`The coordinate's y value is ${pt.y}`);
}
```

: type 별칭과 다른 점은 interface를 활용할 경우 무한한 확장이 가능하다는 점.
