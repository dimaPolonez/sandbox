/* Description:
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

*/


/* Solutions: */

function formatDuration (seconds) {
  
    let arrTime = [];
  
    let gen = 0;
    
    if (gen === seconds) {
      return 'now';
    }
  
    if (seconds >= 31536000) {
      gen = Math.floor(seconds / 31536000);
      if (gen > 1) {
          arrTime.push(`${gen} years`);
      } else {
          arrTime.push(`${gen} year`);
      }
      seconds = seconds - (gen * 31536000);
    }
  
    if (seconds >= 86400) {
      gen = Math.floor(seconds / 86400);
      if (gen > 1) {
          arrTime.push(`${gen} days`);
      } else {
          arrTime.push(`${gen} day`);
      }
      seconds = seconds - (gen * 86400);
    }
  
    if (seconds >= 3600) {
        gen = Math.floor(seconds / 3600);
        if (gen > 1) {
            arrTime.push(`${gen} hours`);
        } else {
            arrTime.push(`${gen} hour`);
        }
        seconds = seconds - (gen * 3600);
    }
  
    if (seconds >= 60) {
        gen = Math.floor(seconds / 60);
        if (gen > 1) {
            arrTime.push(`${gen} minutes`);
        } else {
            arrTime.push(`${gen} minute`);
        }
        seconds = seconds - (gen * 60);
    }
  
    if (seconds > 1) {
      arrTime.push(`${seconds} seconds`);
    } else if (seconds === 1) {
      arrTime.push(`${seconds} second`);
    }
  
    if (arrTime.length === 1) {
      return (arrTime[0]);
    } else if (arrTime.length === 2) {
      return (`${arrTime[0]} and ${arrTime[1]}`);
    } else if (arrTime.length === 3) {
      return (`${arrTime[0]}, ${arrTime[1]} and ${arrTime[2]}`);
    } else if (arrTime.length === 4) {
      return (`${arrTime[0]}, ${arrTime[1]}, ${arrTime[2]} and ${arrTime[3]}`);
    } else if (arrTime.length === 5) {
      return (`${arrTime[0]}, ${arrTime[1]}, ${arrTime[2]}, ${arrTime[3]} and ${arrTime[4]}`);
    }
  
}