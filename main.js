	'use strict';
	
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