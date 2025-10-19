

task = document.querySelector("#task-form");
text = document.querySelector("#task");
ul = document.querySelector(".collection");
clearBtn = document.querySelector("#btn-clear");


  task.addEventListener("submit", addTask);
  document.addEventListener("DOMContentLoaded", getTask);
  clearBtn.addEventListener("click", remove);

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

function remove() {
  // ul.remove();
  localStorage.clear();
  window.location.reload();
}
