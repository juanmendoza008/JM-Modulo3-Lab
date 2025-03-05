// lab 6 

function multiply(a, b) { 
    console.log( a * b );
}
    
// a) 
Function.prototype.delay = function(ms) {
    let self = this;
    return function(arg1,agr2) {
    setTimeout(self, ms, arg1,agr2);
    }
};

multiply.delay(2000)(5, 5); // prints 25 after 200 milliseconds

// b) 
Function.prototype.delay = function(ms) {
    let self = this;
    return function() {
    setTimeout(() => self.apply(this,arguments), ms);
    }
};
multiply.delay(2000)(5, 5); 

// c) 
function multiply4Par(a,b,c,d) { 
    console.log( a * b * c * d );
}

multiply4Par.delay(2000)(5, 5, 5, 5);


// // a) Other solution 
// Function.prototype.delay = function(ms) {
//     let self = this;
//     return function(...args) {
//         setTimeout(function() {
//             self.apply(null, args);
//         }, ms);
//     };
// }
// multiply.delay(2000)(5, 5);// prints 25 after 500 milliseconds