	'use strict';
{
// ~6回目

	console.log('Hello World from main.js');
		
	console.log('It\'s me!');
				
	console.log('hell\no wor\tld');
	console.log('hello' + 'world');


// 6回目

	console.log(10 + 3);

	console.log(10 - 3);

	console.log(10 * 3);

	console.log(10 / 3);

	console.log(10 % 3);

	console.log(10 ** 3);

	console.log(2 + 10 * 3);

	console.log((2 + 10) * 3);

// 7.8回目
	// 定数 const
	// 変数 let


	let price = 150;

	console.log(price * 140);
	console.log(price * 160);

	price = 170;

	console.log(price * 140);
	console.log(price * 160);


//9回目

	let price1 = 500;

//	price = price + 100;
	price1 += 100;

	price1 *=2;

//	price += price;
	price1++;
	price1--;

	console.log(price1);

//10回目

	console.log(typeof 'hello');
	console.log(typeof 5);
	console.log(typeof true);
	console.log(typeof undefined);
	console.log(typeof null);

//11回目

	console.log('5' * 3);
	console.log('5' + 3);
	console.log(parseInt('5', 10) + 3);
	console.log(parseInt('hello', 10));

//12回目

	const score = 40;

	if(score > 85){
		console.log('great');
	}else if(score >= 60){
		console.log('Good');
	}else{
		console.log('OK');
	}

	
	const score2 = 85;

	score2 >= 80 ? console.log('great') : console.log('OK');

//14回目

const score3 = 60;
const name = 'taguchi';

//&& なおかつ
//|| もしくは
//!  ではない
//if(score3 >= 50){
//	if(name === 'taguchi'){
//		console.log('Good job');
//	}
//}

if(score3 >= 50 && name === 'taguchi'){
	console.log('Yeahhhhhhh');
}

//15回目

const signal = 'red';

//if(signal === 'red'){
//	console.log('stop!');
//}else if('signal === 'yellow'){
//	console.log('caution!');
//}else if('signal === 'blue'){
//	console.log('go!');
//}

switch (signal){
	case 'red':
		console.log('stop!');
		break;
	case 'yellow':
		console.log('caution!');
		break;
	case 'blue':
		console.log('go!');
		break;
	default:
		console.log('wrong signal!');
		break;
}

//16回目

for(let i = 1;i <= 10; i++){
//	console.log('hello!');
//	console.log(i + 'hello!');

	console.log(`${i} hello`);

}

//17回目

let hp = 200;

while(hp > 0){
	console.log(`${hp} HP left!`);
	hp -=15;
}

for(let hp = 200; hp > 0; hp -=15){
	console.log(`${hp} HP left!`);
}

//18回目

for(let i = 1; i <= 10; i++){
//	if(i === 4){
//	if(i % 3 === 0){
//		continue;
//	}
	if(i === 4){
		break;
	}
	console.log(i);
}

//19回目

function showAd(message = 'AD') {
	console.log('--------------');
	console.log(`---${message}---`);	
}



console.log('Tom is Great!');

showAd('Header AD');

console.log('Bob is Great!');
console.log('Jon is Great!');

showAd();

console.log('Rich is Great!');

showAd('Footer AD');

//20回目

//function sum(a,b,c){
////	console.log(a + b + c)
//	return a + b + c;
//}
//
////sum(1,2,3);
////sum(3,4,5);
//
//const total = sum(1,2,3) + sum(3,4,5);
//
//console.log(total);

//21回目

//const sum = function(a,b,c){
//	return a + b + c;
//};
//
//const total = sum(1,2,3) + sum(3,4,5);
//
//console.log(total);

//22回目

//const sum = (a,b,c) =>  a + b + c;
//
//const total = sum(1,2,3) + sum(3,4,5);
//
//console.log(total);


//const double = function(a){
//	return a * 2;
//};

const double = a => a * 2;

console.log(double(12));

//24回目

const x = 2;

function f(){
//	const x = 1;
	console.log(x);
}

f();
console.log(x);	
}
	
