// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

// function toBe(val) {
//     return {
//         toBe: (val, another) => {
//             (val === another) ? true : {Error("Not Equal")}
//         },
//         notToBe: (val) => {

//         }
//     }
// }

// for (let i = 0; i < 3; i++) {
//     const log = () => {
//         debugger
//         console.log(i)
//     }

//     setTimeout(log, 10)
// }

let arr = [1,2,3,4,5,6,7,8,9,10]

// function plusI(n, i) { return n + i}
// function plusone(n) { return n + 1}
// function constant(n, i) { return 42}

// let map = function(arr, fn) {
//     let result = []
//     for (let i in arr) {
//         console.log(i)
//         result.push(fn(arr[i], i))
//     }
//     console.log(result)
// }

// map(arr, plusI)
for (let i of arr) {
    console.log(typeof i)
}