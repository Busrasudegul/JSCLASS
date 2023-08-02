/* let myTitle = document.getElementById
("head").innerHTML
console.log(myTitle)

let myTitle2 = document.getElementById
("head").firstChild.nodeValue
console.log(myTitle2)

let myTitle3 = document.getElementById
("head").childNodes[0].data
console.log(myTitle3)

console.log(document.head.innerHTML)
console.log(document.head.childNodes[1])
console.log(document.body.innerHTML)
*/

/*
const para = document.createElement("p")
const node = document.createTextNode("This is new")
para.appendChild(node)
const element = document.getElementById("div1")
const child = document.getElementById("p1")
// element.appendChild(para)
element.insertBefore(para,child)

const elemnt = document.getElementById("p1")
elemnt.remove()
*/
/*
const myNodeList = document.querySelectorAll("p")
console.log(myNodeList[0])
console.log(myNodeList)
const myNodeList2 = document.querySelector("#p1")
console.log(myNodeList2)
const myNodeList3 = document.querySelectorAll(".param")
console.log(myNodeList3)

const myNode = document.querySelector("#p2")
const next = myNode.nextElementSibling.innerHTML
console.log(next)
const previous = myNode.previousElementSibling.innerHTML
console.log(previous)
*/

// local storage sadece string kAYIT alır ve her seferinde üzerine yazar
/*
localStorage.setItem("name","Büşra Sude Gül")
const item = localStorage.getItem("name")
console.log(item)
localStorage.setItem("name",["mahmut","ali"])
const item2 = localStorage.getItem("name")
console.log(item2)
*/
/*
const name = ["ayşe","fatma"]
localStorage.setItem("name",JSON.stringify(name))
const item = JSON.parse(localStorage.getItem("name"))
console.log(item)
*/
/*
const name = ["ayşe","fatma"]
localStorage.setItem("name",JSON.stringify(name))
const name2 = [...JSON.parse(localStorage.getItem("name")),"büşra"]
localStorage.setItem("name",JSON.stringify(name2))
const item2 = JSON.parse(localStorage.getItem("name"))
console.log(item2)

//localStorage.removeItem("name")
localStorage.clear()

//session storage
//geçici kayıt yeri - sayfayı kapatınca silinir

sessionStorage.setItem("name","mustafa")
*/
/*
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    //yüklendiğinde ne olması gerektiğini söyleyen alan
    document.getElementById("demo").innerHTML = this.responseText
}
xhttp.open("GET","ajax.txt")
xhttp.send();
*/
/*
const xhttp = new XMLHttpRequest();
xhttp.onload = function(){
    document.getElementById("demo").innerHTML = this.responseText
    console.log(JSON.parse(this.responseText).location)
}
xhttp.open("GET","ajax.json")
xhttp.send()
*/
/*
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    console.log(this.readyState)
    console.log(this.status)
}
xhttp.onload = function(){
    document.getElementById("demo").innerHTML = this.responseText
    console.log(this)
}
xhttp.open("GET","ajax.txt")
xhttp.send();
*/

//fetch apI

/*function fetchResponse(){
    fetch("ajax.txt")
    .then(response => response.text())
    .then(text => console.log(text))
    .catch(error => console.log(error))
}
fetchResponse()
*/

function fetchResponse(){
    fetch("ajax.json")
    .then(response => response.json())
    .then(text => console.log(text))
    .catch(error => console.log(error))
}
fetchResponse()




