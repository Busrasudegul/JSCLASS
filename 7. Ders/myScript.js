//js async, await

/*function myFunction() {
    return Promise.resolve("Hello")
} */

/* async function myFunction() {
    return "Hello"
}
myFunction().then(function(value){
    console.log(value + " second hello")
}) */

/* async function myDisplay(){
    let myPromise = new Promise(function(resolve,reject){
        setTimeout(function() {resolve("I love you")},3000)
    })
    console.log(await myPromise)
}
myDisplay(); 
*/

/* function resolveAfter2Seconds(x) {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(x);
        },3000)
    })
}
async function f1(){
    const x = await resolveAfter2Seconds
    (10);
    console.log(x);
}
f1() */

/* async function test(data){
    let promise = new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(data){
                resolve("bu bir değerdir")
            } else{
                reject("bu bir değer değildir")
            }
        },5000)
    })
    console.log("promise bekleniyor")
    let response = await promise
    console.log("promise bitti")
    return response
}
test("değer").then(resolve=> console.log(resolve),reject=> console.log(reject))
*/


/* async function testData(data) {
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof data === "string"){
                resolve(data)
            } else {
                reject(new Error("lütfen string bir değer girin"))
            }
        },5000)
    })
    const response = await promise;
    return response
}
testData("24")
.then(data => console.log(data))
.catch(err => console.log(err))
*/


// dom (document object model)

// document.getElementById("demo").innerHTML = "Hello World"
/*
document.getElementsByTagName("p")
document.getElementsByClassName("intro")
document.querySelectorAll("p.intro")
documents.forms["frm1"] // name=frm1 olan form
*/

/* document.getElementById("p1").innerHTML = "New text"

document.getElementById("image").src = "avatar_480.png"
document.getElementById("image").width = "300"
document.getElementById("image").height= "300"

function validateForm(){
    let x = document.forms["myForm"]["fname"].value
    if (!isNaN(x)) {
        alert("isim yazmak zorunludur")
        return false;
    }
    alert("giriş başarılı")
}
*/

document.getElementById("p2").style.color = "blue"
document.getElementById("p2").style.backgroundColor = "yellow"

function changeColor(){
    let x = document.getElementById("id1").style.color = "red"
}

function hide(){
    let x = document.getElementById("p3").style.visibility = "hidden"
}
function show(){
    let x = document.getElementById("p3").style.visibility = "visible"
}

function upperCase(){
    const x = document.getElementById("fname")
    x.value = x.value.toUpperCase()
}

function mOver(obj){
    obj.innerHTML = "Thank You"
}
function mOut(obj){
    obj.innerHTML = "Mouse Over Me"
}

/* document.getElementById("myBtn").addEventListener("click",function(){
    alert("Hello World")
}) */

/*
var x = document.getElementById("myBtn");
x.addEventListener("mouseover",myFunction);
x.addEventListener("click",mySecondFunction)
x.addEventListener("mouseout",myThirdFunction)

function myFunction(){
    document.getElementById("demo").innerHTML += "Moused over!<br>"
}

function mySecondFunction(){
    document.getElementById("demo").innerHTML += "Clicked!<br>"
}

function myThirdFunction(){
    document.getElementById("demo").innerHTML += "Moused out!<br>"
}
*/

// default bubbling (false)
/*
document.getElementById("myP1").addEventListener("click",function(){
    alert("myP1")
}, false)
document.getElementById("myDiv1").addEventListener("click",function(){
    alert("myDiv1")
}, false)
document.getElementById("myP2").addEventListener("click",function(){
    alert("myP2")
}, true)
document.getElementById("myDiv2").addEventListener("click",function(){
    alert("myDiv2")
}, true)
*/



