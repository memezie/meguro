'use strict'

{
//	const score1 = 80;
//	const score2 = 90;
//	const score3 = 40;

//const scores = [80, 90, 40];
//console.log(scores[1]);

//scores[2] = 100;
//console.log(scores);

//	console.log(scores.length);

//3.4回目

	
//	const player = ['taguchi', 32];
	
//	const player ={
//		name: 'taguchi',
//		score: 32,
//	};
	
//	console.log(player['name']);
	
//	player.score = 100;
//	console.log(player);
	
//	player.email = "taguchi@gmail.com"
//	console.log(player);

//	delete player.score;
//	console.log(player);
	
//	5.6回目
	
	class Player{
		constructor(name,score){
			this.name = name;
			this.score = score;
		}
		
		showInfo(){
			console.log(`name: ${this.name} score: ${this.score}`)
		}
		
//		static showVersion(){
//			console.log('player class ver.1.0');
//		}
	}
	
//	const taguchi = new Player('taguchi',32);
//	const fkoji = new Player('fkoji',32);
	
//	taguchi.showInfo();
//	fkoji.showInfo();
	
//	Player.showVersion();


//7回目

class SoccerPlayer extends Player{
	constructor(name, score ,number){
		super(name ,score);
		this.number = number;
	}
	kick(){
		console.log('Goooooooaaal!')
	}
}


const tsubasa = new SoccerPlayer('tsubasa', 90, 10);

tsubasa.kick();
console.log(tsubasa.number);
tsubasa.showInfo();

}

//８回目

//let x = 1;
//let y = x;
//x = 5;
//console.log(x);
//console.log(y);

let x = [1, 2];
let y = x;
x[0] = 5;
console.log(x);
console.log(y);

//９回目


const a = [1, 5, 10];

//a.unshift(100);
//a.push(200, 300);
//
//console.log(a);

//a.shift();
//a.pop();
//
//console.log(a);
//
//10回目

const b = [1, 5, 10];

b.splice(2, 0, 6, 7);
console.log(b);

const removed = b.splice(1, 2);
console.log(b);
console.log(removed);

//１１回目

const c =[1, 5, 10, 100];

//for(let i = 0; i <=2; i++){
//for(let i = 0; i < c.length; i++){
//	console.log(c[i]);

//c.forEach(item => {
//	console.log(item);
//});

//c.forEach((item, index) => {
//	console.log(`${index}:${item}`);
//});

//const d = [];
//c.forEach(item =>{
//	d.push(item * 2);
//});
//console.log(d);

//const d = c.map(item =>{
//	return item * 2;
//	console.log(d);
//});


//const d = c.map(item => item * 2);
//	console.log(d);

//const d = c.filter(item => item % 2 ===0);
//console.log(d);


const o = {
	a: 1,
	b: 2,
}

//console.log(Object.keys(o));
//console.log(Object.values(o));
//console.log(Object.entries(o));

Object.keys(o).forEach(key =>{
	console.log(`${key}:${o[key]}`)
});

//14回目

//const a1 = [10, 20];
//const b1 = [1, 2,...a1];
//console.log(b1);

//const a1 = [10, 20];
//const sum = (a,b) => a + b;
//console.log(sum(...a1));

const o1 ={a:1};
const o2 ={...o1, b:2};
console.log(o2);

//15回目

//const numbers = [1, 2];
//const [e, f] = numbers;
//console.log(e);
//console.log(f);

//const numbers = [1, 2, 3, 8];
//const [e, f, ...rest] = numbers;
//console.log(e);
//console.log(f);
//console.log(rest);

const player22 = {
	name: 'tagu',
	score: 55,
	hp: 70,
	mp: 30,
}
	
const {name, score, ...points} = player22;
console.log(name);
console.log(score);
console.log(points);

//16回目

const str = 'hello';

console.log(str.length);
console.log(str.substring(2, 4));
console.log(str[1]);

//17回目

console.log(Math.PI);

console.log(Math.random());


//Math.random() -> 0 .......0.99999
//Math.random() * 6 -> 0 .......5.99999
//Math.random() * 6 + 1 -> 1 .......6.99999

console.log(Math.floor(Math.random() * 6 + 1));

//18回目

//const g = new Date();

//console.log(g.getFullYear());
//console.log(g.getMonth());
//console.log(g.getDate());
//console.log(g.getDay());
//console.log(g.getHours());
//console.log(g.getMinutes());
//console.log(g.getSeconds());
//console.log(g.getMilliseconds());


//19回目

//const g = new Date(2018, 11);
//g.setHours(10, 20, 30);
//g.setDate(g.getDate()+ 3);
//
//
//console.log(g);

//const d1 = new Date(2018, 11, 1);
//const d2 = new Date(2018, 11, 10);
//console.log((d2 - d1) / (24 * 60 * 60 *1000));

//20回目

//window.alert('hello!');
//const answer = confirm('Are you sure?');
//console.log(answer);

//21回目
//let i = 0;
//const showTime = () =>{
//	console.log(new Date());
//	i++;
//	if(i > 2){
//		clearInterval(timerID);
//	}
//};
//
//let timerID = setInterval(showTime, 1000);

//22回目
//let i =0; 
//const showTime = () =>{
//	console.log(new Date());
//	let timerID = setTimeout(showTime, 1000);
//	i++;
//	if(i > 2){
//		clearTimeout(timerID);
//	}
//};
//
//showTime();

//23回目

//const q = 'hello';
const q = 5;

try{
	console.log(q.toUpperCase());
} catch(e){
	console.log(e.message);
}
console.log('Finish!');

