var h2Element = document.createElement('h2');
h2Element.textContent = 'Hello World';
h2Element.setAttribute('id', 'Hello');
document.body.appendChild(h2Element);
var h2Elements = document.getElementsByTagName("h2");


for (let i = 0; i < 5; i ++) {
    h2Element = document.createElement('h2')
    h2Element.setAttribute('class', 'border')
    h2Element.innerHTML = "Hello, world!";
    document.body.appendChild(h2Element);
    h2Element.style.fontsize = "20px";
    h2Element.style.fontweight = "lighter";
    h2Element.style.fontfamily = "sans-serif"
    h2Element.style.color = "cornflowerblue";
  }

  var border = getElementById('border')
  border.classList.add('new-class')
  console.log(border.className)