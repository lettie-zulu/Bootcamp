// arr3 = new Array(10);
// arr4 = [10];
// console.log(arr3);
// console.log(arr4);

// let arr = ["hi there", 5, true];
// console.log(typeof arr[0]);
// console.log(typeof arr[1]);
// console.log(typeof arr[2]);

// const arr = ["hi there"];

// arr[0] = "new value";

// arr = ["new value2"];
// overwritting elelments
// cars = ["Toyota", "Renault", "Volkswagen"];
// cars[-1] = "Audi";
// console.log(cars[-1]);

//exercise3.1
// let shoppingList = ["Milk", "bread", "Apples"];
// console.log(shoppingList.length);
// shoppingList[1] = "Bananas";
// console.log(shoppingList);

// let arrOfShapes =["circle", "triangle", "rectangle"];
// arrOfShapes.splice(2,1,"square","trapzoid");
// console.log(arrOfShapes);

// let arr5 = [1, 2, 3];
// let arr6 = [4, 5, 6];
// let arr7 = arr5.concat(arr6);
// console.log(arr7);
// let arr8 = arr7.concat(7, 8, 9);
// console.log(arr8);
// arr8.splice(1, 3);
// console.log(arr8);
// delete arr8[0];
// console.log(arr8);

//  arr8 = [2, 6, 7, 8];
// let value1 = arr8.find(function (element) { return element === 6 });
// let value2 = arr8.find(function (e) { return e === 10 });
// console.log(value1, value2);

// arr8 = [2,6,7,8];
// let findIndex = arr8.indexOf(6);
// let findIndex2 = arr8.indexOf(10);
// console.log(findIndex, findIndex2);

// arr8 = [2,6,7,8];
// let findIndex3 = arr8.indexOf(6);
// console.log(findIndex3);

// let animals = ["dog","horse","cat","Platypus","dog"];
// let lastDog = animals.lastIndexOf("dog");
// console.log(lastDog);

// let names = ["James", "Alice", "Fatina", "Maria", "Bert"];
// names.sort();
// console.log(names);

// let names = ["James", "Alice", "Fatina", "Maria", "Bert"];
// names.reverse();
// console.log(names);

//practice exercise 3.2

// let shoppingList = [];
// shoppingList.push("Milk", "Bread", "Apples");
// shoppingList.splice(1,1,"Bananas","Eggs");
// console.log(shoppingList.pop());
// shoppingList.sort()
// let index = shoppingList.indexOf("Bananas");
// index += 1;
// shoppingList.splice(index,0,"Carrots", "Lettuce");
// let list2 = ["Juice", "Pop"];
// shoppingList = shoppingList.concat(list2,list2);
// console.log(shoppingList.lastIndexOf("Pop"));
// console.log(shoppingList);

//Practice exercise 3.3

// let arr1 = [1,2,3];
// let arr2 = [arr1,arr1,arr1];
// console.log(arr2[1][1]);
// console.log(typeof arr2);

// let myCar = {make: "Audi.4", year:2023};
// let property = "color";
// myCar[property] = "red";
// property = "forSale";
// myCar[property] = true;
// console.log(myCar);

// let people = {friends:[]};
// let friend1 = {fname: "Anna", lname: "Jones", id: 1000};
// let friend2 = {fname: "Gugu", lname: "Sithole",id: 2000};
// let friend3 = {fname: "Sizwe",lnmae: "Jay", id: 3000};
// people.friends.push(friend1,friend1,friend3);
// console.log(people);