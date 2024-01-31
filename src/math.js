let clickbutton = document.getElementById('clickbutton');
let clickResult = document.getElementById('clickResult');
let autoclicker = document.getElementById('autoclicker');
let autoclickeramount = document.getElementById('amountAutoClicker');

let click = 0;
let clickRate = 1;
let autoclickerWorth = 100;
let autoClickerAmount = 0;
let autoclickerproduction = 1;

function updateclickResult() {
    clickResult.innerHTML = click + ' ' + 'Clicks';
};

updateclickResult();

function updateAutoClicker() {
    autoClickerAmount = autoClickerAmount + 1;
    autoclickeramount.innerHTML = autoClickerAmount;
    click = click - autoclickerWorth;
};

function autoclickerincrease() {
    autoclickerWorth = autoclickerWorth * (1 + 0.15);
    autoclickerWorth = Math.floor(autoclickerWorth);
};

function autoclickerp() {
    setInterval(() => {
        click = click + autoclickerproduction;
        updateclickResult();
    }, 1000);
}

autoclicker.onclick = function() {
    if (click >= autoclickerWorth) {
        autoclickerp();
    updateAutoClicker();
    autoclickerincrease();
    };
};

clickbutton.onclick = function() {
    click = click + clickRate;
    updateclickResult();
};