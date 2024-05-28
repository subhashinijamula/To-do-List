document.getElementById('add-btn').addEventListener('click', function() {
    const inputField = document.getElementById('todo-input');
    const inputValue = inputField.value;

    if (inputValue.trim() !== '') {
        addTodoItem(inputValue);
        inputField.value = '';
    }
});

function addTodoItem(text) {
    const todoList = document.getElementById('todo-items');
    
    const newItem = document.createElement('li');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `item${todoList.children.length + 1}`;
    
    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.appendChild(document.createTextNode(text));
    
    const removeBtn = document.createElement('span');
    removeBtn.className = 'remove';
    removeBtn.appendChild(document.createTextNode('×'));
    removeBtn.setAttribute('onclick', 'removeItem(this)');
    
    newItem.appendChild(checkbox);
    newItem.appendChild(label);
    newItem.appendChild(removeBtn);
    
    todoList.appendChild(newItem);
}

function removeItem(element) {
    const item = element.parentNode;
    item.parentNode.removeChild(item);
}
