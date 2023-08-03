var people = ["Kareem", "Fatma", "Sumaya", "Mr. Hobson", "Ms. Young", "Mrs. O' Doherty"];
var otherPeople = ["Emilie", "Mommy", "Dad", "Kathy"];

people = people.concat(otherPeople);


document.getElementById("peopleIKnow").innerHTML =people.valueOf();

//people = people.indexOf("Mr. Hobson");
//people.join(" # ");
//people = people.lastIndexOf("Bobby");
//people = people.pop();
//people.pop();
//people = people.push("Teddy");
//people.push("Teddy");
//people = people.reverse();
//people.shift();
//people.unshift("Teddy");
//people = people.slice(0,3);
//people = people.sort();
people.splice(1,0,"Cathy");