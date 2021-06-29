const button = document.getElementById('box')
button.addEventListener('mouseover', buttonChange)

button.addEventListener('unload', completeLoading)

function completeLoading() {
    button,style.backgroundColor = "black"
}

function buttonChange() {
    button.style.backgroundColor = "green"
}

button.addEventListener('mousedown', holdButton)

function holdButton() {
    button.style.backgroundColor = "yellow"
}

button.addEventListener('mousedown', goOver)

function goOver() {
    buttton.style.backgroundColor = "blue"
}

button.addEventListener("dblclick", changeTwo)

function changeTwo() {
    button.style.backgroundColor = "red"
}

button.addEventListener('scroll', movePage)

function movePage() {
    button.style.backgroundColor = "purple"
}