/* Description:
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/


/* Solutions: */

function disemvowel(str) {
    const dictArr = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
   
    let resultArr = str.split('');
   
    resultArr = resultArr.filter((value) => {
       return (dictArr.includes(value) === false)
    })
   
    return resultArr.join('');
}