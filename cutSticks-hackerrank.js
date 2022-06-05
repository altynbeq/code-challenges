function cutTheSticks(arr) {
    // Write your code here
    var ans = []
    while(arr.length !== 0){
    ans.push(arr.length)
    var smallestDigg = Math.min.apply(Math, arr)
    arr = arr.filter(function(el){
        if(el > smallestDigg) {
            return el
        }
    });
    }
    return ans
}


`/https://www.hackerrank.com/challenges/cut-the-sticks/problem?isFullScreen=truez`/
