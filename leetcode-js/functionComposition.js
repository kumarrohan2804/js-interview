/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function (x) {
        while (functions.length) {
            let fn = functions.pop();
            x = fn(value);
        }
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

const fn = compose([x => x + 1, x => x * x, x => 2 * x])
fn(4) // 9