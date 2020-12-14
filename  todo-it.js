"use strict";
var todoList = [];
console.log(todoList);
var todoInput = document.getElementById('todoInput');
function addTodo() {
    if (todoInput === null) {
        console.error('The todo input is missing from the page!');
        return;
    }
    var newTodo = todoInput.value;
    if ('' !== newTodo.trim()) {
        console.log('Adding todo: ', newTodo);
        todoList.push(newTodo);
        console.log('New todo list: ', todoList);
        todoInput.value = '';
        todoList.sort();
        updateTodoList();
        filterTodoList();
    }
}
var todoListDiv = document.getElementById('todoListContainer');
function updateTodoList() {
    console.log('updating the rendered todo list');
    todoListDiv.innerHTML = '';
    todoListDiv.textContent = '';
    var ul = document.createElement('ul');
    ul.setAttribute('id', 'todoList');
    todoListDiv.appendChild(ul);
    todoList.forEach(function (item) {
        var li = document.createElement('li');
        li.setAttribute('class', 'todo-list-item');
        li.innerHTML = "<a href='#'\n            onclick='removeTodoListItem(\"" + item + "\")'>" + item + "</a>";
        ul.appendChild(li);
    });
}
function filterTodoList() {
    console.log('Filtering the rendered todo list');
    var todoListHtml = document.getElementById('todoList');
    if (todoListHtml === null) {
        console.log('Nothing to filter');
        return;
    }
    var todoListFilter = document.getElementById('todoFilter');
    var todoListFilterText = todoListFilter.value.toUpperCase();
    todoListHtml.childNodes.forEach(function (item) {
        var itemText = item.textContent;
        if (itemText !== null) {
            itemText = itemText.toUpperCase();
            if (itemText.startsWith(todoListFilterText)) {
                item.style.display = "list-item";
            }
            else {
                item.style.display = "none";
            }
        }
    });
}
function removeTodoListItem(itemToRemove) {
    console.log("item to remove", itemToRemove);
    todoList = todoList.filter(function (value, _index, _array) {
        if (value === itemToRemove) {
            return false;
        }
        return true;
    });
    updateTodoList();
    filterTodoList();
}
//# sourceMappingURL= todo-it.js.map