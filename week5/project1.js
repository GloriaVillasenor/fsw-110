document.getElementById("myForm").onsubmit= function() {
    alertMess()
}
function alertMess() {
var firstPart = document.getElementById("username").value
var secondPart = document.getElementById("firstname").value
var thirdPart = document.getElementById("lastname").value
var allPart = firstPart + secondPart + thirdPart
alert(allPart)
}