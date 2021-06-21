var h1Element = document.createElement('h1');
h1Element.textContent = 'Hello World';
h1Element.setAttribute('id', 'Hello')
document.body.appendChild(h1Element)
var h1Elements = document.getElementsByTagName("h1");

for (let i = 0; i < 10; i ++) {
    h1Element = document.createElement('h1')
    h1Element.innerHTML = "Hello, world!";
    document.body.appendChild(h1Element);
    h1Elements[i].style.color = "purple";
  }

var names = ['Steve','Larry','Joe','Shirley','Steph','Nate','Rick','Emily'];

var nameList = document.getElementById("names")

for (var i = 0; i < names.length; i++) {
    nameList.innerHTML += '<li>' + names[i] + '</li>'
}


  

