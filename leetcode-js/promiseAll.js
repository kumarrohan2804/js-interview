/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (values) {
    const promise = new Promise(function (resolve, reject) { 
        let result = []; 
        let total = 0; 
        values.forEach((item, index) => { 
            item().then((res) => { 
                result[index] = res; 
                total++; 
                if (total === values.length) 
                    resolve(result); 
            }). 
                catch((err) => { 
                    reject(err); 
                }) 
        }) 
    }) 
    return promise
};

const promise = promiseAll([() => new Promise(res => res(42))])
promise.then((res=>console.log(res))); // [42]


//https://dev.to/uttarasriya/js-polyfills-part-5-promises-resolve-reject-all-race-then-catch-allsettled-any-34gj