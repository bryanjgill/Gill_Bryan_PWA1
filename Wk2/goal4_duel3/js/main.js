  //  Name:			Bryan J. Gill, MCNPS, S+
  //  Date:				03/17/2014
  //  Assignment:	Goal 4 - Duel 3
 
 (function(){
	console.log("FIGHT!!!");

    var players = [{name:"Iron Man", damage:20, health:100},
                   {name:"Thor", damage:20, health:100}];
    //Start round

    var fhtBtn = document.querySelector("#fight_btn");
    fhtBtn.onclick = fight;
    var round = 1;
    function fight(){
                    var f1 = Math.floor((Math.random()*players[0].damage)+players[0].damage *.5);
                    var f2 = Math.floor((Math.random()*players[1].damage)+players[1].damage *.5);

                    //Player Damage
                    players[0].health-=f1;
                    players[1].health-=f2;

                    //Winner check
                    var result = winnerCheck();
                    if (result==="no winner" && round<9)
                    {
                        round++;
                        var rndNum = document.querySelector("#fight_btn h4");
                        rndNum.innerHTML = ("ROUND " + round + " complete");
                        var scrLks = document.querySelectorAll("#scores p");
                        scrLks[0].innerHTML = (players[0].name+":"+players[0].health);
                        scrLks[1].innerHTML = (players[1].name+":"+players[1].health);

                    }else{
                        var ftBtn = document.querySelector("#fight_btn a");
                        ftBtn.innerHTML = ("DONE!!!");
                        var rstLks = document.querySelectorAll("#scores p");
                        rstLks[0].innerHTML = ("");
                        rstLks[1].innerHTML = (result + "                           ");
                    }

    }
				
                function winnerCheck(){
                    var result="no winner";
                    if (players[0].health < 1 && players[1].health < 1)
                    {
                        result = "You Both Die";
                    } else if(players[0].health < 1){
                        result = players[1].name+" WINS!!!"
                    } else if (players[1].health < 1)
                    {
                        result = players[0].name+" WINS!!!"
                    }
                    return result;
                }
})();