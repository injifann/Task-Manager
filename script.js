const addBtn=document.getElementById('add-btn');
const taskContainer=document.getElementById('task-container');
const taskInput=document.getElementById('input');
// const deleteBtns=document.querySelectorAll('.btn-danger');



addBtn.addEventListener('click',()=>{

  if(taskInput.value=='')
  {
    return
  }

  else{

    const mydiv=document.createElement('div');
    mydiv.classList.add('border','m-1', 'd-flex', 'justify-content-between');

    const myparagraph=document.createElement('p');
    myparagraph.classList.add('m-2');

    const deleteBtn=document.createElement('button');
    deleteBtn.classList.add('btn','btn-danger','m-2');

    myparagraph.textContent=taskInput.value;
    deleteBtn.textContent="delete";
    deleteBtn.addEventListener('click',handleDeletion);

    mydiv.appendChild(myparagraph);
    mydiv.appendChild(deleteBtn);

    taskContainer.appendChild(mydiv);
  }
})


function handleDeletion()
{
const elementToBeDeleted=this.closest(".d-flex");
elementToBeDeleted.remove();

}

// event listener for existing delete btn
const deleteBtns=document.querySelectorAll('.btn-danger');


deleteBtns.forEach(btn=>{
  btn.addEventListener('click',handleDeletion)
} )

