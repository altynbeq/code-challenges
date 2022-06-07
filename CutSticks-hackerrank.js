function cutTheSticks(arr) {
    // Write your code here
    var output = []
    while (arr.length > 0){
        // return the current number of sticks
        output.push(arr.length)

        // Sort the stick array lowest to highest
        arr.sort( (a, b) => (a - b) );

        // Subtract the lowest value from each stick
        var cut = arr[0];
        for (var i = 0; i < arr.length; i++){
            arr[i] -= cut;
        }

        // Remove the '0' sticks from the array
        var remove = arr.lastIndexOf(0) + 1;
        arr.splice(0, remove);
    }
    return output
}

`/https://www.hackerrank.com/challenges/cut-the-sticks/problem?isFullScreen=true`/
