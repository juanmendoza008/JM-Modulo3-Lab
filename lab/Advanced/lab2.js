// Original Code
// function delayMsg(msg)
// {

// console.log(`This message will be printed after a delay: ${msg}`)
// }

// a) SetTimeOut delay the message according set delay time in milliseconds.
// NOt delay at all and 0ms delay is different. Count start at different time.

// b)
const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
}

setTimeout(delayMsg, 100, '#1: Delayed by 100ms'); 
setTimeout(delayMsg, 20, '#2: Delayed by 20ms'); 
setTimeout(delayMsg, 0, '#3: Delayed by 0ms'); 
delayMsg('#4: Not delayed at all')
// c)
const a = setTimeout(delayMsg, 10000, '#5: Delayed by 10000ms'); 

// d)
clearTimeout(a);
clearTimeout(setTimeout(delayMsg, 10000, '#5: Delayed by 10000ms'));