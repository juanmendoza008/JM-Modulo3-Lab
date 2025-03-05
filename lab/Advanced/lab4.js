// lab4
  
// Explanation SetInterval & SetTimeout
let tick = setInterval( () => console.log("Print"),2000);
setTimeout(() => clearInterval(tick), 2000 * 10);


//e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// a)
let list = [1, 1, 2, 3, 5, 8, 13, 21, 34];
let timeforPrinting = 2000;

// a
const printFibonacciA = () => {
  let counter = 0;
  const printInterval = setInterval(() => {
    if (counter >= list.length) {
      clearInterval(printInterval);
    } else {
      console.log("Counter= " + counter + " and Value Fibonacci List= " + list[counter]);
      counter++;
    }
  }, timeforPrinting);
};

printFibonacciA();

// b) 
// setTimeOut print without modificate the code a)
setTimeout(printFibonacciA,2000);

// Using setTimeout
const printFibonacciTimeouts = () => {
  let counter = 0;
  const printNext = () => {
    if (counter >= list.length) {
      return;
    } else {
      console.log("Counter= " + counter + " and Value Fibonacci List= " + list[counter]);
      counter++;
      setTimeout(printNext, timeforPrinting);
    }
  };
  printNext();
};

printFibonacciTimeouts();

// c)

const printFibonacci = ( limit, ms) => {
    const fibList = [1,1];
    let counter = 0;
    return () => {
      const printInterval = setInterval(() => {
        if (counter >= limit) {
          clearInterval(printInterval);
        } else { 
          if (counter >= 2) {
            fibList[counter] = fibList[counter - 1] + fibList[counter - 2];
          }
          console.log("Counter= " + counter + " and Value Fibonacci List= " + fibList[counter]);
          counter++;
        }
      }, ms); 
    };
  };
  const printFibonacciC = printFibonacci(7,2000)
  printFibonacciC()


