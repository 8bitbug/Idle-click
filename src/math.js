let clickbutton = document.getElementById('clickbutton');
let clickResult = document.getElementById('clickResult');
let autoclickerbuy = document.getElementById('autoclicker');
let autoclickeramountdis = document.getElementById('amountAutoClicker');
let saved = document.getElementById('saved');
let saveclose = document.getElementById('saveclose');
let autoclickercost = document.getElementById('autoclickercost');

let click = 0;
let clickRate = 1;
let autoclickerWorth = 100;
let autoClickerAmount = 0;
let autoclickerproduction = 1;

const xhr = new XMLHttpRequest();

xhr.open('GET', 'yourJsonFile.json', true);

xhr.responseType = 'json';

xhr.send();

xhr.onload = function() {
  const jsonData = JSON.parse(xhr.response);
  const clickValue = jsonData.userdata[0].click;
}


saveclose.onclick = function() {
    saved.style.display = 'none';
};

setInterval(() => {
    saved.style.display = 'flex';
}, 60000)

setInterval(() => {
    if (saved.style.display === 'flex') {
        setTimeout(() => {
            saved.style.display = 'none';
        }, 5000)
    };
}, 60000)

function updateclickResult() {
    clickResult.innerHTML = clickValue + ' ' + 'Clicks';
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
    setInterval(() => {
        click = click + autoclickerproduction;
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