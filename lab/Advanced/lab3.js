//Javascript Advanced Lab 3 

// Test to javascript advanced lab 3

function printMe() {
    console.log('printing debounced message')
}

printMe = debounce(printMe); //create this debounce function for a)

//create this debounce function for a)
function debounce(func) {
    //let message = setTimeout(printMe,1000,"print after one seconf")
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, 1000);
    }
}

//fire off 3 calls to printMe within 300ms - 
// only the LAST one should print, after 1000ms of no calls
setTimeout( printMe, 100,"print after 100ms");
setTimeout( printMe, 200,"print after 200ms");
setTimeout( printMe, 300,"print after 300ms");

