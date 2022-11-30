/* Description:

One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.

One of the ways to determine brightness of a color is to find the value V of the alternative HSV (Hue, Saturation, Value) color model. Value is defined as the largest component of a color:

V = max(R,G,B)
You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors!

For example,

brightest(["#001000", "#000000"]) == "#001000"
brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"
If there are multiple brightest colors, return the first one:

brightest(["#00FF00", "#FFFF00", "#01130F"]) == "#00FF00"
Note that both input and output should use upper case for characters A, B, C, D, E, F.

 */


/* Solutions: */

function brightest(colors){
  
    let maxArr = [];
  
    function maxRGB(hex) {
        let num = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  
        let arrNum = [];
      
        arrNum.push(parseInt(num[1], 16), parseInt(num[2], 16), parseInt(num[3], 16));
  
        return Math.max.apply(null, arrNum);
      }
  
    colors.forEach((value) => {
        maxArr.push(maxRGB(value));
    })
  
    return colors[maxArr.indexOf(Math.max.apply(null, maxArr))];
}