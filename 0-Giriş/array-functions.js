const users = ["Mehmet", "Ahmet", "Murat"];
const usersObj = [
{
    name:"Mehmet",
    age: 28
},
{
    name:"Ahmet",
    age: 19
},
{
    name:"Murat",
    age: 35
},
{
    name:"Mehmet",
    age: 22
}
];

/*
push
map
reduce
find
filter
some
every
includes
*/

//==========================================================================================================================================================================
//push -- arrayin sonuna belirtilen elemanı ekler
//==========================================================================================================================================================================

users.push("Ayşe");
users.push(2);
//console.log(users);

//==========================================================================================================================================================================
//map -- arrayin bütün elemenlarını sırayla döner (for'la uğraşmamıza gerek kalmaz)
//==========================================================================================================================================================================

users.map((item)=>{
//console.log(item);
});

//==========================================================================================================================================================================
//reduce -- arrayin bütün elemanlarını belirtilen işlemden geçirerek tek elemana düşürüyor (Toplam, çarpım vs.) 4 tane değişken alır 
// acc = başlangıç değeri, sonda 0 olarak belirttim bunu farklı bir değer olarak da belirtebiliriz
//==========================================================================================================================================================================

const numbers =[1,2,3,5];
let total = numbers.reduce(function(acc, item, index, array){
    return acc+item;
},0);
//console.log(total);

//==========================================================================================================================================================================
//find -- arrayin içinde arama işlemi yapar / Sadece koşullara uygun olan eleman döner, eğer uygun eleman yoksa undefined döner / Bulduğu ilk elemanı döner
//==========================================================================================================================================================================

const result = usersObj.find((item)=> item.name === "Mehmet" && item.age > 23); 
const result2 = usersObj.find((item)=> item === "Mehmets"); //undefined
//console.log(result);
//console.log(result2);

//==========================================================================================================================================================================
//filter -- array'e filtreleme işlemi yapar
//==========================================================================================================================================================================

// const filtered = usersObj.filter((item)=> item.name ==="Mehmet" && item.age>19);
const filtered = usersObj.filter(({name,age})=> name ==="Mehmet" && age>19);
//console.log(filtered);

//==========================================================================================================================================================================
//some -- arrayin içindeki elemanlardan herhangi biri verilen koşula uyuyorsa TRUE/FAlSE çevirir
//==========================================================================================================================================================================

const some = usersObj.some(item => item.age === 19);    //true
const some1 = usersObj.some(item => item.age === 18);   //false
//console.log(some);
//console.log(some1);

//==========================================================================================================================================================================
//every -- arrayin içindeki tüm elemanların şarta uymasını bekler TRUE/FALSE çevirir
//==========================================================================================================================================================================

const every = usersObj.every(item => item.age === 35);  //false
const every1 = usersObj.every(item => item.age > 10);   //true
// console.log(every);
// console.log(every1);

//==========================================================================================================================================================================
//includes -- array içinde bir eleman aramamıza yarar TRUE-FALSE çevirir
//==========================================================================================================================================================================

const fruits = ["apple", "pineapple", "banana"];
const isIncluded = fruits.includes("banana");   //true
const isIncluded1 = fruits.includes("cherry");   //false
// console.log(isIncluded);
// console.log(isIncluded1);