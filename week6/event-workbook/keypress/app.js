/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */
window.addEventListener("keydown", function(event) {
    console.log(event)
    console.log(event.key)
    var a = event.keyCode;
    if (a == 65) {
        alert ("You pressed the a key!");
    }
})


