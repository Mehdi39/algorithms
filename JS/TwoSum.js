var twoSum = function(nums, target) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = i
    }
    
    console.log(obj)

    for (let i = 0; i < nums.length; i++) {
        let curr = target - nums[i]
        console.log("on line 16: " + [i, obj[curr]])

        if(obj[curr] && i != obj[curr]) {
            return [i,obj[curr]]
        }
    }
};

var twoSum = (nums, target, map = new Map()) => {
    for (let index = 0; index < nums.length; index++) {/* Time O(N) */
        const num = nums[index];
        const complement = (target - num);
        const sumIndex = map.get(complement);

        const isTarget = map.has(complement)
        if (isTarget) return [ index, sumIndex ];

        map.set(num, index);                                /* Space O(N) */
    }

    return [ -1, -1 ];
}

var twoSum = function(nums, target) {
    for(let p1 = 0; p1 < nums.length; p1++) {
        const numberToFind = target - nums[p1];

        for(let p2 = p1 + 1; p2 < nums.length; p2++) {
            if(numberToFind === nums[p2]) {
                return [p1, p2];
            }
        }
    }
    return null;
};