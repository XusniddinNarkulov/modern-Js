import 'lodash-es';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

//CommonJs
const login = require('./login.js');
console.log(login);

//
// import * as hammasi from './login.js';
// console.log(hammasi.a); //5
// console.log(hammasi.ti); //20

// //defaultni import qilish
// import def from './login.js'; //default o'zgaruvchini chaqirish
// console.log(def); //30

// let a = 10;
// console.log(a); //10

// //top-level await in modules

// const country = await fetch('https://restcountries.com/v2/name/uzbekistan');
// const countryJson = await country.json();
// console.log(countryJson);

// console.log('salom');

// function sot() {
//   let a = 100;
//   function sotibOl(nomi, soni) {
//     let b = 200;
//     console.log('hello world');
//     return b;
//   }
//   return { a, sotibOl };
// }
// console.log(sot().sotibOl());
// console.log(sot().a);

// let asd = sot();
// console.log(asd.a);
// console.log(asd.sotibOl());

class Person {
  constructor(name) {
    this.name = name;
    console.log(name);
  }
}

const neo = new Person('Neo');
