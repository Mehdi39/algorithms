package main

func TwoSumBrute(nums []int, target int) []int {
	n := len(nums)
	for i := 0; i < n-1; i++ {
		for j := i + 1; j < n; j++ {
			if nums[i]+nums[j] == target {
				return []int{i, j}
			}
		}
	}
	return []int{}
}

func TwoSumHashMap(nums []int, target int) []int {
	indexMap := make(map[int]int)
	for currentIndex, currentNum := range nums {
		if requireIdx, isPresent := indexMap[target-currentNum]; isPresent {
			return[currentNum] = currentIndex
		}
		return []int{}
	}
}
