function init(name) {
    const greeting = "Hello!, "
    function displayName() {
        console.log(greeting, name)
    }
    return displayName;
}

const newInit = init("MD. Jahid Hossain Mridha")
newInit()

let num1 = 10
let num2 = 20
let num3 = 30

[num1, num2] = [num2, num1];

console.log('num1 is: ',num1, 'num2 is: ', num2)