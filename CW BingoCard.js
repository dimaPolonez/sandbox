/* Description:

After yet another dispute on their game the Bingo Association decides to change course and automate the game.

Can you help the association by writing a method to create a random Bingo card?
Bingo Cards

A Bingo card contains 24 unique and random numbers according to this scheme:

    5 numbers from the B column in the range 1 to 15
    5 numbers from the I column in the range 16 to 30
    4 numbers from the N column in the range 31 to 45
    5 numbers from the G column in the range 46 to 60
    5 numbers from the O column in the range 61 to 75

Task

Write the function get_card()/getCard(). The card must be returned as an array of Bingo style numbers:

[ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]

The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random. 
 */


/* Solutions: */

function getCard() {
    let B = [];
    let I = [];
    let N = [];
    let G = [];
    let O = [];
    
    let result = [];
    
    function randomB(name, min, max) {
        let arrResult = [];
        let randomNum = null;
        let count = null;
    
        if (max === 45) {
            unique:
            while (count < 4) {
                randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
                if (arrResult.indexOf(name + randomNum) === -1) {
                    arrResult.push(name + randomNum);
                    count++;
                } else {
                    continue unique;
                }
            }
            return arrResult;
        } else {
            unique:
            while (count < 5) {
                randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
                if (arrResult.indexOf(name + randomNum) === -1) {
                    arrResult.push(name + randomNum);
                    count++;
                } else {
                    continue unique;
                }
            }
            return arrResult;
        }
    }
    
    B = randomB('B', 1, 15);
    I = randomB('I', 16, 30);
    N = randomB('N', 31, 45);
    G = randomB('G', 46, 60);
    O = randomB('O', 61, 75);
    
    result = result.concat(B, I, N, G, O);
    
    return result;
}