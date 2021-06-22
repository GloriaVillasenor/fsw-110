var h2Element = document.createElement('h2');
h2Element.textContent = 'Hello World';
h2Element.setAttribute('id', 'Hello');
document.body.appendChild(h2Element);
var h2Elements = document.getElementsByTagName("h2");


for (let i = 0; i < 5; i ++) {
    h2Element = document.createElement('h2')
    h2Element.innerHTML = "Hello, world!";
    document.body.appendChild(h2Element);
    h2Elements[i].style.fontsize = "20px";
    h2Elements[i].style.fontweight = "lighter";
    h2Elements[i].style.fontfamily = "sans-serif"
    h2Elements[i].style.color = "cornflowerblue";
  }

  var border = getElementById('border')
  border.classList.add('new-class')
  console.log(border.className)