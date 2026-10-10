'use strict'

const array = [true, 'hello', 5, 12, -200, false, 15, 'word' ,'W.W.','9']

const hash = { number: 0, string: 0, boolean: 0 };

function testFunc(mass) {
  for (const element of array) {
      if (typeof element === 'string') {
       hash.string += 1
    }
      if(typeof element === 'boolean') {
       hash.boolean += 1
 }
      if(typeof element === 'number') {
       hash.number += 1
   }
  }
 }
testFunc(array);
console.dir(hash)