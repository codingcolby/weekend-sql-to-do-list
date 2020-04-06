$(document).ready(init);

let info = [];

function init(event) {
// EVENT LISTENERS
$(".js-input-form").on("click", "js-btn-addTask", posttask);
$(".js-input-form").on("click", "js-btn-deleteTask", getBusy);
$(".js-input-form").on("click", "js-btn-doneTask", getBusy);
// LOAD SOMETHING
getBusy();
};

// AJAX REQUESTS

function getBusy(event) {
  $.ajax({
    method: "GET",
    url: "/getbusy",
  })
    .then(response => {
      info = response;
      rendertodo();
    })
    .catch(err => {
    console.warn(err);
    });
};

function posttask(event) {
  const dataForServer = {
    task_name: task_name,
  };

  $.ajax({
    method: "POST",
    url: "/getbusy",
    data: datatemp,
    })
    .then((response) => {
    console.log(response);
    })
    .catch(err => {
    console.warn(err);
  });
};

// RENDERING - DOM/DISPLAY

function rendertodo() {
  $(".js-listsDoDone").empty();

  for (let info of information) {
    $(".js-listsDoDone").append(`
    <td>${info.task_name}</td>
    <td>${info.date_added}</td>
    <td>${info.priority_level}</td>
    <td>${info.resources_needed}</td>
    <td>${info.do_delegate}</td>
    <td>${info.due_date}</td>
    <td> <button class="js-btn-doneTask" id="btn-doneTask" type="text" name="btn-doneTask">Completed</button></td>
    <td> <button class="js-btn-deleteTask" id="btn-deleteTask" type="text" name="btn-deleteTask">Delete</button></td>
    `);
  }
}
