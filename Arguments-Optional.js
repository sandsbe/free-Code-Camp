
function addTogether() {
  // 1. Check if input/s is/are a number
  var checkNum = function (num) {
    if (typeof num !== 'number') {
      return undefined;
    } else {
      return num;
    }
  };
  
  // 2. Count number of arguments/parameters
  // 3. Check that each argument is a number by passing through checkNum function
  // 4. Add arguments
  
  if (arguments.length > 1) {
    var a = checkNum(arguments[0]);
    var b = checkNum(arguments[1]);
    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a+b;
    }
  } else {
   // 5. If there is a single argument
    var c = arguments[0];
    
    if (checkNum(c)) {
      return function (args2) {
        if (c === undefined || checkNum(args2) === undefined) {
          return undefined;
        } else {
          return c + args2;
        }
      };
    }
  }
  
}

addTogether("http://bit.ly/IqT6zt");
