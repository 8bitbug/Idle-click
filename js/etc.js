/*This file is used for making the ui responsive*/

let settingsButton = document.getElementById("settings");
let statsButton = document.getElementById("stats");
let infoButton = document.getElementById("info");
let prestigeButton = document.getElementById("prestige");

let informationcontent = document.getElementById("informationcontent");
let upgradescontent = document.getElementById("upgrades");
let statscontent = document.getElementById("statscontent");
let settingscontent = document.getElementById("settingscontent");

let saveButton = document.getElementById("saveButton");
let deleteButton = document.getElementById("deletesaveButton");
let exportsavebutton = document.getElementById("exportsave");
let exportsavecontent = document.getElementById("exportsavecontent");
let exportcontentclose = document.getElementById("exportsavecontentclose");
let jsonexportdata = document.getElementById("jsonexportdata");

mainclickbutton.addEventListener("mouseover", function () {
  mainclickbutton.style.transform = "scale(1.1)";
});

mainclickbutton.addEventListener("click", () => {
  mainclickbutton.style.transform = "scale(1.1)";
});

mainclickbutton.addEventListener("mouseleave", function () {
  mainclickbutton.style.transform = "scale(1)";
});

function opensettings() {
  if (settingscontent.style.display == "flex") {
    settingscontent.style.display = "none";
    upgradescontent.style.display = "flex";
  } else {
    upgradescontent.style.display = "none";
    settingscontent.style.display = "flex";
    statscontent.style.display = "none";
    informationcontent.style.display = "none";
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
  if (statscontent.style.display == "flex") {
    statscontent.style.display = "none";
    upgradescontent.style.display = "flex";
  } else {
    upgradescontent.style.display = "none";
    statscontent.style.display = "flex";
    settingscontent.style.display = "none";
    informationcontent.style.display = "none";
  }
}

statsButton.addEventListener("click", () => {
  openstats();
});

function openinformation() {
  if (informationcontent.style.display == "flex") {
    statscontent.style.display = "none";
    upgradescontent.style.display = "flex";
    settingscontent.style.display = "none";
    informationcontent.style.display = "none";
  } else {
    upgradescontent.style.display = "none";
    statscontent.style.display = "none";
    settingscontent.style.display = "none";
    informationcontent.style.display = "flex";
  }
};

infoButton.addEventListener("click", () => {
  openinformation();
});

function exportsaveopencontent() {
  exportsavecontent.style.display = 'flex';
}

exportsavebutton.addEventListener("click", function() {
  exportsaveopencontent();
})

exportcontentclose.addEventListener("click", function() {
  exportsavecontent.style.display = 'none';
})