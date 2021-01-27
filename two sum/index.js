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
    
    // create a new Map
        // check if the difference between number in array and target is in map -
        // take its index/value (key - value pair) - push to the new array, if not - arrign a pair in the map
        //return the new array
        
       let indexCheck = new Map();
            let newArray = [];
            
            for (let i=0; i < nums.length; i++){
                let currentNumber = nums[i]
                let  difference = target - currentNumber
    
                
                if (indexCheck.has(difference)){
                    newArray.push(indexCheck.get(difference))
                    newArray.push(i)
                } else {
                    indexCheck.set(currentNumber, i)
                }
            }
            return newArray;
    };

console.log(twoSum([3,2,4], 6))