'use strict';

const phonebook = {
  Vlad: '+380958761839',
  Daniel: '+380958721123',
};

function findPhoneByName(name){
    return phonebook[name];
}

console.log(findPhoneByName('Vlad'));