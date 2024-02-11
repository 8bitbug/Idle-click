let mainclickbutton = document.getElementById("mainclickbutton");
let displayclick = document.getElementById("displayclick");

let autoclickerWorth =
  parseInt(localStorage.getItem("autoclickerWorth")) || 100;
let autoclickerAmount =
  parseInt(localStorage.getItem("autoclickerAmount")) || 0;
let autoclickerproduction =
  parseInt(localStorage.getItem("autoclickerproduction")) || 1;
let autoclickerinterval;

let autoclickeritem = document.getElementById("autoclicker");
let autoclickerAmountdis = document.getElementById("autoclickeramount");
let autoclickerWorthdis = document.getElementById("autoclickercost");

let clickbaitbutton = document.getElementById("clickbait");
let clickbaitAmount = 0;
let clickbaitWorth = 1000;
let clickbaitAmountdis = document.getElementById("clickbaitamount");
let clickbaitWorthdis = document.getElementById("clickbaitcost");
let clickbaitproduction = 1;
let clickbaitinterval;

let clickupgrade = document.getElementById("clickupgrade");
let clickupgradeifbought =
  Boolean(localStorage.getItem("clickupgradeifbought")) || false;

let click = parseInt(localStorage.getItem("click")) || 0;
let clickRate = parseInt(localStorage.getItem("clickRate")) || 1;

function formatNumber(number) {
  //Will proably become the biggest function
  if (number < 1e3) {
    return number;
  } else if (number >= 1e3 && number < 1e6) {
    return (number / 1e3).toFixed(1) + " Thousand";
  } else if (number >= 1e6 && number < 1e12) {
    return (number / 1e6).toFixed(1) + " Million";
  } else if (number >= 1e9 && number < 1e12) {
    return (number / 1e9).toFixed(1) + " Billoin";
  } else if (number >= 1e12) {
    return (number / 1e12).toFixed(1) + " Trillion";
  }
}

for (i = 0; i < autoclickerAmount; i++) {
  setTimeout(() => {
    autoclickerproducing();
  }, 100 * i);
}

function displayclicks() {
  displayclick.innerHTML = formatNumber(click) + "<br>" + "clicks";
}

displayclicks();

mainclickbutton.addEventListener("click", function () {
  click = click + clickRate;
  displayclicks();
});

function save() {
  localStorage.setItem("click", click);
  localStorage.setItem("clickRate", clickRate);
  localStorage.setItem("autoclickerWorth", autoclickerWorth);
  localStorage.setItem("autoclickerAmount", autoclickerAmount);
  localStorage.setItem("autoclickerproduction", autoclickerproduction);
  localStorage.setItem("clickupgradeifbought", clickupgradeifbought);
}

setInterval(() => {
  save();
}, 15000);

function displayautoclicker() {
  autoclickerAmountdis.innerHTML = autoclickerAmount;
  autoclickerWorthdis.innerHTML =
    formatNumber(autoclickerWorth) + " " + "clicks";
}

displayautoclicker();

function autoclickerproducing() {
  autoclickerinterval = setInterval(() => {
    click += autoclickerproduction;
    displayclicks();
  }, 1000);
}

function autoclickerbuy() {
  if (click >= autoclickerWorth) {
    click = click - autoclickerWorth;
    autoclickerAmount = autoclickerAmount + 1;
    autoclickerWorth = autoclickerWorth * (1 + 0.16);
    autoclickerWorth = Math.floor(autoclickerWorth);
    setTimeout(() => {
      autoclickerproducing();
    }, 100 * i);
    displayautoclicker();
    displayclick();
  }
}

autoclickeritem.addEventListener("click", function () {
  autoclickerbuy();
});

setInterval(() => {
  displayclicks();
  displayautoclicker();
}, 1);

function checkAndDisplayClickUpgrade() {
  if (clickupgradeifbought === true) {
    clickupgrade.remove();
  } else {
    clickupgrade.style.display = "flex";
  }
}

checkAndDisplayClickUpgrade();

function clickupgradebuy() {
  if (click >= 250) {
    click = click - 250;
    clickRate = clickRate * 2;
    clickupgradeifbought = true;
    localStorage.setItem("clickupgradeifbought", clickupgradeifbought);
    clickupgrade.remove();
    displayclicks();
    checkAndDisplayClickUpgrade();
  }
}

clickupgrade.addEventListener("click", function () {
  clickupgradebuy();
});

function clickbaitproducing() {
  clickbaitinterval = setInterval(() => {
    click = click + clickbaitproduction;
    displayclicks();
  }, 200);
}

function displayclickbait() {
  clickbaitAmountdis.innerHTML = clickbaitAmount;
  clickbaitWorthdis.innerHTML = formatNumber(clickbaitWorth) + " " + "clicks";
}

displayclickbait();

function clickbaitbuy() {
  if (click >= clickbaitWorth) {
    click = click - clickbaitWorth;
    clickbaitAmount = clickbaitAmount + 1;
    clickbaitWorth = clickbaitWorth * (1 + 0.16);
    clickbaitWorth = Math.floor(clickbaitWorth);
    setTimeout(() => {
      clickbaitproducing();
    }, 100 * i);
    displayclickbait();
  }
}

clickbaitbutton.addEventListener("click", function () {
  clickbaitbuy();
});
