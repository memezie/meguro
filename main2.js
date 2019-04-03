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

