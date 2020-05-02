const button = document.querySelector("#submit");
const todoList = document.querySelector('#todo-list');
const items = todoList.children;
const todoNumber = document.querySelector(".todo-nr b");
const mainTitle = document.querySelector(".main-title");

console.log(mainTitle);


button.addEventListener('click', function(){
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.innerText = `Item ${items.length+1}`;
    todoList.appendChild(newItem);
    todoNumber.innerText = items.length;
});

button.addEventListener("click", function(){
    mainTitle.classList.toggle('spectacular');
})