function sumOfParts(num) {
    return num.split('').reduce((a, b) => a + +b, 0)
} 

function orderWeight(string) {
    return string
        .split(' ')
        .sort((a, b) => sumOfParts(a) - sumOfParts(b) || a > b || -(a < b))
        .join(' ');
}

`/describe("Order Weights",function() {
it("Basic tests",function() {
    Test.assertEquals(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99")
    Test.assertEquals(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")
})})
