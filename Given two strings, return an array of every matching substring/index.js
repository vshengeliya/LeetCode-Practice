// Given two strings, return an array of every matching substring

// Assume you are given a single word strings with no white space.
// Letter case does not matter! the return should be in all lowercase or all uppercase.
// If there is no sub string return false.
// Everything else is up to your discretion!

// Example Input and Output
// in: 'te', 'test'
// Out: ['t', 'te', 'e']



function matchingSubStrings(str1, str2) {
    
    let newArray = [];
    const first = str1.split('')
    
    if (str2.length >= str1.length){
        for (let i=0; i <= str2.length; i++ ){
            if (first.includes(str2[i])){
                 newArray.push(str2[i])
                } 
            if (str2.includes(str1)){
                newArray.push(str1)
                 }
             }  
    }
    console.log( new Set(newArray))
    
}
