// variabelen pakken
const addButton = document.querySelector('.add-button');
const todoInput = document.querySelector('.todo-input');

const todoList = document.querySelector('.todo-list');


// addItem
// todoInput value - on click - inner html todoList - daarna weer input leegmaken
const addItem = () => {
    if (todoInput.value === "") {
        alert('A to do cant be nothing');
        return;
    }
    let todoItem = todoInput.value;

    todoList.innerHTML += `<li class="list-item"><p>${todoItem}</p><span class="done">DONE</span><button type="button" class=remove-button>X</button></li>`;
    
    todoInput.value = ""; 
    
};

// removeItem - zoek event target - verwijder parent van event target
const removeItem = (e) => {
    if(e.target && e.target.nodeName === "BUTTON") {
    e.target.closest('.list-item').remove();
    }
};

// allChecked - als alle li's in de ul class complete hebben, alert klaar!

const allChecked = () => {
    if (todoList.children.length === 0) {
        console.log("There are no children");
    } else if (todoList.children.length === todoList.querySelectorAll(".complete").length) {
        alert("You have completed all your to do's");
        todoList.innerHTML = "";
    };
};

// markChecked - negeren als er op de removebutton geklikt wordt, anders complete class toevoegen
const markChecked = (e) => {
    if (e.target.nodeName === "BUTTON" || e.target.nodeName === "UL") {
        return; 
    } 
    e.target.classList.toggle('complete');
    allChecked();    
}



// clickevents
addButton.addEventListener('click', addItem);

todoList.addEventListener('click', removeItem);
todoList.addEventListener('click', markChecked);

todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addItem();
    }
});


