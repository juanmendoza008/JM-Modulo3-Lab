let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    } 
};
car.description(); //works 
// a)
function carDescription() { 
    return car.description();
    };
console.log("a)");
setTimeout(carDescription, 2000); 

// b) 
let car2 = car;
car2.year = 2000;
console.log("b)");
console.log(car.year);
console.log(car2.year);

// c)
// The functiion carDescription() is not working because it is not a method of the object car.
console.log("c)");
car2.description()
// setTimeout(car2.description, 4000); // error expected!

// d)
console.log("d)");
const car2Description = car.description.bind(car);
setTimeout(car2Description, 6000);

// e)
let car3 = {...car};
car3.year = 2018;
car3.make = "BMW";
const car3Description = car.description.bind(car);
setTimeout(car3Description, 10000);