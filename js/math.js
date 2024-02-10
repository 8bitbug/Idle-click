let mainclickbutton = document.getElementById('mainclickbutton');
let displayclick = document.getElementById('displayclick');

let autoclickerWorth = parseInt(localStorage.getItem('autoclickerWorth')) || 100;
let autoclickerAmount = parseInt(localStorage.getItem('autoclickerAmount')) || 0;
let autoclickerproduction = parseInt(localStorage.getItem('autoclickerproduction')) || 1;
let autoclickerinterval;

let autoclickeritem = document.getElementById('autoclicker');
let autoclickerAmountdis = document.getElementById('autoclickeramount');
let autoclickerWorthdis = document.getElementById('autoclickercost');

let click = parseInt(localStorage.getItem('click')) || 0;
let clickRate = parseInt(localStorage.getItem('clickRate')) || 1;

for (i = 0; i < autoclickerAmount; i++) {
    setTimeout(() => {
        autoclickerproducing();
    }, 100 * i)
};

function displayclicks() {
    displayclick.innerHTML = click + ' ' + 'clicks';
}

displayclicks();

mainclickbutton.addEventListener("click", function() {
    click = click + clickRate;
    displayclicks();
})

setInterval(() => {
    localStorage.setItem('click', click);
    localStorage.setItem('clickRate', clickRate);
    localStorage.setItem('autoclickerWorth', autoclickerWorth);
    localStorage.setItem('autoclickerAmount', autoclickerAmount);
    localStorage.setItem('autoclickerproduction', autoclickerproduction);
}, 1)

function displayautoclicker() {
    autoclickerAmountdis.innerHTML = autoclickerAmount;
    autoclickerWorthdis.innerHTML = autoclickerWorth + ' ' + 'clicks';
}

displayautoclicker();

function autoclickerproducing() {
    autoclickerinterval = setInterval(() => {
        click += autoclickerproduction;
        displayclicks();
    }, 1000)
}

function autoclickerbuy() {
    if (click >= autoclickerWorth) {
        click = click - autoclickerWorth;
        autoclickerAmount = autoclickerAmount + 1;
        autoclickerWorth = autoclickerWorth * (1 + 0.16);
        autoclickerWorth = Math.floor(autoclickerWorth);
        setTimeout(() => {
            autoclickerproducing()
        }, 100 * i)
        displayautoclicker();
        displayclick();
    };
};

autoclickeritem.addEventListener("click", function() {
    autoclickerbuy();
})

setInterval(() => {
    displayclicks()
    displayautoclicker()
}, 1)