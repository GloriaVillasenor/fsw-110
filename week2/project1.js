var h1Element = document.createElement('h1');
h1Element.textContent = 'Welcome to my JS site';
document.body.appendChild(h1Element)

var para = document.createElement('p');
para.textContent = 'All of this was created with Javascript';
console.log(para);
document.body.appendChild(para)

var newList = document.createElement('ol');
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

var myList = document.gegtElementById('my-list')
myList.appendChild(newListItem)