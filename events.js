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
    newItem.addEventListener("click", deleteItem);
});

function deleteItem(e){
    e.stopPropagation();
    e.target.remove();
}
todoList.addEventListener('click', function(){
    todoList.classList.toggle('fade');
})


// button.addEventListener("keydown", function(){
//     if (event.keyCode===81) {
//         mainTitle.classList.toggle('spectacular');
//     }
// })