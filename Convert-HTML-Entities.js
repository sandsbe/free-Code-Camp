
function convertHTML(str) {
  // &colon;&rpar;
  var newstr1 = str.replace(/&/g, '&amp;');
  var newstr2 = newstr1.replace(/</g, '&lt;');
  var newstr3 = newstr2.replace(/>/g, '&gt;');
  var newstr4 = newstr3.replace(/"/g, '&quot;');
  var newstr5 = newstr4.replace(/'/g, '&apos;');
  return newstr5;
}

convertHTML("Dolce & Gabbana");
