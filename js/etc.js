/*This file is used for making the ui responsive*/

let settingsButton = document.getElementById("settings");
let statsButton = document.getElementById("stats");
let infoButton = document.getElementById("info");
let prestigeButton = document.getElementById("prestige");

let saveButton = document.getElementById("saveButton");

mainclickbutton.addEventListener("mouseover", function () {
  mainclickbutton.style.transform = "scale(1.1)";
});

mainclickbutton.addEventListener("mouseout", function () {
  mainclickbutton.style.transform = "scale(1)";
});

function opensettings() {
  if (document.getElementById("settingscontent").style.display == "flex") {
    document.getElementById("settingscontent").style.display = "none";
    document.getElementById("upgrades").style.display = "flex";
  } else {
    document.getElementById("upgrades").style.display = "none";
    document.getElementById("settingscontent").style.display = "flex";
  }
}

settingsButton.addEventListener("click", function () {
  opensettings();
});

saveButton.addEventListener("click", function () {
  save();
});
