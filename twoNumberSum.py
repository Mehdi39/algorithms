# Given an array of integers sortedArray and an integer target, 
# return indices of the two numbers such that they add up to target.

def twoNumberSum(sortedArray, target):
    for i in range(len(sortedArray) - 1):
        firstNum = sortedArray[i]
        for j in range(i + 1, len(sortedArray)):
            secondNum = sortedArray[j]
            if firstNum + secondNum == target:
                return [firstNum, secondNum]
    return []