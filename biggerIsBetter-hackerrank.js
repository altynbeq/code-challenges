function biggerIsGreater(w) {
  let [highestI,highestJ] = [-1,-1]

  for (let i = 0; i < w.length - 1; i++) {
    w[i] < w[i + 1] ? highestI = i : null
  }

  if(highestI === -1) {return 'no answer'}

  for (let j = highestI + 1; j < w.length; j++) {
    w[j] > w[highestI] ? highestJ = j : null
  }

  let wArr = w.split('')

  let temp = wArr[highestI]
  wArr[highestI] = wArr[highestJ]
  wArr[highestJ] = temp

  let wArrStart = wArr.slice(0, highestI + 1)
  let wArrEnd = wArr.slice(highestI + 1)

  return wArrStart.concat(wArrEnd.reverse()).join('')
}

`/ Lexicographical order is often known as alphabetical order when dealing with strings. 
A string is greater than another string if it comes later in a lexicographically sorted list.

https://www.hackerrank.com/challenges/bigger-is-greater/problem?isFullScreen=true `/
