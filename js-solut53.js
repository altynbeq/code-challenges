// problem link https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true
function choco() {
    let d = 4;
    let m = 1;
    let s = [4, 2, 1];
    let num = 0;
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= m; j++) {
            if (s.length == m & s[i] + s[j] == d & num < m) {
                num++;
            }
        }
    }
    return num;
}
choco();