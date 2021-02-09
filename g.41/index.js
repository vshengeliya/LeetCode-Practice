
// Given an unsorted integer array nums, find the smallest missing positive integer.

 

// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1
 

// Constraints:

// 0 <= nums.length <= 300
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you implement an algorithm that runs in O(n) time and uses constant extra space?




function firstMissingPositive(nums) {

    //1ST SOLUTION
        
    //        nums = [...new Set(nums)];
    //       nums.filter((num)=> num>0).sort((a,b)=> a-b);
          
    //       let j = 1;
    //       for (let i=0; i<nums.length; i++){
    //         if (j === nums[i]){
    //           j++;
    //         }
    //       }
    //         return j;
          //time complexity = o(nLogN)
          
    //2ST SOLUTION
          
          const obj = {};
          
          for (let i=0; i < nums.length; i++){
            obj[nums[i]] = 1;
          }
          for (let i=1; i <= nums.length; i++) {
            if (!obj[i]){
              return i
            }
          }
          return nums.length + 1;
          
          // time compexity O(n);
          //space complexity O(n)
          
    //3RD SOLUTION
    //       for (let i=0; i<nums.length; i++){
    //         let index = nums[i] - 1
            
    //         if(i == index || nums[i] == nums[index]){
    //           return null;
    //         } else if (index >= 0 && index <= nums.length -1){
    //           [nums[i], nums[index]] = [nums[index], nums[i]];
    //            i--;
    //         }
    //         for (let i=0; i< nums.length; i++){
    //           if(i+1 != nums[i]){
    //             return i+1;
    //           }
    //         }
    //         return nums.length + 1;
    //       }
        } 