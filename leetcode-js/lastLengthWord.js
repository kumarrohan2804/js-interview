/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.trimEnd().split(" ");
    return arr.pop().length;
};


let s = "Hello World";
console.log(lengthOfLastWord(s));