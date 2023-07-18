const catYellow = "#f9e2af";
const catBlue = "#1e66f5";
// KEYCAP COLORS
function allBlackKeycap() {
  $(".keycap-style").css("background-color", "black");
  $(".keycap-style").css("color", "white");
}
function allWhiteKeycap() {
  $(".keycap-style").css("background-color", "white");
  $(".keycap-style").css("color", "black");
}
function singleYellowKeycap(e) {
  $("#" + e.code).css("background-color", catYellow);
  $("#" + e.code).css("color", "black");
}
function singleBlueKeycap(e) {
  $("#" + e.code).css("background-color", catBlue);
  $("#" + e.code).css("color", "white");
}

// TIMEOUT BUTTON
let timeout = true;
$("#timeout").click(function (e) {
  $(this).toggleClass("disabled-button");
  if (timeout) {
    $(this).html("Timeout OFF");
  } else {
    $(this).html("Timeout ON");
  }
  if (darkMode) {
    allWhiteKeycap();
  } else {
    allBlackKeycap();
  }
  timeout = !timeout;
});

// SOUND BUTTON
let sound = true;
$("#sound").click(function (e) {
  $(this).toggleClass("disabled-button");
  if (sound) {
    $(this).html("Sound OFF");
  } else {
    $(this).html("Sound ON");
  }
  sound = !sound;
});

// DARK MODE BUTTON
let darkMode = true;
$("#dark-mode").click(function (e) {
  $(this).toggleClass("disabled-button");
  $("body").toggleClass("light");
  if (darkMode) {
    $(this).html("Dark Mode OFF");
    allBlackKeycap();
  } else {
    $(this).html("Dark Mode ON");
    allWhiteKeycap();
  }
  darkMode = !darkMode;
});

// KEYCAP PRESSED
$(document).keydown(function (e) {
  e.preventDefault();
  if (darkMode) {
    singleYellowKeycap(e);
  } else {
    singleBlueKeycap(e);
  }
  if (sound) {
    $("audio#coinsfx")[0].play();
  }
  console.log("Key: " + e.code + " Code: " + e.keyCode);
});

// KEYCAP NOT PRESSED
$(document).keyup(function (e) {
  if (timeout) {
    if (darkMode) {
      allWhiteKeycap();
    } else {
      allBlackKeycap();
    }
  }
  if(sound){
    $("audio#coinsfx")[0].pause();
    $("audio#coinsfx")[0].currentTime = 0;
  }
});
