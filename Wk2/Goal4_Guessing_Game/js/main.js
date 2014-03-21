  //  Name:			Bryan J. Gill, MCNPS, S+
  //  Date:				03/20/2014
  //  Assignment:	Goal 4 - Guessing Game
  
  //Game variables
  (function (){

	var buT = document.querySelector("button");
	var cliKs = 0;
	var magNum = Math.floor(Math.random() * 10 + 1);
	console.log(magNum);
	buT.onclick = function(e){
		var inPut = document.getElementById('input').value;    
		if (cliKs < 3){
			if (inPut < magNum){
				document.getElementById("output").innerHTML = ("To Low");
			} else if (inPut > magNum){
				document.getElementById("output").innerHTML = ("To High");
			}else if (inPut == magNum){
				document.getElementById("output").innerHTML = ("You Win!!!");
				gmOv();
			}
			cliKs++;
		}else{
		gmOv();
		}

	e.preventDefault();
	return false;
	};

	function gmOv(){
		var inBt = document.querySelector("button");
		inBt.innerHTML = ("DONE!!!");
		document.querySelector("button").disabled=true;
	}
})();