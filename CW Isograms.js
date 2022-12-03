/* Description:

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
 */
sdfgsdfg

/* Solutions: */

function isIsogram(str){

    let arrStr = str.toLowerCase().split('');
  
    let result = null;
  
    let arrResult = [];
  
    let flag = true;
  
      arrStr.forEach((value) => {
        result = arrStr.filter((arrSumb) => {
          return (arrSumb === value);
       }).length;
        arrResult.push(result);
    })
  
    arrResult.forEach ((val) => {
        if (val > 1) {
          flag = false;
        }
    })
  
    return flag;
}