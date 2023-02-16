function solution(input, markers) {
  // split input into new lines
 return input.split('\n').map(line => {
      // check for each marker if present in line
      for (let marker of markers) {
        let index = line.indexOf(marker);
        // if present
        if (index !== -1) {
          // modify the line 
          line = line.substring(0, index).trim();
          break;
        }
      }
      // remove white spaces
      return line.trimRight();
    }).join('\n');
};


// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. 
// Any whitespace at the end of the line should also be stripped out.

// Example:
// Given an input string of:
// apples, pears # and bananas
// grapes
// bananas !apples

// The output expected would be: apples, pears grapes bananas
