// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

//need reafctor

var twoSum = function(nums, target) {
    
    let array = []
    let indexArray = []
    
    for (let i=0; i<nums.length; i++){
        
        for (let j = 0; j<nums.length; j++){
            
            if (nums[i]+nums[j] === target){
                array.push(nums[i])
            }   
            
            for (let k=0; k < array.length; k++){
               indexArray.push(k)
            }
        }  
                      
    }  
    return Array.from(new Set (indexArray))
};

console.log(twoSum([2,7,11,15], 9))