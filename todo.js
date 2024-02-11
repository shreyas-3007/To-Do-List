let todoList = [];
displayItem();

function addTodo()
{
  let inputElement = document.querySelector('#input_text');
  let dateElement = document.querySelector('#input_date')
  let timeElement = document.querySelector('#input_time')

  let todo_input = inputElement.value;
  let date_input = dateElement.value;
  let time_input = timeElement.value;

  if(todo_input==='' || date_input==='' || time_input==='') 
  {
    document.querySelector('#no_input').innerText=`Either the task, time or date is empty`;
    return ;
  }
  else {
    document.querySelector('#no_input').innerText=``;
    todoList.push({item:todo_input,duedate:date_input,duetime:time_input});
  }
  
  inputElement.value='';
  dateElement.value='';
  timeElement.value='';
  
  displayItem();
}

function displayItem()
{
  let displayElement = document.querySelector('.list_container');
  
  let newHtml = '';

  for(let i=0;i<todoList.length;i++)
  {
    let todo_item = todoList[i].item;
    let due_date = todoList[i].duedate;
    let due_time = todoList[i].duetime;

    //let {item,duedate} = todoList[i];

    newHtml+= `
    <span class="itemm">Task ${i+1} ${todo_item}</span>
    <span class="itemm">${due_time}</span>
    <span class="itemm">${due_date}</span>
    <span >  <input type="checkbox" id="check_box"></span>
    <button id="delete_button" onclick="todoList.splice(${i},1);displayItem();">Delete</button>

    
    
    `;
  }

  displayElement.innerHTML= newHtml;
}