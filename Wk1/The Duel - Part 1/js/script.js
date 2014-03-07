//  Name:				Bryan J. Gill, MCNPS, S+
//  Date:				03/04/2014
//  Assignment:		Goal 1 - Duel 1

//  self-executing function
(function(){
	console.log("FIGHT!!!");

	//  Player Health
	var player1Name = "Iron Man";
	var player2Name =  "Thor";

	//  Player Damage
	var player1Damage = 20;
	var player2Damage = 20;

	//  Player Health
	var player1Health = 100;
	var player2Health = 100;
	
	//  Round number
	var round = 0;
	
	//  Fight function
	function fight(){
		alert(player1Name+":"+player1Health+" *START* "+player2Name+":"+player2Health);
		
		for (var i=0; i<10; i++){
						
			var minDamage1 = player1Damage * .5;
			var minDamage2 = player2Damage * .5;
			var f1 = Math.floor(Math.random() * (player1Damage - minDamage1) + minDamage1);
			var f2 = Math.floor(Math.random() * (player2Damage - minDamage2) + minDamage2);

			//  Inflict Damage
			player1Health-=f1;
			player2Health-=f2;
			console.log(player1Name+":"+player1Health+" *START* "+player2Name+":"+player2Health);
			
			var results = winnerCheck();
			if (results === "no winner"){
				round++;
				alert(player1Name+":"+player1Health+" *ROUND: "+round+" OVER* "+player2Name+":"+player2Health);
			}else{
			alert(results);
			break;
			};
		};
	};
	
	//  Winner Check function
	function winnerCheck(){
		var result = "no winner";
		if(player1Health < 1 && player2Health < 1){
			result = "Your both die.";
		}else if(player1Health <1){
			result = player2Name+" WINS!!!"
		}else if(player2Health <1){
			result = player1Name+" WINS!!!"
		};
	return result;
	};
	//  Call fight function
	fight();
})();