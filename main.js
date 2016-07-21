//This is the "central" file that take input from the other three, and contains all remaining logic
/*

 0
-|-
 /\

*/

exports.randomInt = randomInt;

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

