$(document).ready(init);

let info = [];

function init(event) {
// EVENT LISTENERS
$("#js-input-form").on("submit", addTask);
$(".js-listsDoDone").on("click", ".js-btn-deleteTask", deleteTask);
$(".js-listsDoDone").on("click", ".js-btn-doneTask", pizzazz);
getBusy();
}

// AJAX REQUESTS

function submitTask(event) {
  event.preventDefault();

  const taskInput =
  $('js-in-task-name').val();
  $('js-in-date-added').val();
  $('js-in-priority-level').val();
  $('js-in-resources-needed').val();
  $('js-in-do-delegate').val();
  $('js-in-due-date').val();

  addTask(taskInput);
  clearInput();
  }

function addTask(event) {
  event.preventDefault();

  const datatemp = {
    task_name: task_name,
    date_added: date_added,
    priority_level: priority_level,
    resources_needed: resources_needed,
    do_delegate: do_delegate,
    due_date: due_date,
  };

  $.ajax({
    method: "POST",
    url: "/getBusy",
    data: datatemp,
    })
    .then(response => {
     getBusy();
    })
    .catch(err => {
    console.warn(err);
  });
}


function deleteTask(event) {
  const taskId = $(this)
    .parent()
    .data('id');

  $.ajax({
    method: "DELETE",
    url: `/getBusy/${taskId}`,
  })
    .then(response => {
      getBusy();
    })
    .catch(err => {
    console.warn(err);
    });
}

function pizzazz() {
  const task = {
    task: $(this)
    .parent()
    .data("completed"),
  };
  const taskId =$(this)
  .parent()
    .data("id");

  $.ajax ({
    method: "PUT",
    url: `/getBusy/${taskId}`,
    data: completed,
  })
    .then(response => {
      getBusy();
    })
    .catch(err => {
      console.warn(err);
    });


function getBusy() {
  $.ajax({
    method: "GET",
    url: "/getBusy",
  })
    .then(response => {
      info = response;
      rendertodo();
    })
    .catch(err => {
    console.warn(err);
        });
      }

// RENDERING - DOM/DISPLAY

function rendertodo() {
  $(".js-listsDoDone").empty();

  for (let info of information) {
    $(".js-listsDoDone").append(`
    <tr>
    <td>${info.task_name}</td>
    <td>${info.date_added}</td>
    <td>${info.priority_level}</td>
    <td>${info.resources_needed}</td>
    <td>${info.do_delegate}</td>
    <td>${info.due_date}</td>
    <td> <button class="js-btn-doneTask" id="btn-doneTask" type="text" name="btn-doneTask">Completed</button></td>
    <td> <button class="js-btn-deleteTask" id="btn-deleteTask" type="text" name="btn-deleteTask">Delete</button></td>
    </tr>
    `);
  }}}