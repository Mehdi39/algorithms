/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    return {
        increment: () => {init++},
        decrement: () => {init--},
        reset: () => {init}
    }
};

let result1 = createCounter(2).increment()

console.log(result1)