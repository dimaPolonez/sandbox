/* Description:

Story

Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.

And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.

Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!

What a bunch of cheapskates!

Can you do it?
Kata

Given the angle (in degrees) of the hour-hand, return the time in 12 hour HH:MM format. Round down to the nearest minute.
Examples

    12:00 = 0 degrees

    03:00 = 90 degrees

    06:00 = 180 degrees

    09:00 = 270 degrees

    12:00 = 360 degrees

Notes

    0 <= angle <= 360

    Do not make any AM or PM assumptions for the HH:MM result. They are indistinguishable for this Kata.
        3 o'clock is 03:00, not 15:00
        7 minutes past midnight is 12:07
        7 minutes past noon is also 12:07

*/


/* Solutions: */

var whatTimeIsIt = function(angle) {
  
    let result = '';
    
    let numb = Math.floor(angle * Math.pow(10, 2)) / Math.pow(10, 2);
      
    let hours = Math.trunc((numb * 2) / 60);
    
    let minuts = Math.floor((numb * 2) % 60);
    
    if (String(hours).length > 1) {
        result = hours + ':';
    } else if ((hours === 0)){
        result = '12:';
    } else {
        result = '0' + hours + ':';
    }
    
    if (String(minuts).length > 1) {
        result = result + minuts;
    } else {
        result = result + '0' + minuts;
    }
    
    if ((angle === 0) || (angle === 360)) {
        return ('12:00');
    } else {
        return (result);
    }
}