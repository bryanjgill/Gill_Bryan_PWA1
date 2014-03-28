  //  Name:			Bryan J. Gill, MCNPS, S+
  //  Date:				03/24/2014
  //  Assignment:	Goal7: Assignment: Advanced Objects
  
  (function(){
    Person.jobs = ["Media Specialist","Student","Housewife", "Hospitality", "Waiter"];
    Person.actions = ["Playing a computer game.","Working on homework.", "Sleeping", "Eating","Walking","Reading","Writing", "Driving"];
    Person.prototype.update = function(){
        this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];
    };
    function Person(n,r){
        this.name = n;
        this.row = r;
        this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)];
        this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];
    }
    window.Person = Person;
})();