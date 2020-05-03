const button = document.querySelector("#submit");
const todoList = document.querySelector('#todo-list');
const items = todoList.children;
const todoNumber = document.querySelector(".todo-nr b");
const mainTitle = document.querySelector(".main-title");
const nameInput = document.querySelector(".name-input");

console.log(todoList);


button.addEventListener('click', function(e){
    
    e.preventDefault();
        
    // Create element
    const newItem = document.createElement('li');
    
    // adding class
    newItem.classList.add('item');
    
    // Append ellement
    newItem.innerText = nameInput.value;
    todoList.appendChild(newItem);
    
    // Update count
    todoNumber.innerText = items.length;
    
    // remove value
    nameInput.value="";
    
    // Adding event listener
    newItem.addEventListener("click", deleteItem);

    console.log(nameInput);
});

function deleteItem(e){
    e.stopPropagation();
    e.target.remove();
}

todoList.addEventListener('click', function(){
    todoList.classList.toggle('fade');
})

button.addEventListener("click", function(){
    mainTitle.classList.toggle('spectacular');
})