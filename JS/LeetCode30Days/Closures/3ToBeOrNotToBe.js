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

for (let i = 0; i < 3; i++) {
    const log = () => {
        debugger
        console.log(i)
    }

    setTimeout(log, 10)
}