function createCounter(n) {
    return () => n++
}

let result = createCounter(2)
// let first = result()
// let second = result()
// let third = result()

let arr = [result(), result(), result(), result()]

console.log(arr)

