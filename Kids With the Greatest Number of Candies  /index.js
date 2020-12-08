//leetcode.com/problems/kids-with-the-greatest-number-of-candies/

/**Given the array candies and the integer extraCandies, 
where candies[i] represents the number of candies that the ith kid has.
For each kid check if there is a way to distribute extraCandies 
among the kids such that he or she can have the greatest number of candies among them. 
Notice that multiple kids can have the greatest number of candies 

Example:
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true]
**/

function kidsWithCandies(candies, extraCandies) {
    //go thou each element of the array and check
    // if the number (sum of given number and extraCandies) is greater or the same 
    //as maximum number in the original array
    //then return true

    let array = [];
    const maxCandy  = Math.max(...candies)
    
    for (let candy of candies){
        if (candy + extraCandies >= maxCandy){

             array.push(true)
        } else {
             array.push(false)
        }
    }
 return array
}

console.log(kidsWithCandies([2,3,5,1,3], 3))