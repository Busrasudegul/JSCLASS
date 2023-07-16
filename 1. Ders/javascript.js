function myFunction3() {
    document.getElementById('demo2').innerHTML = 'External script çalıştı'
    document.getElementById('demo2').style.backgroundColor = 'blue'
}

/* var x = 5 ;
var y = 6 ;
var z=x + y ;
console.log('z değeri =', z) ; */

// const değişmeyen ifadeler için kullanılır;
// ilk değer atamsı zorunludur
/* const price1 = 5 ;
const price2 = 6 ;
let total = price1 + price2 ;
total=15;
console.log(total) */

// = işareti atama işaretidir biz kıyaslama için == işaretini kullanıyoruz.

/* x = y ; // y değişkeninin değeri x e atanır
x == y ; // x ile y karşılaştırması vardır.

const pi = 3.14 // number
let person = 'Mustafa' // string */

/* let x;
x = 6 ;
console.log(x)
x = 0 ;
x = 'mustafa' ;
console.log(x)

let person = "Ahmet", carName = "Volvo", price = 3000; 
console.log("person=",person,"carName=",carName,"price=",price)

let a; // yeniden tanımlanamaz

var a2;
var a2;

//let blok kapsamına sahip
{
  let b1 = 3;
  console.log(b1)
}
let b1 = 5;
console.log(b1)

{
    var c1 = 5 ;
}
console.log(c1)
c1= 7;
console.log(c1) */

// array(dizi), object(obje), function da const kullanılır.

/* const cars = ['Fiat','volvo','BMW']
console.log(cars)
console.log(cars[0])
cars[0] = 'Toyota'
cars.push('Range Rover') //eleman ekleme
console.log(cars)


const car = {
    type:'Fiat',model:'500',color:'white',price:1500
}
console.log(car)
car.model = '600'
console.log(car) */

// operators

/* let x = 3 ;
let y = 5 ;
let z = x * y;
console.log(z) */

/* let x = 5;
let y = 2;
z = x % y;
console.log(z) */

// let x = 5 ** 2;
// console.log(x)

// let x = 100 + 50 * 3 ;
// console.log(x)

/* let x = 5;
x = x + 2;
console.log(x)
x += 3; // x = x+3 ;
console.log(x)
x++; // x = x+1;
x--; // x = x-1;
console.log(x); */

/* let text1 = 'Mustafa'
let text2 = 'Samet'
let text3 = text1 + ' ' + text2 + 5 + 10
console.log(text3) */

/* let text1 = 'ne güzel'
text1 += ' bir gün'
console.log(text1)

let x = 5 + 3 + '5' ;
console.log(x) //85
let y = '5' + 3;
console.log(y) //53 */

// data types

/* let length=16 //numbers

let color = 'red' // string

// boolean

let x = true;
let y = false;

// object

const person = {firstName:'John',lastName:'Doe'}

//array

const cars = ['Fiat','Citroen',3]

//date

const date = new Date("2023-03-25")
console.log(date) */

/* let y = 123e3;
console.log(y) // 123000
let z = 123e-2
console.log(z) */

let x = 3;
let y = 3;
let z = 5;
console.log(x==y) // true

console.log(typeof 'mustafa')


