/* Description:

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
Kata.HighAndLow("1 2 3 4 5");  // return "5 1"
Kata.HighAndLow("1 2 -3 4 5"); // return "5 -3"
Kata.HighAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
 */


/* Solutions: */

function highAndLow(numbers){
  
    let arrNumbers = [];
    let result = '';
  
    numbers.split(' ').forEach((num)=>{
      arrNumbers.push(Number(num));
    });
    
    result = String(Math.max(...arrNumbers)) + ' ' + String(Math.min(...arrNumbers));
  
    return  result;
}