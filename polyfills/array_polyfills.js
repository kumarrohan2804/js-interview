
let extraMethods = {
    rohanFilter: function (fn) {
        if (this == null) {
            throw new TypeError('rohanFilter is called on null or undefined');
        }
        if (typeof fn !== 'function') {
            throw new TypeError(fn + ' is not a function');
        }
        let arr = Object(this);
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    },
    rohanMap: function (fn) {
        if (this == null) {
            throw new TypeError('rohanFilter is called on null or undefined');
        }
        if (typeof fn !== 'function') {
            throw new TypeError(fn + ' is not a function');
        }
        let arr = Object(this);
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(fn(arr[i]));
        }
        return newArr;
    },
    rohanReduce: function (fn, initialValue) {
        if (Array.isArray(this) == false) {
            throw new TypeError('rohanReduce is called on null or undefined')
        }
        if (typeof fn !== 'function') {
            throw new TypeError(fn + ' is not a function');
        }
        let arr = Object(this);
        let accumulator = initialValue;
        for (let i = 0; i < arr.length; i++) {
            accumulator = fn(accumulator, arr[i]);
        }
        return accumulator;
    }
};
