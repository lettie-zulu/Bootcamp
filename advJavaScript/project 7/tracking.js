class Employee {
    constructor(firstName, lastName, NoYears) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.NoYears = NoYears;
    }
}

let employee1 = new Employee("Lettie", "Zulu", 3);
let employee2 = new Employee("Nigel", "Zulu", 10);

let employees = [employee1, employee2];

Employee.prototype.details = function(){
    return this.firstName + " " + this.lastName + " has worked at the company for " + this.NoYears + " years";
}

employees.forEach((employee) => {
    console.log(employee.details());
});