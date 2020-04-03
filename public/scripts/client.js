console.log("Hello Client");
$(document).ready(init);

// DECLARED VARIABLES - OPTIONAL, USAGE WILL VARY
// const someinfo = [];
// let someinformation = [];

function init(event) {
  console.log("Ready to Start");

// EVENT LISTENERS
$(".js-input-form").on("click", "js-btn-1", somefunction);

// LOAD SOMETHING
getsomething();
};

// AJAX REQUESTS

function getsomething(event) {
  $.ajax({
    method: "GET",
    url: "/routetemp1",
  })
    .then((response) => {
    render(response);
    })
    .catch(err => {
    console.warn(err);
    });
};

function postsomething(event) {
  $.ajax({
    method: "POST",
    url: "/routetemp1",
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

function render(information) {
  console.log(information);

  $(".js-render").empty();

  for (let info of information) {
    $(".js-render").append(`
      <div>
        <p>${info.item1} - ${info.item2}, ${info.item3}, ${info.item4}</p>
      </div>
    `);
  }
}