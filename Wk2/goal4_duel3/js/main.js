  //  Name:				Bryan J. Gill, MCNPS, S+
  //  Date:				03/17/2014
  //  Assignment:		Goal 4 - Duel 3
  
  //  self-executing function
  (function(){
	console.log("FIGHT!!!");

    var players = [{name:'Iron Man', damage:20, health:100},
                   {name:'Thor', damage:20, health:100}];
    //Start round
	
	//  Player Health
	//  var player1Name = "Iron Man";
	//  var player2Name =  "Thor";

	//  Player Damage
	//  var player1Damage = 20;
	//  var player2Damage = 20;

	//  Player Health
	//  var player1Health = 100;
	//  var player2Health = 100;
	
	//  Round number
	var round = 0;
	
	//  Fight function
	function fight(){
		alert(fighter1[0]+":"+fighter1[2]+" *START* "+fighter2[0]+":"+fighter2[2]);
		
		for (var i=0; i<10; i++){
						
			var minDamage1 = fighter1[1] * .5;
			var minDamage2 = fighter2[1] * .5;
			var f1 = Math.floor(Math.random() * (fighter1[1] - minDamage1) + minDamage1);
			var f2 = Math.floor(Math.random() * (fighter2[1] - minDamage2) + minDamage2);

			//  Inflict Damage
			fighter1[2]-=f1;
			fighter2[2]-=f2;
			console.log(fighter1[0]+":"+fighter1[2]+" *START* "+fighter2[0]+":"+fighter2[2]);
			
			var results = winnerCheck();
			if (results === "no winner"){
				round++;
				alert(fighter1[0]+":"+fighter1[2]+" *ROUND: "+round+" OVER* "+fighter2[0]+":"+fighter2[2]);
			}else{
			alert(results);
			break;
			};
		};
	};
	
	//  Winner Check function
	function winnerCheck(){
		var result = "no winner";
		if(fighter1[2] < 1 && fighter2[2] < 1){
			result = "Your both die.";
		}else if(fighter1[2] <1){
			result = fighter2[0]+" WINS!!!"
		}else if(fighter2[2] <1){
			result = fighter1[0]+" WINS!!!"
		};
	return result;
	};
	//  Call fight function
	fight();
})();