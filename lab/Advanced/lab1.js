// lab1 
function makeCounter(startFrom,incrementBy) {
    let currentCount = startFrom;
    return function() {
        currentCount+=incrementBy;
console.log(currentCount)
        return currentCount;
    };
}
let counter1 = makeCounter(2,2);
counter1(); // 1
counter1(); // 2
let counter2 = makeCounter(1,1);
counter2();
counter2();

