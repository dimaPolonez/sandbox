/* Description:

Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
explode("312")
should return :
sdfgdsfg
"333122"
explode("102269")
should return :

"12222666666999999999"
 */


/* Solutions: */

function explode(s) {
  
    let arrStr = s.split('');
  
    let arrResult = [];
  
  
    arrStr.forEach((value) => {
        for (let i=0; i < Number(value); i++) {
          arrResult.push(value);
        }
    })
  
    return arrResult.join('');
}