// lab4
    
//e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.

const printFibonacci = ( limit, ms = 1000) => {
    const fibList = [1,1];
    let counter = 0;
    return () => {
      const printInterval = setInterval(() => {
        // console.log(fibList);
        //some way to increment the count;
        for (let i=2;i<limit;i++) {
            fibList[i]=fibList[i-1]+fibList[i-2]
        }
        console.log(fibList[counter]);
        return (fibList[counter])
      }, ms);
      if (counter === limit) {
        clearInterval(printInterval);
      }
    };
  };
  const fibCountingOne = printFibonacci(34);
  
  
  // Machine solution 
  const printFibonacciSolution = ( limit, ms = 1000) => {
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
          console.log(fibList[counter]);
          counter++;
        }
      }, ms);
    };
  };
  const fibCountingOneSol = printFibonacciSolution(34);

