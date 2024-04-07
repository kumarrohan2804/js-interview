var throttle = function (fn, t) {
    let isRunning = false;
    let nextArgs = null;
    return function (...args) {
        if (!isRunning) {
            isRunning = true;
            fn(...args);
            setTimeout(helper, t);
        } else {
            nextArgs = args;
        }

        function helper() {
            console.log("nextArgs", nextArgs);
            if (nextArgs) {
                fn(...nextArgs);
                isRunning = true;
                nextArgs = null;
                // setTimeout(helper, t);
            } else {
                isRunning = false;
            }
        }
    }
}

const throttled = throttle(console.log, 2000);
throttled("logged immediately");
throttled("logged after a certain time ");
throttled("logged after more the time ");