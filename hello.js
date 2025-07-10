class Car{
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
    displayInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}
const myCar = new Car('Toyota', 'Corolla', 2020);
console.log(myCar.displayInfo()); // Output: 2020 Toyota Corolla