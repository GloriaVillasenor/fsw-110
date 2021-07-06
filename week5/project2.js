const form = document.customerData
form.addEventListener("submit", (event) => {
    event.preventDefault()
})
function alertMess() {
var firstPart = form.first_name.value
var secondPart = form.last_name.value
var thirdPart = form.age.value
var fourthPart = form.decision.value
var sixth = form.satisfied.value

var checkedInput = []
for(let i = 0; i < form.renewl.length; i++) {
    if (form.renewl[i].checked){
        checkedInput.push(form.renewl[i].value)
    }
}
var allPart = firstPart + " " + secondPart + " " + thirdPart + " " + fourthPart + " " + " " + sixth + " " + checkedInput
alert(allPart)
}