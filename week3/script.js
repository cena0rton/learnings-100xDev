let todos = [];

function addTodo() {
  const inputValue = document.querySelector("input").value;
  if (inputValue === "") {
    alert("Enter a value");
    return;
  }
  
  todos.push({ title: inputValue });
  document.querySelector("input").value = ""; // Clear input
  render();
}

function DeleteTodo(todo) {
  // Find index of the todo item and remove it
  const index = todos.indexOf(todo);
  if (index > -1) {
    todos.splice(index, 1); // Remove the item from the array
  }
  render(); // Re-render the list
}

function Delete(todo){
  todos = [];
  render();
}

function createTodo(todo) {
  const divEl = document.createElement("div");
  const checkbox = document.createElement("input");
  const h1el = document.createElement("p");
  const buttonEl = document.createElement("button");
  const buttonElT = document.createElement("button");
  const image = document.createElement("img");
  const imageT = document.createElement("img");
  const divholder = document.createElement("div");
  
  checkbox.type = "checkbox";
  h1el.innerHTML = todo.title;
//   buttonEl.innerHTML = delete.png;
    imageT.src = "priority.png";
    imageT.style.width = "20px";
    image.id = "photu";
    image.src = "delete.png";
    // image.style.width = "20px"; // Optional: Set width for the image
    
    
  buttonEl.appendChild(image);
  buttonElT.appendChild(imageT);

  divholder.appendChild(buttonElT);
  divholder.appendChild(buttonEl);
  
  buttonElT.id = "buttonC";
  divEl.id = "tododiv";
  h1el.id = "todoh1";
  buttonEl.id = "buttonC";

  checkbox.onclick = function() {
    h1el.style.textDecoration = checkbox.checked ? "line-through" : "none";
    divEl.style.background = checkbox.checked ? "rgb(112, 237, 152, 0.6)" : "";
};
// let isH = false;

//   buttonElT.onclick = function (){
//     isH = !isH;
    
//     divEl.style.background = isH ? "rgba(245, 223, 51, 0.749)" : ""; 
    
//   }
  

buttonElT.onclick = function editTodo(todo) {
  const newTitle = prompt("Edit the task:", todo.title);
  if (newTitle !== null && newTitle.trim() !== "") {
      todo.title = newTitle.trim(); // Update the title
      render(); // Re-render the list
  }
}

 

  
  // Set up the Delete button with an onclick event to delete the specific todo
  buttonEl.onclick = function() { DeleteTodo(todo); };
  
  divEl.appendChild(checkbox);
  divEl.appendChild(h1el);
  divEl.appendChild(divholder);
  
 

  return divEl;
}

function render() {
  document.querySelector("#container").innerHTML = ""; // Clear the container
  for (let i = 0; i < todos.length; i++) {
    const element = createTodo(todos[i]);
    document.querySelector("#container").appendChild(element);
  }
}

