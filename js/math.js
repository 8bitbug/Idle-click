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
let clickRate = parseInt(localStorage.getItem("clickRate")) || 1000;
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
let intervaltimedelay = 1000 - intervaltime;
let interval;

let clickfarm = document.getElementById("clickfarm");
let clickfarmcostdis = document.getElementById("clickfarmcost");
let clickfarmamountdis = document.getElementById("clickfarmamount");
// Click farm produces 25 clicks a second
let clickfarmproduction = parseInt(localStorage.getItem("clickfarmproduction")) || 1;
let clickfarmcost = parseInt(localStorage.getItem("clickfarmcost")) || 11111;
let clickfarmamount = parseInt(localStorage.getItem("clickfarmamount")) || 0;
let clickfarmpersecondinc = parseInt(localStorage.getItem("clickfarmpersecondinc")) || 25;
let clickfarminterval;

let clickbaitupgrade = document.getElementById('clickbaitupgrade');
let clickbaitupgradeifbought = parseInt(localStorage.getItem("clickbaitupgradeifbought")) || 0;

let clickfarmupgrade = document.getElementById("clickfarmupgrade");
let clickfarmupgradeifbought = parseInt(localStorage.getItem("clickfarmupgradeifbought")) || 0;

let UpgradeCell1 = document.getElementById('upgradeslot1');
let UpgradeCell2 = document.getElementById('upgradeslot2');
let UpgradeCell3 = document.getElementById('upgradeslot3');
let UpgradeCell4 = document.getElementById('upgradeslot4');
let UpgradeCell5 = document.getElementById('upgradeslot5');

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

autoclickerloop();

let clickbaittimeoutsave = 5 * clickbaitAmount * clickbaitAmount;

for (let i = 0; i < clickbaitAmount; i++) {
  setTimeout(() => {
    clickbaitproducing()
  }, clickbaittimeoutsave * i)
};

for (let i = 0; i < clickfarmamount; i++) {
  setTimeout(() => {
    clickfarmproducing();
  }, 400 * i)
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
  audio = new Audio("./Sounds/click.mp4");
  audio.play();
  click = click + clickRate;
  clicktotalearnt = clicktotalearnt + clickRate;
  displayclicks();
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
  localStorage.setItem("clickbaitupgradeifbought", clickbaitupgradeifbought);
  localStorage.setItem("clickbaitpersecondinc", clickbaitpersecondinc);
  localStorage.setItem("clickfarmupgradeifbought", clickfarmupgradeifbought);
  localStorage.setItem("clickfarmpersecondinc", clickfarmpersecondinc);
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

let autoclickerIntervals = [];

function autoclickerproducing(autoclickerIndex) {
  clearInterval(autoclickerIntervals[autoclickerIndex]);
  autoclickerIntervals[autoclickerIndex] = setInterval(() => {
    click = click + autoclickerproduction;
    clicktotalearnt = clicktotalearnt + autoclickerproduction;
    displayclicks();
  }, 1000);
}

function autoclickerloop() {
  for (let i = 0; i < autoclickerAmount; i++) {
    setTimeout(() => {
      autoclickerproducing(i);
    }, 400 * i)
  }
}

function autoclickerbuy() {
  if (click >= autoclickerWorth) {
    clearInterval(interval);
      interval = null;
      intervaltime = 0;
    intervaltime = 0;
    interval = setInterval(() => {
      intervaltime = intervaltime + 1;
      if (intervaltime >= 1000) {
        intervaltime = 0;
      }
    }, 1);
    click = click - autoclickerWorth;
    autoclickerWorth = autoclickerWorth * (1 + 0.15);
    autoclickerWorth = Math.round(autoclickerWorth);
    clickspersecond = clickspersecond + autoclickerpersecondinc;
    autoclickerAmount = autoclickerAmount + 1;
    setTimeout(() => {
      autoclickerloop();
    }, intervaltimedelay)
    displayautoclicker();
    displayclicks();
    displayautoclickerupgrades();
  }
}

autoclickeritem.addEventListener("click", function () {
  autoclickerbuy();
});

function removeAllChildren(element) {
  while (element.firstChild !== childToExcludeupdate()) {
    element.removeChild(element.firstChild);
  }
}

 function childToExcludeupdate() {
  if (document.getElementById("autoclickerupgrade") == null && document.getElementById("clickbaitupgrade") == null) {
    childToExclude = document.getElementById("clickfarmupgrade");
} else if (document.getElementById("autoclickerupgrade") == null) {
    childToExclude = document.getElementById("clickbaitupgrade");
} else if (document.getElementById("clickbaitupgrade") == null) {
    childToExclude = document.getElementById("clickupgrade");
}
};

function clickupgradebuy() {
  if (click >= 250) {
    click = click - 250;
    clickRate = clickRate * 2;
    clickupgradeifbought = 1;
    clickupgrade.remove();
    moveUpgrades();
  }
}

clickupgrade.addEventListener("click", function () {
  clickupgradebuy();
});

let clickbaitIntervals = [];

function clickbaitproducing(clickbaitIndex) {
  clickbaitIntervals[clickbaitIndex] = setInterval(() => {
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

let clickbaitpersecondinc = parseInt(localStorage.getItem("clickbaitpersecondinc")) || 5;

function clickbaitbuy() {
  if (click >= clickbaitWorth) {
      clearInterval(interval);
      interval = null;
      intervaltime = 0;
    intervaltime = 0;
    interval = setInterval(() => {
      intervaltime = intervaltime + 1;
      if (intervaltime >= 1000) {
        intervaltime = 0;
      }
    }, 1);
    click = click - clickbaitWorth;
    clickbaitAmount = clickbaitAmount + 1;
    clickbaitWorth = clickbaitWorth * (1 + 0.15);
    clickbaitWorth = Math.round(clickbaitWorth);
    clickspersecond = clickspersecond + clickbaitpersecondinc;
    setTimeout(() => {
      clickbaitproducing();
    }, intervaltimedelay)
    displayclickbait();
    displayclick();
    displayclickbaitupgrades();
  }
}

clickbaitbutton.addEventListener("click", function () {
  clickbaitbuy();
});

setInterval(() => {
  document.title = formatNumber(click) + " Clicks" + " - Idle Clicker";
}, 1);

function upgradesbought() {
  if (autoclickerupgradeifbought == 1) {
    autoclickerupgrade.remove();
  }

  if (clickupgradeifbought == 1) {
    clickupgrade.remove();
  }

  if (clickfarmupgradeifbought == 1) {
    clickfarmupgrade.remove();
  }
}

upgradesbought();

function autoclickerupgradebuy() {
  if (click >= 2500) {
    autoclickerupgrade.remove();
    autoclickerproduction = autoclickerproduction + 1;
    click = click - 2500;
    autoclickerupgradeifbought = autoclickerupgradeifbought + 1;
    clickspersecond = clickspersecond + autoclickerAmount;
    autoclickerpersecondinc = autoclickerpersecondinc * 2;
    moveUpgradesToPreviousCell();
  }
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
    clickspersecond = clickspersecond + clickfarmpersecondinc;
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
    moveUpgrades();
  }
}

clickfarm.addEventListener("click", function () {
  buyclickfarm();
});

function clickbaitupgradebuy() {
  if (click >= 12500) {
    clickbaitupgrade.remove();
    click = click - 12500;
    clickbaitproduction = clickbaitproduction * 2;
    clickbaitupgradeifbought = clickbaitupgradeifbought + 1;
    clickbaitpersecondinc = clickbaitpersecondinc * 2;
    clickspersecond = clickspersecond + (clickbaitAmount * 5);
    checkifclickbaitupgradeisbought();
    displayclick();
    moveUpgrades();
  };
};

function checkifclickbaitupgradeisbought() {
  if (clickbaitupgradeifbought >= 1) {
    clickbaitupgrade.remove();
  }
}

checkifclickbaitupgradeisbought();

document.getElementById("clickbaitupgradecost").innerHTML = formatNumber(12500);

clickbaitupgrade.addEventListener("click", function() {
  clickbaitupgradebuy();
})

function displayautoclickerupgrades() {
  if (click >= 100) {
    clickupgrade.style.display = 'flex';
  };
  if (autoclickerAmount >= 1) {
    autoclickerupgrade.style.display = 'flex';
  };
};

function displayclickbaitupgrades() {
  if (clickbaitAmount >= 1) {
    clickbaitupgrade.style.display = 'flex';
  };
};

setInterval(() => {
  displayautoclickerupgrades();
  displayclickbaitupgrades();
}, 1000)

childToExcludeupdate();

function moveUpgrades() {
  if (UpgradeCell4.children.length == 0) {
    while (UpgradeCell5.childNodes[0]) {
      UpgradeCell4.appendChild(UpgradeCell5.childNodes[0]);
    }
  }

  if (UpgradeCell3.children.length == 0) {
    while (UpgradeCell4.childNodes[0]) {
      UpgradeCell3.appendChild(UpgradeCell4.childNodes[0]);
    }
  }

  if (UpgradeCell2.children.length == 0) {
    while (UpgradeCell3.childNodes[0]) {
      UpgradeCell2.appendChild(UpgradeCell3.childNodes[0]);
    }
  }

  if (UpgradeCell1.children.length == 0) {
    while (UpgradeCell2.childNodes[0]) {
      UpgradeCell1.appendChild(UpgradeCell2.childNodes[0]);
    }
  }
}

setInterval(() => {
  childToExcludeupdate();
 }, 1)

 function clickfarmupgradebuy() {
   if (click >= 32500) {
     click = click - 32500;
     clickfarmproduction = clickfarmproduction * 2;
     clickfarmpersecondinc = clickfarmpersecondinc * 2;
     clickspersecond = clickspersecond + (clickfarmamount * 25);
     clickfarmupgradeifbought = clickfarmupgradeifbought + 1;
     clickfarmupgrade.remove()
     displayclick();
     moveUpgrades();
     checkanddisplayupgrades();
   }
 }
 
 function checkanddisplayupgrades() {
  if (clickupgradeifbought === 0 && click >= 100) {
    clickupgrade.style.display = 'flex';
    UpgradeCell5.appendChild(clickupgrade);
} else {
    clickupgrade.style.display = 'none';
}

if (autoclickerupgradeifbought === 0 && autoclickerAmount >= 1) {
    autoclickerupgrade.style.display = 'flex';
    UpgradeCell5.appendChild(autoclickerupgrade);
} else {
    autoclickerupgrade.style.display = 'none';
}

if (clickbaitupgradeifbought === 0 && clickbaitAmount >= 1) {
    clickbaitupgrade.style.display = 'flex';
    UpgradeCell5.appendChild(clickbaitupgrade);
} else {
    clickbaitupgrade.style.display = 'none';
}

if (clickfarmupgradeifbought === 0 && clickfarmamount >= 1) {
    clickfarmupgrade.style.display = 'flex';
    UpgradeCell5.appendChild(clickfarmupgrade);
} else {
    clickfarmupgrade.style.display = 'none';
 }
}
 
checkanddisplayupgrades();

 clickfarmupgrade.addEventListener("click", function() {
   clickfarmupgradebuy();
   checkanddisplayupgrades();
 });

setInterval(() => {
  displayclicks();
  upgradesbought();
  moveUpgrades();
}, 100)