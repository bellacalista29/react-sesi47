let score;
console.log(score);

score = 100;
console.log(score);

score = 90;
console.log(score);

let studentName = 'fulan';
console.log(studentName);

const isDone = false;
console.log(isDone);

//beda kutip di dalam string
console.log('<div class="blue"></div>');

//untuk escape kutip yang sama dengan pembatas dlm string
console.log('He\'s good');

console.log("A: \"Hey\"");

let pet = "Dog";

//jumlah karakter dari sebuah string
console.log('NodeJS'.length);
console.log(pet.length);

//menampilkan huruf pertama
console.log(pet[0]);

//menampilkan huruf terakhir
let idx = pet.length-1; // index terakhir
console.log(pet[idx]);

//menampilkan huruf 'o'
console.log(pet[1]);

//kita tidak bisa update per karakter dr string dengan index
pet[1] = 'i';

//akan tetap tampil 'o'
console.log(pet[1]);

//dan akan tetap tampil 'Dog'
console.log(pet);

console.log('H' + '8');

//apapun yang di + dengan string akan menjadi string
console.log('H' + 8);

//cara unik mengubah number menjadi string
console.log(28 + '');

console.log('' + true);

let fullName = 'John';
fullName += ' Doe';
console.log(fullName);

let output = 'Pengenalan';
output += ' Modern';
output += ' Javascript';
output += ' by';
output += ' Hacktiv8';
console.log(output);

let text1 = 'Mari';
let text2 = 'belajar';
let text3 = 'koding';
console.log(text1, text2, text3);

let text4 = 'Belajar';
let text5 = 'koding';
console.log(`${text1} ${text2}`);

//bantuan variable penampung
let kalimat = `${text1} ${text2}`;
console.log(kalimat);

let panjang = 10;
let lebar = 5;
console.log(`${panjang} x ${lebar} = ${panjang * lebar}`);

//value comparison
console.log(10 == '10');

//strict comparison
console.log(10 === '10');

score = 20;

//assign comparison result
let isPass = score === 20;
console.log(isPass);

//deklarasi
let arr1 = new Array(10,20,30,40,50);

//deklarasi array dengan panjang/size 5
let arr2 = new Array(5);

//deklarasi array dengan panjang 1 dan langsung mengisi dengan 1 string
let arr3 = new Array('Foo');

console.log(arr1);
console.log(arr2);
console.log(arr3);

//deklarasi kosongan
let arr = [];

let arrNums = [1,2,3,4,5];
let arr_names = ["a", "Agus", "Rini"];

console.log(arrNums);
console.log(arr_names);

let fruits1 = ['mango', 'apple', 'pear'];
let fruits2 = ['papaya', 'guava'];
let fruits3 = ['strawberry', 'pineapple'];

//join fruits2 to fruits1
fruits1.push.apply(fruits1,fruits2);
console.log(fruits1);

//menggunakan spread operator
let allFruits = [...fruits2, ...fruits3];
console.log(allFruits);

//tanpa spread operator
let invalidJoin = [fruits2,fruits3];
console.log(invalidJoin);

