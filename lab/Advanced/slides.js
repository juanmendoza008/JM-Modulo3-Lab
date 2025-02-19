// Slide 19
function slow(x) {
    // there can be a time-consuming job here, like adding up to a large number
    let random = 0, goal = Math.floor(Math.random() * x * 1_000_000); // random large number
    console.log(`slow(${x}): randomly generated goal for ${x * 1_000_000} is ${goal}`);
    for (let i = 0; i < goal; i++) random++;
    return random; // return large number after counting to it
    }
    function cachingDecorator(origFunction) { // decorator takes a function as parameter
    const cache = new Map(); // can also include outer environment variables via a closure
    return function(x) { // decorator returns same function with extra bits - caching
    if (cache.has(x)) { // if the key exists in the cache,
    console.log('returned cached value for ' + x); return cache.get(x); // read and return the result from it
    }
    let result = origFunction(x) // otherwise, call the original function and store the result
    cache.set(x, result); // then cache (remember) the result for next time
    return result;
    };
    }
    const fast = cachingDecorator(slow) // we can decorate the original slow function to use caching and make it fast
    const fastTimed = loggingTimingDecorator(fast) // we can decorate the fast version to include timing for testing
    fastTimed(8) // first time will still be slow because it's uncached
    fastTimed(8) // but every time after this will be much faster because result is cached

// Slide 23 
    let worker = {
        getMultiplier() {
        return Math.floor(Math.random() * 1_000_000); // large random number
        },
        slow(x) {
        let random = 0, goal = x * this.getMultiplier(); // needs context to work
        for (let i = 0; i < goal; i++) random++;
        console.log(`worker.slow(${x}): randomly generated goal is ${goal}`);
        return random; // return large number
        }
        };
        worker.slow(5) // works, context comes from before the dot, ie. worker
        worker.fast = cachingDecorator(worker.slow) // without call/apply, context is lost
        worker.fast(3) // TypeError: Cannot read properties of undefined (reading 'getMultiplier')