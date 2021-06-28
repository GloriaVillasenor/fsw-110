function add(){
var firstNumber = document.getElementById("one").value
var secondNumber = document.getElementById("two").value
var equals = +firstNumber + +secondNumber
document.getElementById("added").innerHTML = equals
}

function subtract(){
var numberOne = document.getElementById("three").value
var numberTwo = document.getElementById("four").value
var total = +numberOne - +numberTwo
document.getElementById("minus").innerHTML = total
}

function multiply(){
var numFirst = document.getElementById("five").value
var numSecond = document.getElementById("six").value
var sum = +numFirst * + numSecond
document.getElementById("multiplied").innerHTML = sum
}