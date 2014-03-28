  //  Name:			Bryan J. Gill, MCNPS, S+
  //  Date:				03/24/2014
  //  Assignment:	Goal7: Assignment: Advanced Objects
  
  (function(){
    var names = ["Dessi", "Alexandra", "Dina", "Lindsay", "Buksi"];
    var people = [];
    for( var i = 0; i<3;i++){
        var index = Math.floor(Math.random()*names.length);
        var rowNumber = i+1;
        var person = new Person(names[index],rowNumber);
        people.push(person);
        names.splice(index,1);
    }
    function populateHTML(){
         for(var i= 0; i<people.length;i++){
            document.querySelector("#r"+(i+1)+"c1").innerHTML = people[i].name;
            document.querySelector("#r"+(i+1)+"c2").innerHTML = people[i].job;
            document.querySelector("#r"+(i+1)+"c3").innerHTML = people[i].action;
         }
    }
    populateHTML();
    function runUpdate(){
            people.forEach(function(person){
             person.update();
        });
        populateHTML();
    }
    setInterval(runUpdate, 3000);
})();