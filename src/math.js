//Copyright 8bitbug 2024-2024

let clickbutton = document.getElementById('clickbutton');
let clickResult = document.getElementById('clickResult');
let autoclickerbuy = document.getElementById('autoclicker');
let autoclickeramountdis = document.getElementById('amountAutoClicker');
let saved = document.getElementById('saved');
let saveclose = document.getElementById('saveclose');
let autoclickercost = document.getElementById('autoclickercost');
let settings = document.getElementById('settings');
let upgrades = document.getElementById('upgrades');
let settingscontent = document.getElementById('settingscontent');
let closesettingscontent = document.getElementById('closesettingscontent');
let clickupgradecost = document.getElementById('clickupgradecost');
let clickupgrade = document.getElementById('clickupgrade');
let deletesavebutton = document.getElementById('deletesave');
let savebutton = document.getElementById('savebutton');

let click = parseInt(localStorage.getItem('click')) || 0;
let clickRate = parseInt(localStorage.getItem('clickRate')) || 1;
let autoclickerWorth = parseInt(localStorage.getItem('autoclickerWorth')) || 100;
let autoClickerAmount = parseInt(localStorage.getItem('autoClickerAmount')) || 0;
let autoclickerproduction = parseInt(localStorage.getItem('autoclickerproduction')) || 1;
let clickupgradeifb = parseInt(localStorage.getItem('clickupgradeifb')) || 0; 
let clickinterval;

autoclickeramountdis.innerHTML = autoClickerAmount;

for (let i = 0; i < autoClickerAmount; i++) {
    setTimeout(() => {
        autoclickerp();
    }, 100 * i)
}

saveclose.onclick = function() {
    saved.style.display = 'none';
};

localStorage.getItem('clickisbought')

setInterval(() => {
    saved.style.display = 'flex';
    localStorage.setItem('click', click);
    localStorage.setItem('clickRate', clickRate);
    localStorage.setItem('autoclickerWorth', autoclickerWorth);
    localStorage.setItem('autoClickerAmount', autoClickerAmount);
    localStorage.setItem('autoclickerproduction', autoclickerproduction);
    localStorage.setItem('clickupgradeifb', clickupgradeifb);
}, 10000)

closesettingscontent.onclick = function() {
    settingscontent.style.display = 'none';
    upgrades.style.display = 'block';
}

setInterval(() => {
    if (saved.style.display === 'flex') {
        setTimeout(() => {
            saved.style.display = 'none';
        }, 5000)
    };
}, 60000)

function updateclickResult() {
    clickResult.innerHTML = click + ' ' + 'Clicks';
};

setInterval(() => {
    updateclickResult();
}, 1);

function updateAutoClicker() {
    autoClickerAmount = autoClickerAmount + 1;
    autoclickeramountdis.innerHTML = autoClickerAmount;
};

function buyautoclicker() {
    click = click - autoclickerWorth;
};

function displaycost() {
    autoclickercost.innerHTML = autoclickerWorth + ' ' + 'Clicks';
};

displaycost();

function autoclickerincrease() {
    autoclickerWorth = autoclickerWorth * (1 + 0.16);
    autoclickerWorth = Math.floor(autoclickerWorth);
};

function autoclickerp() {
    clickinterval = setInterval(() => {
        setTimeout(() => {
            click = click + autoclickerproduction;
        }, 100)
        updateclickResult();
    }, 1000);
};

autoclicker.onclick = function() {
    if (click >= autoclickerWorth) {
        buyautoclicker();
        autoclickerp();
    updateAutoClicker();
    autoclickerincrease();
    displaycost();
    };
};

clickbutton.onclick = function() {
    click = click + clickRate;
    updateclickResult();
};

setInterval(() => {
    if (click >= autoclickerWorth) {
        autoclickercost.style.color = 'green';
    } else {
        autoclickercost.style.color = 'red';
    };
}, 100)

setInterval(() => {
    if (click > 250) {
        clickupgradecost.style.color = 'green';
    } else {
        clickupgradecost.style.color = 'red';
    };
}, 1);

clickupgrade.onclick = function() {
    if (click > 250) {
        clickRate = clickRate * 2;
        click = click - 250;
        clickupgradeifb = 1;
    }
};

setInterval(() => {
    if (clickupgradeifb === 1) {
        clickupgrade.style.display = 'none';
    };
}, 1);

deletesavebutton.onclick = function() {
    localStorage.clear();
    location.reload();
};

savebutton.onclick = function() {
    localStorage.setItem('click', click);
    localStorage.setItem('clickRate', clickRate);
    localStorage.setItem('autoclickerWorth', autoclickerWorth);
    localStorage.setItem('autoClickerAmount', autoClickerAmount);
    localStorage.setItem('autoclickerproduction', autoclickerproduction);
    localStorage.setItem('clickupgradeifb', clickupgradeifb);
};

settings.onclick = function() {
    upgrades.style.display = 'none';
    settings.style.display = 'block';
}