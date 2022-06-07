function equalizeArray(arr) {
    // Write your code here
    var [mostF, count, item, ans] = [[1],[0],[],[0]]
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr.length; j++) {
            if(arr[i] == arr[j]){count++}
            if(mostF<count){
                mostF=count
                item = arr[i]
            }
        }
       count = 0; 
    }
    arr.forEach(function(el){
        el !== item ? ans++ : null
    })
    return ans 
}


` Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.
/https://www.hackerrank.com/challenges/equality-in-a-array/problem?isFullScreen=true`/
 
