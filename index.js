const form = document.getElementById('add');
console.log(form);
const list = document.getElementById('todo-ul');
let draggables = document.querySelectorAll('.list-item');
let containers = document.querySelectorAll('.drag-container')
console.log(containers);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputValue = document.getElementById('input').value;
    if (inputValue){

        const listItem = 
        `<div class="list-item" draggable="true">
        <div class="form-check">
        <input class="form-check-input" type="checkbox">
        <label class="form-check-label" for="flexCheckDefault"> ${inputValue} </label>
        </div>
        <button>Bearbeiten</button> 
        <button class="delete-button">Löschen</button>
        </div>`
        const newListItem = document.createElement('li');
        newListItem.innerHTML = listItem;
        list.append(newListItem);
        draggables = document.querySelectorAll('.list-item');
        containers = document.querySelectorAll('.drag-container')
        draggables.forEach(draggable => {
            draggable.addEventListener('dragstart', () => {
                console.log('drag start')
                draggable.classList.add('dragging');
            })
            draggable.addEventListener('dragend', () => {
                draggable.classList.remove('dragging');
            })
        });
    }
})
containers.forEach(container => {
    container.addEventListener('dragover', () => {
        const draggable = document.querySelector('.dragging');
        container.appendChild(draggable);
    })
})
document.body.addEventListener( 'click', function ( event ) {
    console.log(event.target);
    if( event.target.className == 'delete-button') {
        event.target.parentNode.parentNode.remove();
    }
    if( event.target.className == 'form-check-input') {
        console.log(event.target.checked);
        if(event.target.checked)
        {
            event.target.parentNode.querySelector('.form-check-label').style.textDecoration = "line-through";
        }
        else
        {
            event.target.parentNode.querySelector('.form-check-label').style.textDecoration = "none";
        }
    }
  } )
  