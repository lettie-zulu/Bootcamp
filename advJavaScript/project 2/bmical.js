let heightincm;
let weightinkg;

let heightininches = prompt("Please enter height in inches");
let weightinpounds = prompt("Please enter weight in Pounds");

heightincm = heightininches * 2.54;
weightinkg = weightinpounds / 2.046;

console.log("Your height in centimeters is " + heightincm);
console.log("Your weight in kilograms is " + weightinkg);

console.log("Your BMI is " + weightinkg / (heightincm * 0.01)**2 ); //to convert cm to m we multiply by 0.01