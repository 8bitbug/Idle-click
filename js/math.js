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

let autoclickerupgrade = document.getElementById('autoclickerupgrade');
let autoclickerupgradecostdis = document.getElementById("autoclickerupgradecost");

let autoclickerupgradeifbought = parseInt(localStorage.getItem("autoclickerupgradeifbought")) || 0;

let clicksamount = document.getElementById('clicksamount');
let clickletters = document.getElementById('clickletters');

let autoclickerinttime = 0;
const autoclickerdelayintitme = 1000 - autoclickerinttime;
let autoclickerints = setInterval(() => {
  autoclickerinttime = autoclickerinttime + 1;
  if (autoclickerinttime >= 1000) {
    autoclickerinttime = 0;
  }
}, 1);

function formatNumber(number) {
  //Will proably become the biggest function
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
    displayclick.style.top = "55px";
    displayclick.style.left = "85px";
    clicksamount.innerHTML = formatclick(click)
    clickletters.innerHTML = " Thousand" + " clicks";
    clickletters.style.top = "45px";
  } else if (click < 1e3) {
    displayclick.style.top = "100px";
    displayclick.style.left = "140px";
    clickletters.style.top = "1px";
    clickletters.innerHTML = click + " clicks";
    clicksamount.innerHTML = " ";
  }
  clickscurrently.innerHTML = "Clicks" + " " + "Currently" + ":" + " " + formatNumber(click);
  clickseverearnt.innerHTML = "Total" + " " + "Clicks" + ":" + " " + formatNumber(clicktotalearnt);
  clicksperclickdis.innerHTML = "Clicks" + " " + "per" + " " + "Click" + ":" + " " + formatNumber(clickRate);
}

displayclicks();

mainclickbutton.addEventListener("click", function () {
  click = click + clickRate;
  clicktotalearnt = clicktotalearnt + clickRate;
  displayclicks();
  audio = new Audio("/Sounds/click-6.mp3");
  audio.play();
  isPlaying = true;
  let clickpopup = document.createElement('div');
  clickpopup.setAttribute("id", "clickpopup");
  clickpopup.innerHTML = formatNumber(clickRate) + "+";
  clickpopup.style.position = "absolute";
  clickpopup.style.left = (event.clientX - 5) + "px";
  clickpopup.style.top = (event.clientY - 30) + "px";
  clickpopup.style.opacity = 1;
  document.body.appendChild(clickpopup);
  setTimeout(function() {
    clickpopup.style.opacity = 0;
    setTimeout(function() {
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
    //It was like hell while making this smooth
    clearInterval(autoclickerints);
    autoclickerinttime = 0;
      autoclickerints;
    if (autoclickerAmount >= 2) {
      setTimeout(() => {
        autoclickerproducing();
      }, autoclickerdelayintitme)
    } else if (autoclickerAmount === 1) {
      autoclickerproducing();
    }
    displayautoclicker();
    displayclicks();
  }
};

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
    save();
    setTimeout(() => {
      clickbaitproducing();
    }, 1000);
    displayclickbait();
  }
}

clickbaitbutton.addEventListener("click", function () {
  clickbaitbuy();
});

setInterval(() => {
  document.title = formatNumber(click);
}, 1);

setInterval(() => {
  document.title = formatNumber(click);
}, 1);

function autoclickerupgrademove() {
  autoclickerupgrade.style.left = '6px';
};

function isautoclickerupgradebought() {
  if (autoclickerupgradeifbought == 1) {
    autoclickerupgrade.remove();
  };
};

isautoclickerupgradebought();

function autoclickerupgradebuy() {
  if (click >= 2500) {
    autoclickerupgrade.remove();
    autoclickerproduction = autoclickerproduction + 1;
    click = click - 2500;
    autoclickerupgradeifbought = autoclickerupgradeifbought + 1;
    clickspersecond = clickspersecond + autoclickerAmount;
    autoclickerpersecondinc = autoclickerpersecondinc * 2;
  };
};

if (clickupgradeifbought == 1) {
  autoclickerupgrademove();
};

autoclickerupgrade.addEventListener("click", () => {
  autoclickerupgradebuy();
});

autoclickerupgradecostdis.innerHTML = formatNumber(2500);