//primiteives:number, string,boolean
//More complex types: arrays, objects
//Function types, parameters

//<주요기본형타입>
//Number 타입을 쓸때는 소문자로 시작 해야 하고 대문자로 시작할 경우 객체를 가르킨다.
//(예시, Number객체)
let age: number = 24;
age = 12;

//String
let userName: string;
userName = 'Max';

//Boolean
let isInstructor: boolean;
isInstructor = true;

//<복잡한자료형타입>
//More Complex types

//배열 array

let hobbies: string[]; //or number[],boolean[]
hobbies = ['Sports', 'Cooking', 12]; //error 문자열만 저장

//객체
let person: {
  name: string;
  age: number;
}; //객체의 타입을 정할때는 중괄호를 써야한다.{}
person = {
  name: 'Max',
  age: 32,
};

person = {
  isEmploayee: true, //boolean형식이 없으므로 error
};

//배열 + 객체
let people: {
  name: string;
  age: number;
}[];

//Type inference 타입추론
//타입을 지정하지 않고 변수를 할당하면 그 타입을 할당된 변수의 타입으로 여기고 사용한다.
//아래에서는 문자열을 먼저 할당 하였으므로 '문자열'을 타입으로 보고 숫자형을 재할당했을때 오류가 발생한다.
let course = 'React - The Complete Guide';
course = 123;

//유니온타입(Union type)여러가지타입저장
//값과 타입을 좀더 유연하게 정의할 수 있게 해준다.
let blabla: string | number | boolean = 'react'; //or string[]
blabla = 1231;

//타입별칭(Aliases)
//타입을 한번 정의하고 필요한 모든 곳에 반복해서 사용할 수 있다.
//장점: 작성해야 할 코드 양을 줄일 수 있다.,코드가 간결하고 유지보수가 쉽다.
type Person = {
  name: string;
  age: number;
};
let person2: Person;
let person3: Person[]; // 배열형태로 바꿔서 사용 가능

//타입을 가진 함수(Function)
//1. 함수에서 값을 반환하고 반환하는 값을 통해 타입을 추론 할수 있다.
function add(a: number, b: number) {
  return a + b;
}

//2.타입명시 (number, string, unionType(number|string~))
//반드시 함수 뒤에 타입을 명시 하지 않아도 된다. 타입추론을 하기 때문에
function add2(a: number, b: number): number {
  return a + b;
}

//3.반환하지않는 함수 void
//void:함수와 항상 같이 사용하며, 함수에 반환값이 없다는 것을 뜻한다.(undefined,null 과 비슷함)
function printOut(value: any) {
  console.log(value); //return이 없으므로 반환하지 x
}

//제너릭(Generics)
// 어떤 타입이든 사용할 수있지만 특정 타입을 사용해 함수를 실행하고 나면 해당 타입으로 고정되어 동작한다.₩
//함수의 타입 안정성과 유연성을 줘서 타입을 추론 할 수 있게 한다.

//기존배열을 유지하고 새로운 value를 추가하여 리턴하는 함수
function insertAtBegining<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArray = [1, 2, 3];
//number
const updateArray = insertAtBegining(demoArray, -1); //[-1, 1,2,3]

//string
const stringArray = insertAtBegining(['a', 'b', 'c'], 'd');
