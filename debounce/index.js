

// normal way of debouncing 

// let shouldGetChance;

// function debounce(fn, delay, value) {

//     if (shouldGetChance) {
//         console.log(value, shouldGetChance);
//         clearTimeout(shouldGetChance);
//     }
//     shouldGetChance = setTimeout(() => {
//         fn(value);
//     }, delay);
// }


// let input = document.getElementById('debounce');
// input.addEventListener('input', (e) => {
//     debounce(console.log, 1000, e.target.value);
// })
// console.log(input);



/**
 * Debouncing using closure 
 */

function debounce(fn, delay) { 
    let timer;
    return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this,args), delay);
    }
}
function print(value) {
    console.log(this);
    console.log(value);
}
const debounceInputChange = debounce(print, 1000);
let input = document.getElementById('debounce');
input.addEventListener('input', (e) => { 
    debounceInputChange(e.target.value);
});
