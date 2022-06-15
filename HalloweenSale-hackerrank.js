* The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER d
 *  3. INTEGER m
 *  4. INTEGER s
 */

function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    var [price, leftmoney] = [[],[]]

    do {
        if(p > m){
            price.push(p)
            s = s - p
            p = p - d
            leftmoney.push(s)
        } else if(p <= m) {
            s = s - m
            price.push(m)
            leftmoney.push(s)
        }
    } while (s > p)
    
    var count = 0
    price.forEach(item=>{
        count++
    })
    return count
}

/*https://www.hackerrank.com/challenges/halloween-sale/problem?isFullScreen=true
*/
