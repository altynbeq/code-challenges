// problem link https://www.hackerrank.com/challenges/migratory-birds/problems
function countbirds() {
    let num = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
    num = num.sort();
    let ans = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] == num[i + 1]) {
            ans.push(num[i]);
        }
    }
    for (let j = 0; j < ans.length; j++) {
        let freq = 0;
        if (ans[j] == ans[j + 1]) {
            ans = ans[j]
        }
    }
    return ans;
}
countbirds();