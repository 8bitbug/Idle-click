let display = {
    number: document.getElementById('clicknumber'),
    letter: document.getElementById('clickletter'),
};

let game = {
    clickButton: {
        click: 0,
        clickRate: 1,
        button: document.getElementById('gamebutton'),
    },

    autoclicker: {
        cost: 100,
        amount: 0,
        production: 1, //The autoclicker is gonna produce one click per second
        html: document.getElementById('autoclicker'),
        costhtml: document.getElementById('autoclickercost'),
        amounthtml: document.getElementById('autoclickeramount'),
    },

    clickbait: {
        cost: 1010,
        amount: 0,
        production: 1, //The clickbaiter is gonna produce five clicks per second
        html: document.getElementById('clickbait'),
        amounthtml: document.getElementById('clickbaitamount'),
        costhtml: document.getElementById('clickbaitcost'),
    },

    clickfarm: {
        cost: 11010,
        amount: 0,
        production: 1, //The clickfarm is gonna produce 25 clicks per second
        html: document.getElementById('clickfarm'),
        amounthtml: document.getElementById('clickfarmamount'),
        costhtml: document.getElementById('clickfarmcost'),
    }
};

setInterval(() => {
    save();
}, 10000);

setInterval(() => {
    displayStuff();
}, 1);

const savedGame = JSON.parse(localStorage.getItem('game'));

if (savedGame) {
    game.clickButton.click = savedGame.clickButton.click;
    game.clickButton.clickRate = savedGame.clickButton.clickRate;
    game.autoclicker.cost = savedGame.autoclicker.cost;
    game.autoclicker.amount = savedGame.autoclicker.amount;
    game.clickbait.cost = savedGame.clickbait.cost;
    game.clickbait.amount = savedGame.clickbait.amount;
    game.clickfarm.cost = savedGame.clickfarm.cost;
    game.clickfarm.amount = savedGame.clickfarm.amount;
}

window.save = function save() {
    localStorage.setItem('game', JSON.stringify(game));
}

function formatClick(number) {
    if (number < 1e3) {
        return number;
    } else if (number >= 1e3 && number < 1e6) {
        return (number / 1e3).toFixed(1);
    } else if (number >= 1e6 && number < 1e9) {
        return (number / 1e6).toFixed(1);
    }
}

function formatLetterForNumber() {
    if (game.clickButton.click < 1e3) {
        return "";
    } else if (game.clickButton.click >= 1e3 && game.clickButton.click < 1e6) {
        return " Thousand" + " clicks"
    } else if (game.clickButton.click >= 1e6 && game.clickButton.click < 1e9) {
        return " Million" + " clicks"
    }
};

function formatNumber(number) {
    if (number < 1e3) {
        return number;
    } else if (number >= 1e3 && number < 1e6) {
        return (number / 1e3).toFixed(1) + " Thousand";
    } else if (number >= 1e6 && number < 1e9) {
        return (number / 1e6).toFixed(1) + " Milloin"
    }
}

function displayStuff() {
    display.number.innerHTML = formatClick(game.clickButton.click);
    display.letter.innerHTML = formatLetterForNumber();
    if (game.clickButton.click < 1e3) {
        display.number.innerHTML = "";
        display.letter.innerHTML = game.clickButton.click + " clicks";
    }

    document.title = formatNumber(game.clickButton.click) + " - Idle Click";

    game.autoclicker.costhtml.innerHTML = formatNumber(game.autoclicker.cost) + " clicks";
    game.autoclicker.amounthtml.innerHTML = game.autoclicker.amount;
    game.clickbait.costhtml.innerHTML = formatNumber(game.clickbait.cost) + " clicks";
    game.clickbait.amounthtml.innerHTML = game.clickbait.amount;
    game.clickfarm.costhtml.innerHTML = formatNumber(game.clickfarm.cost) + " clicks";
    game.clickfarm.amounthtml.innerHTML = game.clickfarm.amount;
}

function popupClickRate() {
    let div = document.createElement("div");
    div.setAttribute('id', 'clickRatePopUp');
    div.innerHTML = "+" + formatNumber(game.clickButton.clickRate);
    div.style.position = 'absolute';
    let randomleft = Math.floor(Math.random() * 10) + 1;
    div.style.left = (event.clientX - randomleft) + 'px';
    div.style.top = (event.clientY - 25) + 'px';
    document.body.appendChild(div);
    let topPosition = parseInt(div.style.top);
    const animationInterval = setInterval(() => {
    topPosition -= 1;
    div.style.top = topPosition + 'px';
    if (topPosition <= 0) {
        clearInterval(animationInterval);
        div.remove();
    }
}, 10);
setTimeout(() => {
    div.remove();
}, 3000)
}

game.clickButton.button.addEventListener("click", () => {
    game.clickButton.click += game.clickButton.clickRate;
    popupClickRate();
})

let autoclickerIntervals = [];

function autoclickerproducing(autoclickerIndex) {
    clearInterval(autoclickerIntervals[autoclickerIndex]);
    autoclickerIntervals[autoclickerIndex] = setInterval(() => {
        game.clickButton.click += game.autoclicker.production;
        displayStuff();
    }, 1000);
}

function autoclickerloop() {
    for (let i = 0; i < game.autoclicker.amount; i++) {
        setTimeout(() => {
            autoclickerproducing(i);
        }, 400 * i);
    }
}

autoclickerloop();

let interval;
let intervaltime = 0;
const intervaltimeDelay = 1000 - intervaltime;

function buyautoclicker() {
    if (game.clickButton.click >= game.autoclicker.cost) {
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
        game.clickButton.click -= game.autoclicker.cost;
        game.autoclicker.amount += 1;
        game.autoclicker.cost *= 1.15;
        game.autoclicker.cost = Math.ceil(game.autoclicker.cost);
        setTimeout(() => {
            autoclickerloop();
        }, intervaltimeDelay)
    }
}

game.autoclicker.html.addEventListener("click", () => {
    buyautoclicker();
});

let clickbaitIntervals = [];

function clickbaitproducing(clickbaitIndex) {
    clickbaitIntervals[clickbaitIndex] = setInterval(() => {
        game.clickButton.click += game.clickbait.production;
        displayStuff();
    }, 200)
}

function buyclickbait() {
    if (game.clickButton.click >= game.clickbait.cost) {
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
        game.clickButton.click -= game.clickbait.cost;
        game.clickbait.amount += 1;
        game.clickbait.cost *= 1.15;
        game.clickbait.cost = Math.ceil(game.clickbait.cost);
        setTimeout(() => {
            clickbaitproducing()
        }, intervaltimeDelay);
    }
}

for (let i = 0; i < game.clickbait.amount; i++) {
    setTimeout(() => {
        clickbaitproducing();
    }, 400 * i)
}

game.clickbait.html.addEventListener("click", () => {
    buyclickbait();
});

let clickfarmIntervals = [];

function clickfarmproducing(clickfarmIndex) {
    clickfarmIntervals[clickfarmIndex] = setInterval(() => {
        game.clickButton.click += game.clickfarm.production;
    }, 40)
}

function buyclickfarm() {
    if (game.clickButton.click >= game.clickfarm.cost) {
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
        game.clickButton.click -= game.clickfarm.cost;
        game.clickfarm.amount += 1;
        game.clickfarm.cost *= 1.15;
        game.clickfarm.cost = Math.ceil(game.clickfarm.cost);
        setTimeout(() => {
            clickfarmproducing();
        }, intervaltimeDelay)
    }
}

for (let i = 0; i < game.clickfarm.amount; i++) {
    clickfarmproducing();
};

game.clickfarm.html.addEventListener("click", () => {
    buyclickfarm();
});