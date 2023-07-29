//json (javascript object notation)
/* let text = '{"firstName":"Ahmet","lastName":"Aydın"}'
console.log(text)
let text2 = '{"employees":[{"firstName":"Ali","lastName":"Bay"},{"firstName":"Hasan","lastName":"Bayındır"}]}'
console.log(JSON.parse(text))
console.log(JSON.parse(text2))

let object = {
    firstName: "Ayşe",
    lastName: "Yılmaz",
}
console.log(JSON.stringify(object))
*/

//stringify ifadesi json objesine dönüştürür. tipi text olsa da dönüşümü json a aittir. String dönüşümü için kullanılan ifade toString dir.

//object details
/*
const person = {
    firstName: "Mustafa",
    lastName: "Önal",
    age: 30,
    eyeColor:"brown",
}
const myArray = Object.values(person)
console.log(myArray)
const myArray2 = Object.keys(person)[0] //firstname
console.log(myArray2)
const myArray3 = Object.entries(person)
//const myArray3 = Object.entries(person)[0][0] //firstname
console.log(myArray3)

delete person.age;
console.log(person)
*/

//function details

/*
function myFunction(x,y) {
    if (y ===undefined) {
        y = 2;
    }
    return x+y
}
console.log(myFunction(4))
*/

/* function myFunction(x,y=2) {
    return x+y
}
console.log(myFunction(1)) //cevap 3
*/

/*
function sum(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg
    }
    return sum;
}
let x = sum(1,2,3,4)
console.log(x)
*/

function self1() {
    console.log("self1 work")
}
//self1()
(function self2(){
    console.log("self2 work")
})();
//self-invoke

// class details

/*
class Car {
    constructor(name) {
        this.name = name
    }
    hello(){
        return "hello"
    }
    static hello2(){
        return "static hello"
    }
}
let myCar = new Car("Ford")
console.log(myCar.hello())
console.log(Car.hello2())
console.log(myCar)
*/

/*
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("İsim: " + this.name + " Yaş: " + this.age)
    }
}
class Employee extends Person {
    constructor(name,age,salary){
        super(name,age);
        this.salary = salary
    }
    showInfos(){
        console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary)
    }
    raiseSalary(amount){
        this.salary += amount
    }
    
}
const emp = new Employee("Mustafa",30,4000);
console.log(emp)
const per = new Person ("Enes",32)
console.log(per)
emp.showInfos()
emp.raiseSalary(500)
emp.showInfos()
*/

// js callbacks
/*
function myDisplayer(message){
    console.log(message)
}
function myFirst(){
    myDisplayer("Hello")
}
function mySecond(){
    myDisplayer("Goodbye")
}
myFirst();
mySecond();
*/

/* function myDisplayer(some){
    console.log(some)
}
function myCalculator(num1,num2){
    let sum = num1 + num2
    myDisplayer(sum)
}
myCalculator(5,4)
*/

/*function myDisplayer(some) {
    console.log(some)
}
function myCalculator(num1,num2){   
let sum = num1 + num2
return sum;
}
let result = myCalculator(3,4)
myDisplayer(result)
*/

/*
function myDisplayer(some){
    console.log(some)
}
function myCalculator(num1,num2,myCallback){
    let sum = num1 + num2;
    console.log("calculator fonksiyonu çalıştı")
    myCallback(sum)
}
myCalculator(2,3,myDisplayer)
*/

//settime, setinterval

/*function myFunction() {
    console.log("function running...")
}
setTimeout(myFunction,3000) */

/* function myFunction() {
    console.log("function running...")
}
setInterval(myFunction, 3000) */

// promise objesi
/*
let myPromise = new Promise(function(myResolve,myReject){
    myResolve(); //başarılı olduğunda bu çalışır
    myReject(); //başarısız olduğunda
})
myPromise.then(
    function(value) { kod başarılı olduğunda},
    function(error) {kod başarısız olduğunda}
)
*/

function myDisplayer(some){
    console.log(some)
}
/*let myPromise = new Promise(function(myResolve,myReject){
    let x = 4;
    if(x == 0){
        myResolve("OK")
    } else{
        myReject("Error")
    }
})*/

let myPromise = new Promise(function(){
    let x = 0;
    if(x == 0)
    return Promise.resolve("OK")
    else
    return Promise.reject("Error")
})

/*myPromise.then(function(value){
    myDisplayer(value)
}, function(error){
    myDisplayer(error)
}) */
myPromise.then(function(value){
    myDisplayer(value)
})
.catch(function(error){
    myDisplayer(error)
})
.finally(console.log("işlem tamamlandı"))