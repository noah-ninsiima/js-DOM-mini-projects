let input =document.getElementById('input');
let taskList =document.getElementById('task-list');
let addTasksBtn =document.getElementById('btn');

addTasksBtn.addEventListener('click', function(){
    let inputvalue =input.value;
    if (inputvalue != ''){
       //create element
       let newLi =document.createElement("li");
       let taskSpan =document.createElement('span');

        //add content
        taskSpan.textContent =inputvalue
       
       //create the edit & delete button
       let editBtn = document.createElement('span');
       editBtn.textContent ="Edit"
       editBtn.style.marginLeft ="40px";
       editBtn.style.paddingInline = "20px"
       editBtn.style.backgroundColor="blue"

       editBtn.addEventListener('click', editTask)
       

       let delBtn =document.createElement('span');
       delBtn.textContent = "Delete"
       delBtn.style.marginLeft ="40px";
       delBtn.style.paddingInline = "20px"
       delBtn.style.backgroundColor = "red"

       delBtn.addEventListener('click',deleteTask)

        newLi.append(taskSpan, editBtn, delBtn)
       
        //add element to tasks list
        taskList.appendChild(newLi)
       // clear input field
        input.value ='';
        console.log(input.value)

    }
    else{
        alert("First enter a task in the input field")
    }
   


})
function editTask(event){
    let textElement = event.target.previousSibling;

    let updatedTask = prompt('Edit tasks', textElement.textContent);
   textElement.textContent =updatedTask;
}
function deleteTask(event){
    let taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
}