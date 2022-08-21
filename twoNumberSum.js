// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target?

let nums = [3,4,5,9,12,6,13,10,7]

const result = function twoNumberSum(nums, sum) {
    for (let i = 0; i < nums.length; i++) {
        firstNumber = nums[i]
        for (let j = 1; j < nums.length; j++) {
            secondNumber = nums[j]
            if(firstNumber + secondNumber == sum) return [firstNumber, secondNumber]
        }
    } 
    return [];
}

console.log(result(nums, 10))