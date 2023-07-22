/* for(let i = 0; i < 5;i++) {
    console.log(`i değeri:${i} döngü çalıştı`)
} */

//ilk kısım hakkında

/* let i = 0
for(; i < 5;i++) {
    console.log(`i değeri:${i} döngü çalıştı`)
} */

/* const cars = ["BMW","Volvo","Ford"]
let i = 0 ;
let len = cars.length ;
let text = "";
for(; i < len ; i++){
    text += cars[i] + "\n"
    //text = text + cars[i] + "\n"
} 
console.log(text) */

/* const arr = [1,2,3,4,5,6]

for(let l = 0, r= arr.length - 1; l < r ; 1++, r--){
    console.log(arr[1],arr[r])
} */

// for in // nesne özellikleri arasında geçiş yapar, dizide de kullanılabilir

/* const person = {
    fname: "John",lname:"Day",age:25
}
let text = ""
for(let x in person){
    text += person[x]
}
console.log(text) */

/* const number = [45,4,9,40]
for(let x in number){
    console.log(x, number[x])
} */

/* const number = [45,4,9,40]
let text = ""
number.forEach(myFunction)
function myFunction(value,index,array) {
   console.log("value:",value)
   console.log("index", index)
   console.log("array",array)
   text += value
}
console.log(text) */

/* let language = "Javascript"
let text = ""
for (let x in language){
    console.log(x,language[x])
} */

// const cars = ["Volvo","Fiat","Mercedes"]
//const cars = "Mercedes"
//const cars = {model:"mercedes"} // objeler için for in kullanılır
/* let text = ""
for(let x of cars){
    console.log(x)
} */

// while
/*let i = 0;
while( i < 10) {
    console.log(i)
    i++;
}

// yukarıdakinin aynısı
for (let i;,<10;i++){
    console.log(i)
} */

// do-while

/* let i = 0 ;
do {
    console.log(i)
    i++;
}
while(i<10)

// break continue ifadeleri

for(let i=0; i<10; i++) {
    if(i === 3){
        //break;
        continue;
    }
    console.log(i)
} */

// js errors

/* try {
    console.log(mesajımız)
}
catch(err){
    console.log(err.message)
}
finally{
    console.log("fonksiyon bitti çalışma tamamlandı") // hata varsa da yoksa da çalışır
} */

/*let x = ""
try {
    if(x.trim() == "") throw "empty value"
}
catch(err){
    console.log(err)
}
finally{
    console.log("work is done")
} */

/* let x = NaN
try {
    if(isNaN(x)) throw "value is not a number"
}
catch(err){
    console.log(err)
}
finally{
    console.log("work is done")
} */

/* let x = "12"
try {
    x = Number(x);
    if(x<5) throw "çok küçük"
    if(x>10) throw "çok büyük"
}
catch(err){
    console.log(err)
}
finally{
    console.log("work is done")
} */

// this kullanımı

/* console.log(this)
//alert("bu bir uyarıdır")

const person = {
    name: "musa",
    description: function(){
        return this;
    }
}
console.log(person.description()) */

//constructor fonksiyonlar

/* const person = {
    name: "musa",
    surname: "ay"
}
const person2 = {
    name: "ahmet",
    surname: "deniz"
} */

/* function Person(first,last,age,eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.showInfos = function(){
        console.log(this.firstName," ",this.lastName," ",this.age)
    }
}
const myFather = new Person("John","Day",50,"blue")
myFather.showInfos();
const myMother = new Person("Marry","Day",48,"green")
myMother.showInfos(); */

/* class Person {
    constructor(first,last,age,eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    }
    showInfos(){
        console.log(this.firstName," ",this.lastName," ",this.age)
    }
}
const myFather = new Person("John","Day",50,"blue")
console.log(myFather) */
//new Person()

// es6 arrow func

/* function myFunction(value){
    return 34 + value
}
let deger = myFunction(12)
console.log(deger) */




/* let myFunction = ""
myFunction = function(){
    return ("hello world")
}
console.log(myFunction()) */


/* let myFunction = () => { // arrow fonksiyon olduğunu belirtir
    return "Hello World"
}
console.log(myFunction()) */

//let hello = (value) => "Hello World" + value;
//console.log(hello(" and Turkey"))

const person1 = {
    firstName: "ahmet",
    description: function() {
        return this
    }
}
console.log(person1.description())

const person2 = {
    firstName: "ahmet",
    description: () => this
}
console.log(person2.description())
console.log(this)

// arrow fonksiyonu içindeki this kendi kapsamını değil global kapsamı gösterir
