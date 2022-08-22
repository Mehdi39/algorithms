// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target?

// let nums = [3,2,4]

// const result = function twoNumberSum(nums, sum) {
//     for (let i = 0; i < nums.length; i++) {
//         firstNumber = nums[i]
//         for (let j = 1; j < nums.length; j++) {
//             secondNumber = nums[j]
//             if(firstNumber + secondNumber == sum) return [firstNumber, secondNumber]
//         }
//     } 
//     return [];
// }

// console.log(result(nums, 6))
//*****************************/

// when the array has duplicate values

// let nums = [1,3,4,2]

// var twoSum = function(nums, target) {
//     let result = []
//     for (let i = 0; i < nums.length; i++) {
//         firstNumber = nums[i]
//         console.log(firstNumber)
//         for (let j = i + 1; j < nums.length; j++) {
//             secondNumber = nums[j]
//             console.log((firstNumber + secondNumber) == target)
//             if ((firstNumber + secondNumber) == target) {
//                 if (firstNumber == secondNumber) {
//                     for (let k = 0; k < nums.length; k++) {
//                         if (firstNumber == nums[k]) {
//                             result.push(k)
//                         }
//                     }
//                     return result.slice(0,2)
//                 } else return [nums.indexOf(firstNumber) , nums.indexOf(secondNumber)]
                
//             } 
//         }
//     }
//     return []
// };

// console.log(twoSum(nums, 6))