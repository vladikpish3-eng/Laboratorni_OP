'use strict'

const fn = () => {
    const obj1 = {name: 'Artoria'};
    let obj2 = {name: 'Pendragon'};


obj1.name = 'Artoria Pendragon';
obj2.name = 'Saber';

// obj1 = {name: 'Stalin Lenin Zédōng' }; // ПОМИЛКА , бо obj1 - константа

obj2 = {name:'Atroria Pendragon'}; 
}

module.exports = {fn};
