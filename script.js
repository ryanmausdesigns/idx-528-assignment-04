const name = "Ryan";
var x = 29;
let age = x;
age *= 5; 
console.log (age);
const last_name = "Maus";
// Full name is required to be last name, first. 
full_name = last_name + ", " + name; 
console.log (full_name); 
let fruits = [
    "Apples", 
    "Oranges", 
    "Pears", 
    "Bananas", 
    "Cherries",
];

if (fruits.length < 5 ) {
    console.log ( "only a few fruits!" )
 } else if (fruits.length > 5 ) {
    console.log ( "nice list of fruits.")
 } else {
    console.log ("FRUUUITS!!")
 };

var askFruit = prompt("Enter fruit's name for price information")
 
 switch (askFruit) {
    case "Apples":
        console.log("1.99");
        break; 
    case "Oranges":
        console.log("2.99"); 
        break;
    case "Pears":
        console.log("$1.50");
        break; 
    case "Bananas": 
        console.log("$0.49");
        break;
    case "Cherries": 
        console.log("$3.01");
        break;
 }