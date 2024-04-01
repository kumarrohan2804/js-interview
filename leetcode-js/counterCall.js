/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let value = 10;
    return function() {
        return value++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12