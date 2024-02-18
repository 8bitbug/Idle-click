let mainclickbutton = document.getElementById("mainclickbutton");
let displayclick = document.getElementById("displayclick");

let autoclickerWorth = parseInt(localStorage.getItem("autoclickerWorth")) || 100;
let autoclickerAmount = parseInt(localStorage.getItem("autoclickerAmount")) || 0;
let autoclickerproduction = parseInt(localStorage.getItem("autoclickerproduction")) || 1;
let autoclickerinterval;

let autoclickeritem = document.getElementById("autoclicker");
let autoclickerAmountdis = document.getElementById("autoclickeramount");
let autoclickerWorthdis = document.getElementById("autoclickercost");
let autoclickerpersecondinc = parseInt(localStorage.getItem("autoclickerpersecondinc")) || 1;

let clickbaitbutton = document.getElementById("clickbait");
let clickbaitAmount = parseInt(localStorage.getItem("clickbaitAmount")) || 0;
let clickbaitWorth = parseInt(localStorage.getItem("clickbaitWorth")) || 1000;
let clickbaitAmountdis = document.getElementById("clickbaitamount");
let clickbaitWorthdis = document.getElementById("clickbaitcost");
// The clickbait produces 5 clicks per second
let clickbaitproduction = parseInt(localStorage.getItem("clickbaitproduction")) || 1;
let clickbaitinterval;

let clickupgrade = document.getElementById("clickupgrade");
let clickupgradeifbought = parseInt(localStorage.getItem("clickupgradeifbought")) || 0;

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

let autoclickerupgrade = document.getElementById("autoclickerupgrade");
let autoclickerupgradecostdis = document.getElementById("autoclickerupgradecost");

let autoclickerupgradeifbought = parseInt(localStorage.getItem("autoclickerupgradeifbought")) || 0;

let clicksamount = document.getElementById("clicksamount");
let clickletters = document.getElementById("clickletters");

let intervaltime = 0;
const intervaltimedelay = 1000 - intervaltime;
let interval;

let clickfarm = document.getElementById("clickfarm");
let clickfarmcostdis = document.getElementById("clickfarmcost");
let clickfarmamountdis = document.getElementById("clickfarmamount");
// Clickfarmproduces 25 clicks a second
let clickfarmproduction = parseInt(localStorage.getItem("clickfarmproduction")) || 1;
let clickfarmcost = parseInt(localStorage.getItem("clickfarmcost")) || 11111;
let clickfarmamount = parseInt(localStorage.getItem("clickfarmamount")) || 0;
let clickfarminterval;

function formatNumber(number) {
  if (number < 1e3) {
    return number;
  } else if (number >= 1e3 && number < 1e6) {
    return (number / 1e3).toFixed(1) + " Thousand";
  } else if (number >= 1e6 && number < 1e9) {
    return (number / 1e6).toFixed(1) + " Million";
  } else if (number >= 1e9 && number < 1e12) {
    return (number / 1e9).toFixed(1) + " Billoin";
  } else if (number >= 1e12) {
    return (number / 1e12).toFixed(1) + " Trillion";
  }
}

function formatclick(number) {
  if (number < 1e3) {
    return number;
  } else if (number >= 1e3 && number < 1e6) {
    return (number / 1e3).toFixed(1);
  } else if (number >= 1e6 && number < 1e9) {
    return (number / 1e6).toFixed(1);
  } else if (number >= 1e9 && number < 1e12) {
    return (number / 1e9).toFixed(1);
  } else if (number >= 1e12) {
    return (number / 1e12).toFixed(1);
  }
}

for (i = 0; i < autoclickerAmount; i++) {
  setTimeout(() => {
    autoclickerproducing();
  }, 400 * i);
}

for (i = 0; i < clickbaitAmount; i++) {
  setTimeout(() => {
    clickbaitproducing();
  }, 400 * i);
}

function displayclicks() {
  clicksperseconddis.innerHTML = "Per" + " " + "Second" + ":" + " " + formatNumber(clickspersecond);
  if (click >= 1e3 && click < 1e6) {
    clicksamount.innerHTML = formatclick(click);
    clickletters.innerHTML = " Thousand" + " clicks";
  } else if (click < 1e3) {
    clickletters.innerHTML = click + " clicks";
    clicksamount.innerHTML = " ";
  } else if (click >= 1e6 && click < 1e9) {
    clicksamount.innerHTML = formatclick(click);
    clickletters.innerHTML = " Million" + " clicks";
  }
  clickscurrently.innerHTML = "Clicks" + " " + "Currently" + ":" + " " + formatNumber(click);
  clickseverearnt.innerHTML = "Total" + " " + "Clicks" + ":" + " " + formatNumber(clicktotalearnt);
  clicksperclickdis.innerHTML = "Clicks" + " " + "per" + " " + "Click" + ":" + " " +
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
  let clickpopup = document.createElement("div");
  clickpopup.setAttribute("id", "clickpopup");
  clickpopup.innerHTML = formatNumber(clickRate) + "+";
  clickpopup.style.position = "absolute";
  clickpopup.style.left = event.clientX - 5 + "px";
  clickpopup.style.top = event.clientY - 30 + "px";
  clickpopup.style.opacity = 1;
  document.body.appendChild(clickpopup);
  setTimeout(function () {
    clickpopup.style.opacity = 0;
    setTimeout(function () {
      document.body.removeChild(clickpopup);
    }, 1000);
  }, 1000);
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
  localStorage.setItem("autoclickerupgradeifbought", autoclickerupgradeifbought);
  localStorage.setItem("autoclickerpersecondinc", autoclickerpersecondinc);
  localStorage.setItem("clickfarmcost", clickfarmcost);
  localStorage.setItem("clickfarmamount", clickfarmamount);
  localStorage.setItem("clickfarmproduction", clickfarmproduction);
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
    click = click + autoclickerproduction;
    clicktotalearnt = clicktotalearnt + autoclickerproduction;
    displayclicks();
  }, 1000);
}

function autoclickerbuy() {
  if (click >= autoclickerWorth) {
    click = click - autoclickerWorth;
    autoclickerWorth = autoclickerWorth * (1 + 0.15);
    autoclickerWorth = Math.round(autoclickerWorth);
    clickspersecond = clickspersecond + autoclickerpersecondinc;
    autoclickerAmount = autoclickerAmount + 1;
    if (interval) {
      clearInterval(interval);
      interval = null;
      intervaltime = 0;
    }
    intervaltime = 0;
    interval = setInterval(() => {
      intervaltime = intervaltime + 1;
      if (intervaltime >= 1000) {
        intervaltime = 0;
      }
    }, 1);
    if (autoclickerAmount >= 2) {
      setTimeout(() => {
        autoclickerproducing();
      }, intervaltimedelay);
    } else if (autoclickerAmount === 1) {
      autoclickerproducing();
    }
    displayautoclicker();
    displayclicks();
  }
}

autoclickeritem.addEventListener("click", function () {
  autoclickerbuy();
});

setInterval(() => {
  displayclicks();
  displayautoclicker();
  displayclickbait();
  displayclickfarm();
}, 1000);

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
    autoclickerupgrademove();
    displayclicks();
    checkAndDisplayClickUpgrade();
    autoclickerupgrademove();
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
    if (interval) {
      clearInterval(interval);
      interval = null;
      intervaltime = 0;
    }
    intervaltime = 0;
    interval = setInterval(() => {
      intervaltime = intervaltime + 1;
      if (intervaltime >= 1000) {
        intervaltime = 0;
      }
    }, 1);
    if (clickbaitAmount >= 2) {
      setTimeout(() => {
        clickbaitproducing();
      }, intervaltimedelay);
    } else if (clickbaitAmount === 1) {
      clickbaitproducing();
    }
    save();
    displayclickbait();
  }
}

clickbaitbutton.addEventListener("click", function () {
  clickbaitbuy();
});

setInterval(() => {
  document.title = formatNumber(click) + " Clicks" + " - Idle Clicker";
}, 1);

function autoclickerupgrademove() {
  autoclickerupgrade.style.left = "6px";
}

function isautoclickerupgradebought() {
  if (autoclickerupgradeifbought == 1) {
    autoclickerupgrade.remove();
  }
}

isautoclickerupgradebought();

function autoclickerupgradebuy() {
  if (click >= 2500) {
    autoclickerupgrade.remove();
    autoclickerproduction = autoclickerproduction + 1;
    click = click - 2500;
    autoclickerupgradeifbought = autoclickerupgradeifbought + 1;
    clickspersecond = clickspersecond + autoclickerAmount;
    autoclickerpersecondinc = autoclickerpersecondinc * 2;
  }
}

if (clickupgradeifbought == 1) {
  autoclickerupgrademove();
}

autoclickerupgrade.addEventListener("click", () => {
  autoclickerupgradebuy();
});

autoclickerupgradecostdis.innerHTML = formatNumber(2500);

function clickfarmproducing() {
  clickfarminterval = setInterval(() => {
    click = click + clickfarmproduction;
    clicktotalearnt = clicktotalearnt + clickfarmproduction;
    displayclicks();
  }, 40);
}

function displayclickfarm() {
  clickfarmamountdis.innerHTML = clickfarmamount;
  clickfarmcostdis.innerHTML = formatNumber(clickfarmcost) + " " + "clicks";
}

displayclickfarm();

function buyclickfarm() {
  if (click >= clickfarmcost) {
    click = click - clickfarmcost;
    clickfarmamount = clickfarmamount + 1;
    clickfarmcost = clickfarmcost * (1 + 0.15);
    clickfarmcost = Math.round(clickfarmcost);
    clickspersecond = clickspersecond + 25;
    if (interval) {
      clearInterval(interval);
      interval = null;
      intervaltime = 0;
    }
    intervaltime = 0;
    interval = setInterval(() => {
      intervaltime = intervaltime + 1;
      if (intervaltime >= 1000) {
        intervaltime = 0;
      }
    }, 1);
    if (clickfarmamount >= 2) {
      setTimeout(() => {
        clickfarmproducing();
      }, intervaltimedelay);
    } else if (clickfarmamount === 1) {
      clickfarmproducing();
    }
    displayclickfarm();
  }
}

clickfarm.addEventListener("click", function () {
  buyclickfarm();
});
