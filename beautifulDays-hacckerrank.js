function beautifulDays(i, j, k) {
    // Write your code here
    var range = []; 
    var ans = 0;
    for(var c=i; c<=j; c++) {
        range.push(c);
    }
    range.forEach(function(el,) {
        var elem = el.toString().split('').reverse().join('');
        var formula = elem - el;
        if(formula % k == 0) {
            ans++;
        }
    })
    return ans;
}

`/Given a range of numbered days,  and a number , determine the number of days in the range that are beautiful. 
  Beautiful numbers are defined as numbers where  is evenly divisible by . If a day's value is a beautiful number, it is a beautiful day.
  Return the number of beautiful days in the range.`/
