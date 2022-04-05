const form = document.getElementById('add');
const list = document.getElementById('todo-ul');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputValue = document.getElementById('input').value;
    const listItem = 
    `<div class="list-item">
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
  
