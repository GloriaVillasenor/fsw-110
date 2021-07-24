const form = document.querySelector('#inviteForm');
const input = document.querySelector('input');
const ul = document.querySelector('#invitedList');
const checkbox1 = document.querySelector('#checkbox1')
const checkbox2 = document.querySelector('#checkbox2')
const checkbox3 = document.querySelector('#checkbox3')
// console.log(form, input, ul, checkbox1, checkbox2, checkbox3)
function createLi(){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = input.value;
    const label = document.createElement('label');
    label.textContent = 'confirmed';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const editBtn = document.createElement('button');
    editBtn.textContent = 'edit';
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'delete'

    li.appendChild(span);
    li.appendChild(label);
    label.appendChild(checkbox);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    checkbox.addEventListener('change', licheckbox);
    return li;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(input.value.length <= 2){
        alert('Enter the name please!');
    } else {
        const li = createLi();
        ul.appendChild(li);
    }
});

var licheckbox = (event) => {
    const checkbox = event.target;
    const checked = checkbox.checked;
    const li = checkbox.parentNode.parentNode;
    if(checked) {
        li.className = 'responded'
    } else {
        li.className = ' '
    }
}
checkbox2.addEventListener('change', licheckbox);
checkbox3.addEventListener('change', licheckbox);

ul.addEventListener('click', (event) => {
    // console.log(event.target)
    // console.log(event.target.tagName)
    if(event.target.tagName === 'BUTTON') {
        const button = event.target;
        const li =button.parentNode;
        const ul = li.parentNode;
        if(button.textContent === 'delete') {
            ul.removeChild(li);
        } else if(button.textContent === 'edit') {
            const span = li.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;
            li.insertBefore(input, span);
            li.removeChild(span);
            button.textContent = 'save';
        } else if(button.textContent === 'save') {
            const input = li.firstElementChild;
            const span = document.createElement('span');
            span.textContent = input.value;
            li.insertBefore(span, input);
            li.removeChild(input);
            button.textContent = 'edit';
        }
    }
});

checkbox1.addEventListener('change', (event) => {
    // console.log(event.target.checked)
    // console.log(ul.children)
    for(var i = 0; i < ul.children.length; i++) {
        // console.log(ul.children[i])
        // console.log(ul.children[i].className)
        if (ul.children[i].className !== "responded") {
            ul.children[i].remove()
        } 
    }
})