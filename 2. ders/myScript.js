// js function

/* function myFunction(parameter1,parameter2..) {
    //kodların çalıştığı yer
}

myFunction(argument1,argument2) */

// let b = function () {}

/* function carpma(p1,p2) {
    return p1 * p2 ;
}

let sonuc = carpma(3,4)
console.log(sonuc)

console.log(carpma(2,4))

console.log(carpma(8,9))

function toCelsius(fahrenheit) {
    return(5/9) * (fahrenheit-32)
}

console.log("Temperature is", toCelsius(64),"celsius")

function myFunction(){
    let carName = "Volvo"
    console.log(carName)
}
myFunction()

//js object

const person = {
    firstName:"Mustafa",
    lastName:"Onal",
    age:50,
    eyeColor:"blue",
    fullname: function myFunction(){
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.firstName)
console.log(person["age"])
console.log(person.fullname())

//fonksiyonu objede tanımlama şekilleri
// fullName:function()
//myFunction()

let x = new Date();
let a = new Number(15);
console.log(typeof a)
console.log(a) */

// js string

//escape character
/* let text = "onun adına \"ahmet\" denirdi"
console.log(text)
let text2 = "tab boşluk bırakmak için \t işareti kullanılabilir.Eğer alt satıra geçeceksem \n işareti kullanılır"
console.log(text2) */

//string methods

/* let text = "akfdssdkfnsdfhn"
let length = text.length;
console.log(length) */

/* slice(start position, end position -end degeri dahil değil-) slice(7,10)
substring(start,end) end değeri negatif değer almaz 0 kabul eder
substr(start,length) */

/* let text= "Apple, Banana, Kiwi"
let part = text.slice(7,13)
console.log(part)
let part2 = text.slice(7)
console.log(part2)
let part3 = text.slice(-4)
console.log(part3)
let part4 = text.substr(7,5)
console.log(part4) */

/* let text = "Seni seviyorum seviyorum"
let newText = text.replace("seviyorum","sevmiyorum")
console.log(newText) */

/*let text= "Seni seviyorum"
let newText = text.replace(/SEVIYORUM/,"sevmiyorum")
console.log(newText)*/

/* let text= "Seni seviyorum seviyorum"
let newText = text.replace(/seviyorum/g,"sevmiyorum")
console.log(newText) */

/* let text1 = "Hello World!"
let text2 = text1.toUpperCase();
console.log(text2)
let text3 = text1.toLowerCase();
console.log(text3) */

/* let text1 = "hello"
let text2 = "world"
let text3 = "!"
let text4 = text1.concat(" ",text2," ",text3)
console.log(text4) */

/* let text1 = "    Hello World     "
console.log(text1.length)
let text2 = text1.trimStart();
let text3 = text1.trimEnd();
let text4 = text1.trim();
console.log("-",text2,"-",text3,"-",text4,"-") */

/* let text = "567"
let withPadStart = text.padStart(8,"0")
console.log(withPadStart)
let withPadEnd = withPadStart.padEnd(10,"x")
console.log(withPadEnd) */

/* let number = 5
let text2 = number.toString()
console.log(text2.padStart(3,"0")) */

/* let text = "HELLO WORLD!"
let charAt = text.charAt(4)
console.log(charAt)
let text2 = text[2]
console.log(text2) */

/* let text = "elma,şeftali,üzüm"
let splitText = text.split(",")
console.log(splitText) */

/* let text = "Please locate where 'locate' occurs!"
let indexText = text.indexOf("locate")
console.log(indexText)
let indexText2 = text.lastIndexOf("locate")
console.log(indexText2)
let indexText3 = text.indexOf("locate",15)
console.log(indexText3) // 15ten saymaya başla
let indexText4 = text.lastIndexOf("locate",15)
console.log(indexText3) */

/*
// i ve g flag lerini yalnızca search de kullanabiliriz
// fakat indexof da start position var
let text = "Please Locate where 'locate' occurs!"
let searchText = text.search(/locate/i)
console.log(searchText) */

/* let text = "The rain in SPAIN stays mainly in the plain"
let textMatch = text.match(/ain/gi)
console.log(textMatch.length) */

/* let text = "Hello world, welcome to the universe."
let textIncludes = text.includes("world",12)
console.log(textIncludes) */

/* let text = "Hello world, welcome to the universe."
let textStartsWith = text.startsWith("Hello",12);
console.log(textStartsWith)
let textEndsWith = text.endsWith("universe.",12)
console.log(textEndsWith) */

// js template literals

/* let text = `mustafa selman's "house"`
console.log(text)
//multiline string

let firstName = "mustafa"
let lastName = "onal"
let text2 = `Welcome ${firstName+lastName}, ${lastName}!`
console.log(text2) */

// js numbers

/* let x = 3.14
let y = 123e5 */

/* let x = "100"
let y = "10"
console.log(x/y) // bölünür */

let x = 10
let y = x.toString()
let z = Number(y)
console.log(z)

console.log(Number(true))
console.log(Number(false))
console.log(Number("  10  "))
console.log(Number("  10.30  "))
console.log(Number("10,30"))
console.log(Number("10 30"))

console.log(parseInt("-10"))
console.log(parseInt("-10.33"))
console.log(parseInt("0010"))
console.log(parseInt("10,33"))
