// problem link https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true

function sorter(){
    let arr = [1,2,1,2,1,3,2];
    let ans = [];
     
    arr = arr.sort();
    ans = freq + 2;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == arr[i + 1]) {
            freq++;
            ans = freq/2;
        }
    }
    if(ans % 2 !== 0 ) {
        ans = ans + 0.5;
    } else {
        ans = ans;
    }
    return ans;
}
sorter();