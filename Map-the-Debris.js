
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var i = 0;
  
  function calc (val) {
    var val = arr[i]['avgAlt'];
    var pow = earthRadius + val;
    var equation = Math.pow(pow, 3)/GM;
    var sqrRoot = Math.pow(equation, 0.5);
    var finEq = Math.round(2*Math.PI*sqrRoot);
    delete arr[i]['avgAlt'];
    arr[i]['orbitalPeriod'] = finEq;
  }
  
  while (i<arr.length) {
    calc(arr);
    i++;
  }
  
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
