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
let clickbaitAmount = parseInt(localStorage.getItem("clickbaitAmount")) || 0;
let clickbaitWorth = parseInt(localStorage.getItem("clickbaitWorth")) || 1000;
let clickbaitAmountdis = document.getElementById("clickbaitamount");
let clickbaitWorthdis = document.getElementById("clickbaitcost");
let clickbaitproduction =
  parseInt(localStorage.getItem("clickbaitproduction")) || 1;
let clickbaitinterval;

let clickupgrade = document.getElementById("clickupgrade");
let clickupgradeifbought =
  parseInt(localStorage.getItem("clickupgradeifbought")) || 0;

let click = parseInt(localStorage.getItem("click")) || 0;
let clickRate = parseInt(localStorage.getItem("clickRate")) || 1;
let clicktotalearnt = parseInt(localStorage.getItem("clicktotalearnt")) || 0;

let audio = new Audio("/Sounds/click-6.mp3");
let isPlaying = false;

let clickscurrently = document.getElementById("clickscurrently");
let clickseverearnt = document.getElementById("totalclicks");
let clicksperclickdis = document.getElementById("clicksperclick");

let clicksperseconddis = document.getElementById("clickspersecond");

let clickspersecond = parseInt(localStorage.getItem("clickspersecond")) || 0;

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

function formatclick(number) {
  //Will proably become the biggest function
  if (number < 1e3) {
    return number;
  } else if (number >= 1e3 && number < 1e6) {
    return (
      "<div id='clicksamount'>" +
      (number / 1e3).toFixed(1) +
      "</div>" +
      "<br>" +
      " Thousand" +
      " "
    );
  } else if (number >= 1e6 && number < 1e12) {
    return (
      "<div id='clicksamount'>" +
      (number / 1e6).toFixed(1) +
      "</div>" +
      "<br>" +
      " Million"
    );
  } else if (number >= 1e9 && number < 1e12) {
    return (
      "<div id='clicksamount'>" +
      (number / 1e9).toFixed(1) +
      "</div>" +
      "<br>" +
      " Billoin"
    );
  } else if (number >= 1e12) {
    return (
      "<div id='clicksamount'>" +
      (number / 1e12).toFixed(1) +
      "</div>" +
      "<br>" +
      " Trillion"
    );
  }
}

for (i = 0; i < autoclickerAmount; i++) {
  setTimeout(() => {
    autoclickerproducing();
  }, 100 * i);
}

for (i = 0; i < clickbaitAmount; i++) {
  setTimeout(() => {
    clickbaitproducing();
  }, 200 * i);
}

function displayclicks() {
  displayclick.innerHTML = click + " " + "clicks";
  clicksperseconddis.innerHTML =
    "Per" + " " + "Second" + ":" + " " + formatNumber(clickspersecond);
  if (click >= 1000) {
    displayclick.innerHTML = formatclick(click) + "clicks";
    displayclick.style.top = "55px";
    displayclick.style.left = "85px";
  } else if (click < 1000) {
    displayclick.style.top = "100px";
    displayclick.style.left = "140px";
  }
  clickscurrently.innerHTML =
    "Clicks" + " " + "Currently" + ":" + " " + formatNumber(click);
  clickseverearnt.innerHTML =
    "Total" + " " + "Clicks" + ":" + " " + formatNumber(clicktotalearnt);
  clicksperclickdis.innerHTML =
    "Clicks" +
    " " +
    "per" +
    " " +
    "Click" +
    ":" +
    " " +
    formatNumber(clickRate);
}

displayclicks();

mainclickbutton.addEventListener("click", function () {
  click = click + clickRate;
  clicktotalearnt = clicktotalearnt + clickRate;
  displayclicks();
  audio = new Audio("/Sounds/click-6.mp3");
  audio.play();
  isPlaying = true;
});

function save() {
  localStorage.setItem("click", click);
  localStorage.setItem("clickRate", clickRate);
  localStorage.setItem("autoclickerWorth", autoclickerWorth);
  localStorage.setItem("autoclickerAmount", autoclickerAmount);
  localStorage.setItem("autoclickerproduction", autoclickerproduction);
  localStorage.setItem("clickupgradeifbought", clickupgradeifbought);
  localStorage.setItem("clickbaitAmount", clickbaitAmount);
  localStorage.setItem("clickbaitWorth", clickbaitWorth);
  localStorage.setItem("clickbaitproduction", clickbaitproduction);
  localStorage.setItem("clicktotalearnt", clicktotalearnt);
  localStorage.setItem("clickspersecond", clickspersecond);
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
    clicktotalearnt = clicktotalearnt + autoclickerproduction;
    displayclicks();
  }, 1000);
}

function autoclickerbuy() {
  if (click >= autoclickerWorth) {
    click = click - autoclickerWorth;
    autoclickerAmount = autoclickerAmount + 1;
    autoclickerWorth = autoclickerWorth * (1 + 0.15);
    autoclickerWorth = Math.round(autoclickerWorth);
    clickspersecond = clickspersecond + 1;
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
  if (clickupgradeifbought === 1) {
    clickupgrade.remove();
  }
}

checkAndDisplayClickUpgrade();

function clickupgradebuy() {
  if (click >= 250) {
    click = click - 250;
    clickRate = clickRate * 2;
    clickupgradeifbought = 1;
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
    clicktotalearnt = clicktotalearnt + clickbaitproduction;
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
    clickbaitWorth = clickbaitWorth * (1 + 0.15);
    clickbaitWorth = Math.round(clickbaitWorth);
    clickspersecond = clickspersecond + 5;
    save();
    setTimeout(() => {
      clickbaitproducing();
    }, 200 * i);
    displayclickbait();
  }
}

clickbaitbutton.addEventListener("click", function () {
  clickbaitbuy();
});
