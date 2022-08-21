# Given an array of integers nums and an integer target, 
# return indices of the two numbers such that they add up to target.

array = [3,4,5,-4,8,11,1,-1,6]

# method 1
def twoNumberSum(array, target):
    for i in range(len(array) - 1):
        firstNum = array[i]
        for j in range(i + 1, len(array)):
            secondNum = array[j]
            if firstNum + secondNum == target:
                return [firstNum, secondNum]
    return []

print(twoNumberSum(array, 10))