'use strict'

const phonebook = [
{name: 'Vlad', phone: '+380958391480'},
{name: 'Daniel', phone: '+38095439291'}
];

function findPhoneByName(name){
    for (const obj of phonebook){
        if(obj.name === name){
            return obj.phone;
        }
    }
}

console.log(findPhoneByName('Daniel'))