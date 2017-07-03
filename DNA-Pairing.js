/* Pairs
A-T, T-A, G-C, C-G, 
*/
function pairElement(str) {
  var aArr = ["A", "T"];
  var tArr = ["T", "A"];
  var gArr = ["G", "C"];
  var cArr = ["C", "G"];
  var arr = [];
  
  for (i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "A":
        arr.push(aArr);
        break;
      case "T":
        arr.push(tArr);
        break;
      case "G":
        arr.push(gArr);
        break;
      case "C":
        arr.push(cArr);
    }
  }
  
  return arr;
  
}

pairElement("GCG");
