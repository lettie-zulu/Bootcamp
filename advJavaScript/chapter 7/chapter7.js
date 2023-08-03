"use strict"
// class dog {
//     dogName;
//     weight;
//     color;
//     breed;
//     constructor(dogName, weight, color, breed) {
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }

// let dog1 = new dog("ketana", "20kg", "black", "pitbull");
// let dog2 = new dog("Nala", "5kg", "Brown", "Pekingese");

// console.log(`The dog's name is ${dog1.dogName} and her color is ${dog.color}`);
// console.log(`The other dog's name is ${dog2.dogName} and her color is ${dog2.color}`);

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// let person = new Person("Maaike", "van Putten");
// console.log(person.firstname,person.lastname);

//7.1
// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// let person1 = new Person("Lizzy", "Mbali");
// let person2 = new Person("Thato", "Zulu");

// console.log(`Hello ${person1.firstname}`);
// console.log(`Hello  ${person2.firstname}`);

//example
// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() {
//         console.log("Hi there!");
//     }
//     compliment(name, object) {
//         return "That's a wonderful " + object + ", " + name;
//     }
// }
// let p = new Person("Thato", "Zulu");
// let compliment = p.compliment("Harry", "hat");
// console.log(compliment);

//7.2
// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     fullname() {
//         return this.firstname + " " + this.lastname;
//     }
// }
// let person1 = new Person("Maaike", "van Putten");
// let person2 = new Person("Laurence", "Svekis");
// console.log(person1.fullname());
// console.log(person2.fullname());

//example
// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// let p = new Person("Maaike", "van Putten");
// console.log("Hi", p.firstname);

//example
// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     get firstname() {
//         return this.#firstname;
//     }
//     set firstname(firstname) {
//         this.#firstname = firstname;
//     }
//     get lastname() {
//         return this.#lastname;
//     }
//     set lastname(lastname) {
//         this.#lastname = lastname;
//     }
// }
// let p = new Person("Maria", "Saga");
// console.log(p.firstname);

//example
// class Vehicle {
//     color;
//     currentSpeed;
//     maxSpeed
//     constructor(color, currentSpeed, maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move() {
//         console.log("moving at", this.currentSpeed)
//     }
//     accelerate(amount) {
//         this.currentSpeed += amount;
//     }
// }

// class Motorcycle extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//         super(color, currentSpeed, maxSpeed)
//         this.fuel = fuel;
//     }


//     doWheelie() {
//         console.log("Driving on one wheel");
//     }
// }

// let motorC = new Motorcycle("red", 100, 120, "diesel");
// console.log(motorC.color);
// motorC.move();
// motorC.accelerate(10);
// motorC.move();

//example
// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() {
//         console.log("Hi there!");
//     }
// }
// Person.prototype.introduce = function () {
//     console.log("Hi, I'm", this.firstname);
// };
// Person.prototype.favoriteColor = "green";
// let p = new Person("Maria", "Saga");
// console.log(p.favoriteColor);
// p.introduce();

//7.3
// class Animal {
//     constructor(species, sounds) {
//         this.species = species;
//         this.sounds = sounds;
//     }
//     speak() {
//         console.log(this.species + " " + this.sounds);
//     }
// }
// Animal.prototype.eat = function () {
//     return this.species + " is eating";
// }
// let cat = new Animal("cat", "meow");
// let dog = new Animal("dog", "bark");
// cat.speak();
// console.log(dog.eat());
// console.log(dog);