var header = document.createElement('h1')
header.textContent = 'Home Content Contact'
header.setAttribute('id', 'navagation')
document.body.appendChild(header)
document.getElementById('navagation').style.textAlign = 'center'
document.getElementById('navagation').style.color = 'blue'

var h1Element = document.createElement('h1');
h1Element.textContent = 'Welcome to my JS site!';
h1Element.setAttribute('id', 'welcome')
document.body.appendChild(h1Element)
document.getElementById('welcome').style.textAlign = 'center'
document.getElementById('welcome').style.color = 'purple'


var para = document.createElement('p');
para = document.createElement('h1')
para.textContent = 'All of this was created with Javascript';
console.log(para);
document.body.appendChild(para)

var newList = document.createElement('ol');
newList = document.createElement('h3')
newList.setAttribute('id', 'startingList')
document.body.appendChild(newList)

var newListItem = document.createElement('li')
newListItem.textContent = 'item one'
document.getElementById('startingList').appendChild(newListItem)

var newListItemTwo = document.createElement('li')
newListItemTwo.textContent = 'item two'
document.getElementById('startingList').appendChild(newListItemTwo)

var newListItemThree = document.createElement('li')
newListItemThree.textContent = 'item three'
document.getElementById('startingList').appendChild(newListItemThree)

var footer = document.createElement('h1')
footer.textContent = 'Thank You For Visiting My Site'
footer.setAttribute('id', 'ending')
document.body.appendChild(footer)
document.getElementById('ending').style.textAlign = 'center'
document.getElementById('footer').style.position = 'bottom'

