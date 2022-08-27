const palindrome = (str) => {
    const result = str.split('').reverse().join('')

    return result === str
}

console.log(palindrome("lol"))
console.log(palindrome("hello"))

// export default palindrome