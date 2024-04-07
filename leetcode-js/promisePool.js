var promisePool = function (functions, n) {
    let resolveList = [];
    return function (...args) {
        while (n > 0) {
            let fn = functions.pop();
            fn().then((value) => {
                resolveList.push(value);
                n++;
            })
            n--;
        }
    }
}