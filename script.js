
let userInput = document.getElementById('userInput');

function addTask() {

    const inputValue = userInput.value;

    if(inputValue == ""){
        alert("Make sure the new task is added.");
    }else{

     // Get the task-container element
    const taskContainer = document.getElementById('main-container');

    // Create the new task-item div
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';

    // Create the left-side div
    const leftSide = document.createElement('div');
    leftSide.className = 'left-side';

    // Create the checkbox input
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    // Add event listener to the checkbox
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            // Code to run when checkbox is checked
            desc.className = 'completedTask';
        } else {
            // Code to run when checkbox is unchecked
            desc.className = 'desc';
        }
    });


    // Create the description paragraph
    const desc = document.createElement('p');
    desc.className = 'desc';
    desc.textContent = inputValue;

    // Append checkbox and description to the left-side div
    leftSide.appendChild(checkbox);
    leftSide.appendChild(desc);

    // Create the spacer div
    const spacer = document.createElement('div');
    spacer.className = 'spacer';

    // Create the right-side div
    const rightSide = document.createElement('div');
    rightSide.className = 'right-side';

    // Create the delete icon
    const deleteIcon = document.createElement('div');
    deleteIcon.className = 'material-symbols-outlined delete';
    deleteIcon.textContent = 'delete';

    deleteIcon.addEventListener('click', function() {
        taskContainer.removeChild(taskItem);
    });

    // Append delete icon to the right-side div
    rightSide.appendChild(deleteIcon);

    // Append left-side, spacer, and right-side to the task-item div
    taskItem.appendChild(leftSide);
    taskItem.appendChild(spacer);
    taskItem.appendChild(rightSide);

    // Append the task-item div to the task-container
    taskContainer.appendChild(taskItem);

    userInput.value = "";
        
    }

}

