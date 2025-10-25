// form = document.querySelector("#task-form");
// inputValue = document.querySelector("#task");
// ul = document.querySelector(".collection");
// clearBtn = document.querySelector("#btn-clear");

// function loadpage()
// {
//   form.addEventListener("submit" , addTask);
//   document.addEventListener("DOMContentLoaded" ,getTask );
//   ul.addEventListener("click", removeTask);
//   clearBtn.addEventListener("click", clearTask);
// }
// loadpage()

// function addTask(e)
// {
//     e.preventDefault();

//     if(inputValue.value === "")
//     {
//         alert("pls fill the Task ");
//         return;
//     }
//     else
//     {
//         alert("You will move on");
//         document.querySelector("h4").style.display = "none";
//     }

//     document.querySelector(".collection-item").style.display = "block";

//     const li = document.createElement("li");
//     li.className = "collection-item"
//     li.appendChild(document.createTextNode(inputValue.value));

//     const xBtn = document.createElement("a");
//     xBtn.className = "delete-item secondary-content";
//     li.appendChild(xBtn);
//     xBtn.innerHTML = `<i class="fa fa-remove"></i>`;

//     ul.appendChild(li);

//     lcStorage(inputValue.value);
//     inputValue.value = "";

// }

// function lcStorage(task){

//     let tasks;

//     if(localStorage.getItem("tasks") === null)
//     {
//         tasks = [];
//     }
//     else
//     {
//         tasks = JSON.parse(localStorage.getItem("tasks"));
//     }

//     tasks.push(task);
//     localStorage.setItem("tasks",JSON.stringify(tasks));

// }

// function getTask()
// {

//     let tasks;

//     if(localStorage.getItem("tasks") === null)
//     {
//         tasks = [];
//     }
//     else
//     {
//         tasks = JSON.parse(localStorage.getItem("tasks"));
//     }

//     if(tasks.length > 0){

//         document.querySelector(".collection-item").style.display = "block";
//         document.querySelector("h4").style.display = "none";

//         tasks.forEach(function(item){

//         const li = document.createElement("li");
//         li.className = "collection-item"
//         li.appendChild(document.createTextNode(item));

//         const xBtn = document.createElement("a");
//         xBtn.className = "delete-item secondary-content";
//         li.appendChild(xBtn);
//         xBtn.innerHTML = `<i class="fa fa-remove"></i>`;

//         ul.appendChild(li);

//     });
//     }
//     else{
//         document.querySelector(".card-action").style.display = "none";
//     }
// }

// function removeTask(e){

//     e.target.parentElement

//     if(e.target.parentElement.classList.contains("delete-item"))
//     {
//       if(confirm("Are you sure"))
//       {
//         e.target.parentElement.parentElement.remove();
//         removeFromLs( e.target.parentElement.parentElement)
//       }
//     }
// }

// function removeFromLs(removeLs){

//     let tasks;

//     if(localStorage.getItem("tasks") === null){
//         tasks = [];
//     } else {
//         tasks = JSON.parse(localStorage.getItem("tasks"));
//     }

//     tasks.forEach(function(task, index )
//     {
//         if(removeLs.textContent === task )
//         {
//             tasks.splice(index,1);
//         }
//     })

//     localStorage.setItem("tasks" , JSON.stringify(tasks));

//     if(tasks.length === 0)
//     {
//         window.location.reload();
//     }

// }

// function clearTask(){

// Clear from LS
//     clearTaskFromLS();
//     window.location.reload();
// }
// function clearTaskFromLS(){
//     localStorage.clear();
// }

task = document.querySelector("#task-form");
text = document.querySelector("#task");
ul = document.querySelector(".collection");
clearBtn = document.querySelector("#btn-clear");


task.addEventListener("submit", addTask);
document.addEventListener("DOMContentLoaded", getTask);
clearBtn.addEventListener("click", remove);
ul.addEventListener("click", removeTask);

function addTask(e) {
  e.preventDefault();

  if (text.value === "") {
    alert("pls enter the task ");
    return;
  }
  const li = document.createElement("li");
  li.className = "collection-item";
  li.innerText = `${text.value}`;
    

  const a = document.createElement("a");
  a.className = "delete-item secondary-content";

  a.innerHTML = `<i class="fa fa-remove"></i>`;
  li.appendChild(a);

  ul.appendChild(li);

  lcStorage(text.value);

  text.value = "";
  window.location.reload();
}

function lcStorage(value) {
  let values;
  if (localStorage.getItem("values") === null) {
    values = [];
  } else {
    values = JSON.parse(localStorage.getItem("values"));
  }
  values.push(value);
  localStorage.setItem("values", JSON.stringify(values));
}

function getTask() {
  let values;
  if (localStorage.getItem("values") === null) {
    values = [];
  } else {
    values = JSON.parse(localStorage.getItem("values"));
  }

  if (values.length > 0) {
    values.forEach(function (text) {
      const li = document.createElement("li");
      li.className = "collection-item";
      li.innerText = `${text}`;

      const a = document.createElement("a");
      a.className = "delete-item secondary-content";

      a.innerHTML = `<i class="fa fa-remove"></i>`;
      li.appendChild(a);

      ul.appendChild(li);
    });
  } else {
    document.querySelector(".card-action").style.display = "none";
  }
}

function removeTask(e) {
  e.target.parentElement;

  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure")) {
      e.target.parentElement.parentElement.remove();
      removeFromLs(e.target.parentElement.parentElement);
    }
  }
}

function removeFromLs(removeLs) {
  let values;
  if (localStorage.getItem("values") === null) {
    values = [];
  } else {
    values = JSON.parse(localStorage.getItem("values"));
  }

  values.forEach(function (task, index) {
    console.log(task);
    if (removeLs.textContent === task) {
      values.splice(index, 1);
    }
  });

  localStorage.setItem("values", JSON.stringify(values));

  if(values.length === 0)
  {
      window.location.reload();
  }
}
function remove() {
  // ul.remove();
  localStorage.clear();
  window.location.reload();
}
