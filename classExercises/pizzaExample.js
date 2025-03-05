function preparingPizza() {
    return console.log("Started preparing pizza ...!");
}
function basePizza() {
    console.log("Made the base");
}
function cheeseSaucePizza() {
    console.log("Added the sauce and cheese");
}
function toppingsPizza() {
    console.log("Added the pizza toppings");
}
function cookingPizza() {
    console.log("Cooked the pizza");
}
function readyPizza() {
    return console.log("Pizza is ready!!!");
}

// function makePizza() {
//     preparingPizza();
//     setTimeout(() => {
//         basePizza();
//         setTimeout(() => {
//             cheeseSaucePizza();
//             setTimeout(() => {
//                 toppingsPizza();
//                 setTimeout(() => {
//                     cookingPizza();
//                     setTimeout(() => {
//                         readyPizza();
//                     }, 20000);
//                 }, 10000);
//             }, 10000);
//         }, 5000);
//     }, 5000);
// }

// makePizza();

// function makePizzaJhon() {
//     preparingPizza();
//     setTimeout( () => {
//         BasePizza();
//     }, 5000);
//     setTimeout( () => {
//         cheeseSaucePizza();
//     }, 10000);
//     setTimeout( () => {
//         toppingsPizza();
//     }, 15000);
//     setTimeout( () => {
//         cookingPizza();
//     }, 20000);
//     setTimeout( () => {
//         readyPizza();
//     }, 25000);
// }

// makePizzaJhon();
let time=1000;
let makePizzaPromise = new Promise(resolve => setTimeout(() => resolve(time), time * 5)
).then(result => {
    console.log(preparingPizza()); 
    let nextTime = result+time;
    return new Promise(resolve => setTimeout(() => resolve(result), time));
}).then(result => {
    console.log(basePizza()); 
    let nextTime = result+time;
    return new Promise(resolve => setTimeout(() => resolve(result), time));
})


// Create a pizza as a Class & Object 
