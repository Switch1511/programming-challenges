/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    let map = new Map();


    for(let x = 0; x < nums.length; x++){
        const complement = target - nums[x];
        if(map.has(complement)){
            return [x, map.get(complement)]
        }
        map.set(nums[x], x)
    }
};

console.log(twoSum([2,7,11,15], 9))
