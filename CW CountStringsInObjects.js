/* Description:

Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3
*/


/* Solutions: */

function strCount(obj){
  
    let result = null;
    let arrObj = Object.values(obj);
    
    arrObj = arrObj.flat(Infinity);
    
    arrObj.forEach((value) => {
        if ((typeof value === 'object') && (value != null)){
            arrObj.push(Object.values(value));
        }  
    })
    
    arrObj = arrObj.flat(Infinity); 
    
    arrObj.forEach((value) => {
      if (((typeof value) === 'string')) {
          result++;
      }
    });
      return result;
}