
// var slugify = require('slugify');   //import işlemi, es6 ile buna gerek kalmadı. 3.satırdaki gibi yazabıliriz ama öncesinde package.json 6.satırı eklemeliyiz
import slugify from "slugify";
const title = slugify('some string bla bla la 2, *' , '_'); // sağ kısım boşluklara ne gelecepini belirler

console.log("Slugify eklentisi sonucu: "+title);

import {topla,hello,cikar} from './my-module.js'; //import yapıyoruz

console.log("Topla Fonksiyonunun Sonucu: "+topla(3,8)); //topla fonksiyonunu ekrana bastırdık
hello("alihan");    //hello fonksiyonunu çağırdık
console.log("Cikar fonksiyonunun sonucu: "+cikar(5,3));