const collectionItems = document.getElementsByClassName("item");
const todoList = document.getElementById("todo-list")
const todoNr = document.getElementsByClassName("todo-nr")[0];

const newItem = document.createElement('li');
newItem.classList.add("item");
newItem.innerText = "Item 4";
todoList.appendChild(newItem);

const anotherItem = document.createElement('li');
anotherItem.classList.add("item");
anotherItem.innerText = "Item 5";
todoList.appendChild(anotherItem);

//Update the amount of items that we have
todoNr.innerText = collectionItems.length