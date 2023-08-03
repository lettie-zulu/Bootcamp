const kilometer = 1.60934; //used const since value will remain constant
let miles = prompt("Please enter Miles"); //used miles since the value changes at every run in the current scope

console.log(miles + " miles is " + kilometer * miles + " kilometers");