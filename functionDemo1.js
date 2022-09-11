var age = 10;
var salary = 15.00

//console.log(`The variable type of age is ${typeof age}`);
//console.log(`The variable type of age is ${typeof salary}`);

//var name= 'John Smith';
//console.log(`The variable type of name is ${typeof name}`);

const displayGreetings = function(name, year){
    console.log(`Happy new year ${year} ${name }`)
}

//console.log(`The variable type of displayGreetings is ${typeof displayGreetings}`);

const displayGreetingsWithEmoji = function(name, year){
    console.log(`😊 😊Happy new year ${year} ${name } 😊😊`)
}

const greet = function( name, year, func){
    func(name, year);
}

greet('Sam', 2022, displayGreetingsWithEmoji);
greet('Jane', 2022, displayGreetings);