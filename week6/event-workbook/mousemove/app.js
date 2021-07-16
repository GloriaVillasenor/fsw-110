var redBox =document.getElementsByClassName("red-box")[0]
console.log(redBox)
redBox.addEventListener("mousemove", function(event) {
    console.log(event.x)
    console.log(event.y)
    redBox.textContent = " X " + event.x + " , Y " + event.y
})