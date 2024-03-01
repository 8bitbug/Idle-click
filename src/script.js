let display = {
    number: document.getElementById('clicknumber'),
    letter: document.getElementById('clickletter'),
};

let Game = {
    click: 0,
    clickRate: 1,
    button: document.getElementById('gamebutton'),

    clickpersecond: 0,
    clickpersecondhtml: document.getElementById('clickpersecond'),

    cursor: {
        level: 1,
        exp: 0,
        expgain: 1,
        exptotallvlup: 100,
        get lefttolvlup() {
            return this.exptotallvlup - this.exp;
        },
        lvlhtml: document.getElementById('cursorlvl'),
        exphtml: document.getElementById('cursorexp'),
        proggressbar: document.getElementById('cursorProggressBar'),
    },

    autoclicker: {
        cost: 100,
        amount: 0,
        production: 1, //The autoclicker is gonna produce one click per second
        persecond: 1,
        html: document.getElementById('autoclicker'),
        costhtml: document.getElementById('autoclickercost'),
        amounthtml: document.getElementById('autoclickeramount'),
    },

    clickbait: {
        cost: 1010,
        amount: 0,
        production: 1, //The clickbaiter is gonna produce five clicks per second
        persecond: 5,
        html: document.getElementById('clickbait'),
        amounthtml: document.getElementById('clickbaitamount'),
        costhtml: document.getElementById('clickbaitcost'),
    },

    clickfarm: {
        cost: 11010,
        amount: 0,
        production: 1, //The clickfarm is gonna produce 25 clicks per second
        persecond: 25,
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

const savedGame = JSON.parse(localStorage.getItem('Game'));

if (savedGame) {
    Game.click = savedGame.click;
    Game.clickRate = savedGame.clickRate;
    Game.autoclicker.cost = savedGame.autoclicker.cost;
    Game.autoclicker.amount = savedGame.autoclicker.amount;
    Game.clickbait.cost = savedGame.clickbait.cost;
    Game.clickbait.amount = savedGame.clickbait.amount;
    Game.clickfarm.cost = savedGame.clickfarm.cost;
    Game.clickfarm.amount = savedGame.clickfarm.amount;
    Game.cursor.exp = savedGame.cursor.exp;
    Game.cursor.expgain = savedGame.cursor.expgain;
    Game.cursor.level = savedGame.cursor.level;
    Game.cursor.exptotallvlup = savedGame.cursor.exptotallvlup;
    Game.clickpersecond = savedGame.clickpersecond;
}

window.save = function save() {
    localStorage.setItem('Game', JSON.stringify(Game));
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
    if (Game.click < 1e3) {
        return "";
    } else if (Game.click >= 1e3 && Game.click < 1e6) {
        return " Thousand" + " clicks"
    } else if (Game.click >= 1e6 && Game.click < 1e9) {
        return " Million" + " clicks"
    }
};

function formatNumber(number) {
    if (number < 1e3) {
        return number;
    } else if (number >= 1e3 && number < 1e6) {
        return (number / 1e3).toFixed(1) + " Thousand";
    } else if (number >= 1e6 && number < 1e9) {
        return (number / 1e6).toFixed(1) + " Million";
    };
};

function displayStuff() {
    display.number.innerHTML = formatClick(Game.click);
    display.letter.innerHTML = formatLetterForNumber();
    if (Game.click < 1e3) {
        display.number.innerHTML = "";
        display.letter.innerHTML = Game.click + " clicks";
    }

    document.title = formatNumber(Game.click) + " - Idle Click";

    Game.autoclicker.costhtml.innerHTML = formatNumber(Game.autoclicker.cost) + ' clicks';
    Game.autoclicker.amounthtml.innerHTML = Game.autoclicker.amount;
    Game.clickbait.costhtml.innerHTML = formatNumber(Game.clickbait.cost) + ' clicks';
    Game.clickbait.amounthtml.innerHTML = Game.clickbait.amount;
    Game.clickfarm.costhtml.innerHTML = formatNumber(Game.clickfarm.cost) + ' clicks';
    Game.clickfarm.amounthtml.innerHTML = Game.clickfarm.amount;
    Game.cursor.lvlhtml.innerHTML = "Level: " + formatNumber(Game.cursor.level);
    Game.cursor.exphtml.innerHTML = 'Exp: ' + formatNumber(Game.cursor.exp) + "/" + formatNumber(Game.cursor.exptotallvlup);

    Game.clickpersecondhtml.innerHTML = 'Per Second: ' + formatNumber(Game.clickpersecond);
}

function popupClickRate() {
    let div = document.createElement("div");
    div.setAttribute('id', 'clickRatePopUp');
    div.innerHTML = "+" + formatNumber(Game.clickRate);
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

Game.button.addEventListener("click", () => {
    Game.click += Game.clickRate;
    popupClickRate();
})

let autoclickerIntervals = [];

function autoclickerproducing(autoclickerIndex) {
    clearInterval(autoclickerIntervals[autoclickerIndex]);
    autoclickerIntervals[autoclickerIndex] = setInterval(() => {
        Game.click += Game.autoclicker.production;
        displayStuff();
    }, 1000);
}

function autoclickerloop() {
    for (let i = 0; i < Game.autoclicker.amount; i++) {
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
    if (Game.click >= Game.autoclicker.cost) {
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
        Game.click -= Game.autoclicker.cost;
        Game.autoclicker.amount += 1;
        Game.autoclicker.cost *= 1.15;
        Game.autoclicker.cost = Math.ceil(Game.autoclicker.cost);
        Game.clickpersecond += Game.autoclicker.persecond; // Increment click per second count
        setTimeout(() => {
            autoclickerloop();
        }, intervaltimeDelay)
    }
}


Game.autoclicker.html.addEventListener("click", () => {
    buyautoclicker();
});

let clickbaitIntervals = [];

function clickbaitproducing(clickbaitIndex) {
    clickbaitIntervals[clickbaitIndex] = setInterval(() => {
        Game.click += Game.clickbait.production;
        displayStuff();
    }, 200)
}

function buyclickbait() {
    if (Game.click >= Game.clickbait.cost) {
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
        Game.click -= Game.clickbait.cost;
        Game.clickbait.amount += 1;
        Game.clickbait.cost *= 1.15;
        Game.clickbait.cost = Math.ceil(Game.clickbait.cost);
        Game.clickpersecond += Game.clickbait.persecond;
        setTimeout(() => {
            clickbaitproducing()
        }, intervaltimeDelay);
    }
}

for (let i = 0; i < Game.clickbait.amount; i++) {
    setTimeout(() => {
        clickbaitproducing();
    }, 400 * i)
}

Game.clickbait.html.addEventListener("click", () => {
    buyclickbait();
});

let clickfarmIntervals = [];

function clickfarmproducing(clickfarmIndex) {
    clickfarmIntervals[clickfarmIndex] = setInterval(() => {
        Game.click += Game.clickfarm.production;
    }, 40)
}

function buyclickfarm() {
    if (Game.click >= Game.clickfarm.cost) {
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
        Game.click -= Game.clickfarm.cost;
        Game.clickfarm.amount += 1;
        Game.clickfarm.cost *= 1.15;
        Game.clickfarm.cost = Math.ceil(Game.clickfarm.cost);
        Game.clickpersecond += Game.clickfarm.persecond;
        setTimeout(() => {
            clickfarmproducing();
        }, intervaltimeDelay)
    }
}

for (let i = 0; i < Game.clickfarm.amount; i++) {
    clickfarmproducing();
};

Game.clickfarm.html.addEventListener("click", () => {
    buyclickfarm();
});

let middleSection = document.getElementById('middleSection');

window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth;
    let middleSectionWidth;
    const difference = 1363 - windowWidth;
    const widthAdjustment = Math.floor(difference / 3) * 0.08;
    middleSectionWidth = 43.5 - widthAdjustment;
    middleSection.style.width = middleSectionWidth + '%';
});

const gainpercent = (Game.cursor.exp / Game.cursor.exptotallvlup) * 100;
Game.cursor.proggressbar.style.width = gainpercent + '%';

Game.button.addEventListener("click", () => {
    Game.cursor.exp += Game.cursor.expgain;
    const gainpercent = (Game.cursor.exp / Game.cursor.exptotallvlup) * 100;
    Game.cursor.proggressbar.style.width = gainpercent + '%';
    if (Game.cursor.exp >= Game.cursor.exptotallvlup) {
        Game.cursor.exp = 0;
        let percentincrease = Math.random() * (5 - 3) + 3;
        Game.cursor.exptotallvlup *= percentincrease;
        Game.cursor.exptotallvlup = Math.floor(Game.cursor.exptotallvlup);
        Game.cursor.level += 1;
        Game.clickRate = Game.clickRate * 2;
    }
})

Game.button.addEventListener("mouseover", () => {
    Game.button.style.height = '210px';
    Game.button.style.width = '210px';
})

Game.button.addEventListener("mouseout", () => {
    Game.button.style.height = '200px';
    Game.button.style.width = '200px';
})
