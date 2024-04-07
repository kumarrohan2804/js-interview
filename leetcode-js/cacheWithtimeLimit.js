var TimeLimitedCache = function() {
    this.memoryMap = {};
    this.item = 0;
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    if (this.memoryMap[key]) {
        clearTimeout(this.memoryMap[key].timer)
        this.memoryMap[key] = {
            value,
            timer: setTimeout(() => {
                delete this.memoryMap[key];
                this.item--;
            }, duration)
        }
        return true
    } else {
        this.item++;
        this.memoryMap[key] = {
            value,
            timer: setTimeout(() => {
                delete this.memoryMap[key];
                this.item--;
            }, duration)
        }
        return false;
    }
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.memoryMap[key] ? this.memoryMap[key].value : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.item;
};


const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)) // 42
console.log(timeLimitedCache.count()) // 1
