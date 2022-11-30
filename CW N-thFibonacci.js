/* Description:

I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

 */


/* Solutions: */

function nthFibo(n) {
  
    let arrFull = [0, 1];
  
    let gen = 0;
  
    if (n < 3) {
        return arrFull[n-1];
    } else if (n >=3) {
        for (let i = 0; i < (n-2); i++) {
            gen = arrFull[i] + arrFull[i+1];
            arrFull.push(gen);
        }
        return gen;
    }
}