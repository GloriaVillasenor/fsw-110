const button = document.getElementById('box')
button.addEventListener('mouseover', buttonChange)

window.addEventListener('load', completeLoading)

function completeLoading() {
    button.style.backgroundColor = "black"
}

function buttonChange() {
    button.style.backgroundColor = "green"
}

button.addEventListener('mousedown', holdButton)

function holdButton() {
    button.style.backgroundColor = "yellow"
}

button.addEventListener('mouseup', goOver)

function goOver() {
    button.style.backgroundColor = "blue"
}

button.addEventListener("dblclick", changeTwo)

function changeTwo() {
    button.style.backgroundColor = "red"
}

window.addEventListener('wheel', movePage)

function movePage() {
    button.style.backgroundColor = "purple"
}