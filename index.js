const form = document.getElementById('add');
console.log(form);
const list = document.getElementById('todo');
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
        <div class="buttons">
        <input type="image" src="./src/img/edit.png" style="height: 1.2rem" class="edit-button"/>
        <input type="image" src="./src/img/bin.png" style="height: 1.2rem" class="delete-button"/>
        </div>
        </div>`
        const newListItem = document.createElement('div');
        newListItem.innerHTML = listItem;
        list.append(newListItem);
        draggables = document.querySelectorAll('.list-item');
        containers = document.querySelectorAll('.drag-container')
        draggables.forEach(draggable => {
            draggable.addEventListener('dragstart', () => {
                draggable.classList.add('dragging');
            })
            draggable.addEventListener('dragend', () => {
                draggable.classList.remove('dragging');
            })
        });
        document.getElementById('input').value = "";
        alert("hi");
        document.querySelectorAll('.form-check-label').style.textDecoration = "line-through";
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
    if( event.target.className == 'edit-button') {
        console.log("editting");
        const editLi = event.target;
        const editLiF = (event) => {
            alert("hi");
            event.target.parentNode.querySelectorAll('.form-check-label').contentEditable = "true";
           /* if (document.querySelector(".form-check-label").contentEditable == "false") {
                document.querySelector(".form-check-label").contentEditable = "true";
                let answer = document.querySelector(".form-check-label").contentEditable;
            }
            else {
                document.querySelector(".form-check-label").contentEditable = "false";
            }*/
        }
    
        editLi.addEventListener("click", editLiF);
    
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
  