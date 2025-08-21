//基礎Q1
let nickname = 'ごっしー'
console.log(nickname)
let age = 28;
console.log(age)
let text ='私のニックネームは' + nickname +'です。年齢は' + age + 'です。';
console.log(text)
//基礎Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
console.log('languages[0] => ', languages[0]);
console.log('languages[1] => ', languages[1]);
console.log('languages[2] => ', languages[2]);
console.log('languages[3] => ', languages[3]);
console.log('languages[4] => ', languages[4]);
console.log('languages.length => ', languages.length);
let text2 ='私の好きな言語は' + languages[0] +'です。次は' + languages[3] + 'を勉強してみたいです。';
console.log(text2)
//基礎Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

//基礎Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

//基礎Q5
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);

//基礎Q6
function sayHello(){
  console.log("Hello");
}

sayHello();

const sayWorld = function() {
  console.log("World");
};

sayWorld();

//基礎Q7
user.birthday = '2000-09-27';
console.log(user.birthday);

user.sayHello = function(){
  console.log("Hello!");
};

user.sayHello();

//基礎Q8
let calc = {};

calc.add = function(x,y){
  console.log(x + y);
};

calc.add(3, 4);

calc.subtract = function(x, y){
  console.log(x - y);
};
calc.subtract(15, 5);

calc.multiply = function(x, y){
  console.log(x * y);
};
calc.multiply(7, 7);

calc.divide = function(x, y){
  console.log(x / y);
};
calc.divide(35, 7);

//基礎Q9
function remainder(x, y){
  return x % y;
}

let result = remainder(5,3);

console.log("5を3で割った余りは" + result + "です。");

function foo() {
  let x = 1;
}

//基礎Q10
//let x = 1; は foo 関数の中のみで使える変数だが、console.log(x) は現在のスコープの外側でのみxを探すため、参照先とスコープの有効範囲が一致しないため。

//応用Q1
let random = Math.floor(Math.random() *10);

console.log(random);

//応用Q2-1
setTimeout(
  function(){
    console.log("Hello World!");
  }, 3000);

  //応用Q2-2
  function printName(firstName, formatter) {
  console.log(formatter(firstName));
}

const addIntro = (name) => '私の名前は' + name + 'です。';

printName("藤原", addIntro);

//応用Q3
let num = 0;

if(num>0) {
  console.log("num is greater than 0");
}else if(num<0) {
  console.log("num is less than 0");
}else{
    console.log("num is 0");
  }

  //応用Q4
  let numbers = [];

  for (let i = 0; i < 100; i++) {
  numbers.push(i);
}

console.log(numbers);

//応用Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  let value = mixed[i]
  if (typeof value === 'number' && value % 2 === 0) {
    console.log('even');
  }else if(typeof value === 'number' && value % 2 === 1) {
    console.log('odd');
  }else {
    console.log('not number');
  }
  }
