/*
 * Complete the 'minimumDistances' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function minimumDistances(a) {
    // Write your code here
    var ans = []
    var total = []
    for(let i=0; i<a.length; i++){
        for(let j=0; j<a.length; j++){
            if(i !== j){
                if(a[i] == a[j]){
                    ans.push([a.indexOf(a[i]), a.lastIndexOf(a[i])])
                }
            }
        }
    }
    ans.forEach(item =>{
        let sum = item.reduce((a,b)=> b-a,0)
        total.push(sum)
    });
    total.sort((a,b)=> a-b)
    if(total.length < 1){
        return '-1'
    } else {
        return total[0]
    }
}

/*https://www.hackerrank.com/challenges/minimum-distances/problem?isFullScreen=true
The distance between two array values is the number of indices between them. Given , 
find the minimum distance between any pair of equal elements in the array. If no such value exists, return -1 .*/
