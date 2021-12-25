// A $( document ).ready() block.
$(document).ready(function () {
  console.log("ready!");
});

let count = 0;
let countEl = $("#count");

//function reference: https://www.w3schools.com/js/js_popup.asp   (Added data toggle off from modals and close modal, slack friend taught)
function modalFunctionForQuestionOne() {
  let txt;
  const gamer = prompt("What does HTML stand for?");
  if (gamer === null || gamer === "") {
    return;
  } else if (
    gamer.toLowerCase().split(" ").join("") === "hypertextmarkuplanguage"
  ) {
    if (count <= 5099) {
      txt = "Congragulations! You get $200";
      count += 200;
      countEl.html(count);
      setTimeout(function () {
        $(".close-modal").click();
        $(".first-box").attr("data-toggle", "");
      }, 500);
    }
    if (count >= 5100) {
      //Scoreboard condition for conclusion of game, so if player scores more than, it alerts//
      const confirmed = confirm(
        "Congragulations! You have answered all the Questions, earned a grand total of $5100 and have earned a trip to Hawaii. Replay?"
      );
      if (confirmed) {
        location.reload();
      }
      return;
    }
  } else {
    txt = "Good Try! but that was incorrect.";
  }
  $("#html-200").html(txt);
}

function modalFunctionForQuestionTwo() {
  let txt;
  const gamer = prompt("What are the HTML elements represented by?");
  if (gamer === null || gamer === "") {
    return;
  } else if (gamer.toLowerCase() === "tags") {
    if (count <= 5099) {
      txt = "Congragulations! You get $500";
      count += 500;
      countEl.html(count);
      setTimeout(function () {
        $(".close-modal").click();
        $(".fourth-box").attr("data-toggle", "");
      }, 500);
    }
    if (count == 5100) {
      const confirmed = confirm(
        "Congragulations! You have answered all the Questions, earned a grand total of $5100 and have earned a trip to Hawaii. Replay?"
      );
      if (confirmed) {
        location.reload();
      }
      return;
    }
  } else {
    txt = "Good Try! but that was incorrect.";
  }
  $("#html-500").html(txt);
}

function modalFunctionForQuestionThree() {
  let txt;
  const gamer = prompt("What is the root element of an HTML page");
  if (gamer === null || gamer === "") {
  } else if (gamer.toLowerCase().split(" ").join("") === "<html>") {
    txt = "Congragulations! You get $1000";
    count += 1000;
    countEl.html(count);
    setTimeout(function () {
      $(".close-modal").click();
      $(".seventh-box").attr("data-toggle", "");
    }, 500);
    if (count == 5100) {
      const confirmed = confirm(
        "Congragulations! You have answered all the Questions, earned a grand total of $5100 and have earned a trip to Hawaii. Replay?"
      );
      if (confirmed) {
        location.reload();
      }
      return;
    }
  } else {
    txt = "Good Try! but that was incorrect.";
  }
  $("#html-1000").html(txt);
}

function modalFunctionForQuestionFour() {
  let txt;
  const gamer = prompt("What does CSS stand for");
  if (gamer === null || gamer === "") {
  } else if (gamer.toLowerCase().split(" ").join("") === "cascading style sheets") {
    txt = "Congragulations! You get $200";
    count += 200;
    countEl.html(count);
    setTimeout(function () {
      $(".close-modal").click();
      $(".second-box").attr("data-toggle", "");
    }, 500);
    if (count == 5100) {
      const confirmed = confirm(
        "Congragulations! You have answered all the Questions, earned a grand total of $5100 and have earned a trip to Hawaii. Replay?"
      );
      if (confirmed) {
        location.reload();
      }
      return;
    }
  } else {
    txt = "Good Try! but that was incorrect.";
  }
  $("#css-200").html(txt);
}

function modalFunctionForQuestionFive() {
  let txt;
  const gamer = prompt("Who oficially recommended CSS1 in 1995?");
  if (gamer === null || gamer === "") {
  } else if (gamer.toLowerCase().split(" ").join("") === "w3c") {
    txt = "Congragulations! You get $500";
    count += 500;
    countEl.html(count);
    setTimeout(function () {
      $(".close-modal").click();
      $(".fifth-box").attr("data-toggle", "");
    }, 500);
    if (count == 5100) {
      const confirmed = confirm(
        "Congragulations! You have answered all the Questions, earned a grand total of $5100 and have earned a trip to Hawaii. Replay?"
      );
      if (confirmed) {
        location.reload();
      }
      return;
    }
  } else {
    txt = "Good Try! but that was incorrect.";
  }
  $("#css-500").html(txt);
}

function modalFunctionForQuestionSix() {
  let txt;
  const gamer = prompt(
    "How do you call a class with the name slam in a CSS style.sheet?"
  );
  if (gamer === null || gamer === "") {
  } else if (gamer.toLowerCase().split(" ").join("") === ".slam") {
    txt = "Congragulations! You get $1000";
    count += 1000;
    countEl.html(count);
    setTimeout(function () {
      $(".close-modal").click();
      $(".eighth-box").attr("data-toggle", "");
    }, 500);
    if (count == 5100) {
      const confirmed = confirm(
        "Congragulations! You have answered all the Questions, earned a grand total of $5100 and have earned a trip to Hawaii. Replay?"
      );
      if (confirmed) {
        location.reload();
      }
      return;
    }
  } else {
    txt = "Good Try! but that was incorrect.";
  }
  $("#css-1000").html(txt);
}

function modalFunctionForQuestionSeven() {
  let txt;
  const gamer = prompt("What is declared to store data in JavaScript");
  if (gamer === null || gamer === "") {
  } else if (
    gamer.toLowerCase() === "variable" ||
    gamer.toLowerCase.includes("var") ||
    gamer.toLowerCase() === "const" ||
    gamer.toLowerCase() === ("let")
  ) {
    txt = "Congragulations! You get $200";
    count += 200;
    countEl.html(count);
    setTimeout(function () {
      $(".close-modal").click();
      $(".third-box").attr("data-toggle", "");
    }, 500);
    if (count == 5100) {
      const confirmed = confirm(
        "Congragulations! You have answered all the Questions, earned a grand total of $5100 and have earned a trip to Hawaii. Replay?"
      );
      if (confirmed) {
        location.reload();
      }
      return;
    }
  } else {
    txt = "Good Try! but that was incorrect.";
  }
  $("#js-200").html(txt);
}

function modalFunctionForQuestionEight() {
  let txt;
  const gamer = prompt("Who is the founder of JavaScript");
  if (gamer === null || gamer === "") {
  } else if (
    gamer.toLowerCase().split(" ").join("") === "brendan eich" ||
    gamer.toLowerCase().includes === "brandon"
  ) {
    txt = "Congragulations! You get $500";
    count += 500;
    countEl.html(count);
    setTimeout(function () {
      $(".close-modal").click();
      $(".sixth-box").attr("data-toggle", "");
    }, 500);
    if (count == 5100) {
      const confirmed = confirm(
        "Congragulations! You have answered all the Questions, earned a grand total of $5100 and have earned a trip to Hawaii. Replay?"
      );
      if (confirmed) {
        location.reload();
      }
      return;
    }
  } else {
    txt = "Good Try! but that was incorrect.";
  }
  $("#js-500").html(txt);
}

function modalFunctionForQuestionNine() {
  let txt;
  const gamer = prompt(
    "What comes up when you add 0.1 and 0.2 in the console?"
  );
  if (gamer === null || gamer === "") {
  } else if (gamer === "0.30000000000000004") {
    txt = "Congragulations! You get $1000";
    count += 1000;
    countEl.html(count);
    setTimeout(function () {
      $(".close-modal").click();
      $(".ninth-box").attr("data-toggle", "");
    }, 500);
    if (count == 5100) {
      const confirmed = confirm(
        "Congragulations! You have answered all the Questions, earned a grand total of $5100 and have earned a trip to Hawaii. Replay?"
      );
      if (confirmed) {
        location.reload();
      }
      return;
    }
  } else {
    txt = "Good Try! but that was incorrect.";
  }
  $("#js-1000").html(txt);
}
