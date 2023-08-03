const inventory = [];
const item1 = {
    name: "car",
    model: "bmw",
    cost: 280000,
    qty: 8
}
const item2 = {
    name: "laptop",
    model: "dell",
    cost: 7800,
    qty: 23
}
const item3 = {
    name: "vegitables",
    model: "carrots",
    cost: 20,
    qty: 66
}
inventory.push(item1, item2, item3);
console.log(inventory);
console.log(inventory[2].qty);