class Menu {
    #item1 = 25;
    #item2 = 65;

    constructor(noitem1, noitem2) {
        this.noitem1 = noitem1;
        this.noitem2 = noitem2;
    }

    totalCost(){
        return (this.noitem1 * this.#item1) + (this.noitem2 * this.#item2);
    }

    get total(){
        return this.totalCost();
    }
}
 
const order1 = new Menu(4,9);
const order2 = new Menu(7,1);

console.log(order1.total);
console.log(order2.total);
