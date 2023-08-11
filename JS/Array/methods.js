let arr = [1,2,3,4,5,6,7,8,9,10]
let arr1 = arr.shift()
let arr2 = []

// arr1.push(arr.shift)
arr.push(1)
arr.pop()



console.log(arr)
console.log(`
    arr1 after arr.shift() is: ${arr1}
`)
// console.log(arr.find(2))

function isEmpty(obj) {
    return Object.keys(obj)
}

console.log(isEmpty(arr))