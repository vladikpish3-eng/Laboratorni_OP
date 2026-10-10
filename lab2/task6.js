'use strict'

function average(a,b) {
    return(a+b)/2
}

function square(x) {
    return(x*x)
}

function cube(x) {
    return(x*x*x)
}

function calculate() {
    const array = [];
    for (let i = 0; i <= 9 ; i++) {
        const x = average(square (i),cube (i));
        array.push(x)
}
return array;
}

console.log(calculate())