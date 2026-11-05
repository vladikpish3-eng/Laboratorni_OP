function array() {
    const items = []

function get(index) {
        return items[index]
    }

    get.push = function(value) {
        items.push(value)
    }

    get.pop = function() {
        return items.pop()
    }

    return get
}

const array2 = array()

array2.push('first')
array2.push('second')
array2.push('third')

console.log(array2(0)) 
console.log(array2(1)) 
console.log(array2(2)) 

console.log(array2.pop()) 
console.log(array2.pop()) 
console.log(array2.pop()) 
console.log(array2.pop()) 