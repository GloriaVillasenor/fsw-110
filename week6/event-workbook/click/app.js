// make the box disapear when the user clicks it
document.getElementsByClassName("red-box")[0].setAttribute("id", "box")


document.getElementById("box").addEventListener("click", function(){
    box.style.display = "none"
})