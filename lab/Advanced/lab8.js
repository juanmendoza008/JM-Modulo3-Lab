
//b 
function orderItems(...itemNames) {
    return `Order placed for: ${itemNames.join(', ')}`;
}

// a) create a decorated version of the original function
function validateStringArg(fn) {
    return function (arg) {
        if(typeof(arg) !== "string" ) {
            throw new Error("NOt a String");
        }
        return fn(arg);
    };
}

function validateStringArgs(fn) {
    return function (...args) {
        for (let arg of args) {
            if(typeof arg === "string") {
                return fn(...args);
            }
            throw new Error("NOt all the items are String");
        }        
    };
}


//const validatedOrderItem = validateStringArg(orderItems);
const validatedOrderItem = validateStringArgs(orderItems);

console.log(validatedOrderItem("Apple Watch")); // should run the function 
//console.log(validatedOrderItem(123)); // should throw an error

//b 
console.log(validatedOrderItem("Apple Watch")); 

// c
try {
    console.log(validatedOrderItems("Apple Watch", "Airpods")); // should run the function

} catch (err) {
    console.log("Error returned: ", err.message)
}
