/*This file is used for making the ui responsive*/

let settingsButton = document.getElementById("settings");
let statsButton = document.getElementById("stats");
let infoButton = document.getElementById("info");
let prestigeButton = document.getElementById("prestige");

let saveButton = document.getElementById("saveButton");
let deleteButton = document.getElementById("deletesaveButton");

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
    document.getElementById("statscontent").style.display = "none";
  }
}

settingsButton.addEventListener("click", function () {
  opensettings();
});

saveButton.addEventListener("click", function () {
  save();
});

deleteButton.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

function openstats() {
  if (document.getElementById("statscontent").style.display == "flex") {
    document.getElementById("statscontent").style.display = "none";
    document.getElementById("upgrades").style.display = "flex";
  } else {
    document.getElementById("upgrades").style.display = "none";
    document.getElementById("statscontent").style.display = "flex";
    document.getElementById("settingscontent").style.display = "none";
  }
}
statsButton.addEventListener("click", () => {
  openstats();
});
