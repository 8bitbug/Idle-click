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

    autoclickerlvl: {
        level: 1,
        exp: 0,
        expgain: 1,
        exptotallvlup: 1000,
        get lefttolvlup() {
            return this.exptotallvlup - this.exp;
        },
        lvlhtml: document.getElementById('autoclickerlvldis'),
        exphtml: document.getElementById('autoclickerexp'),
        proggressbar: document.getElementById('autoclickerProggressBar'),
    },

    clickbaitlvl: {
        level: 1,
        exp: 0,
        expgain: 1,
        exptotallvlup: 5555,
        get lefttolvlup() {
            return this.exptotallvlup - this.exp
        },
        lvlhtml: document.getElementById('clickbaitlvldis'),
        exphtml: document.getElementById('clickbaitexpdis'),
        proggressbar: document.getElementById('clickbaitProggressBar'),
    },

    clickfarmlvl: {
        level: 1,
        exp: 0,
        expgain: 1,
        exptotallvlup: 27311,
        get lefttolvlup() {
            return this.exptotallvlup - this.exp;
        },
        lvlhtml: document.getElementById('clickfarmlvldis'),
        exphtml: document.getElementById('clickfarmexpdis'),
        proggressbar: document.getElementById('clickfarmProggressBar'),
    },

    computerlvl: {
        level: 1,
        exp: 0,
        expgain: 1,
        exptotallvlup: 101010,
        get lefttolvlup() {
            return this.exptotallvlup - this.exp;
        },
        lvlhtml: document.getElementById('computerlvldis'),
        exphtml: document.getElementById('computerexpdis'),
        proggressbar: document.getElementById('computerProggressBar'),
    },

    autoclicker: {
        cost: 100,
        amount: 0,
        production: 1,
        persecond: 1,
        html: document.getElementById('autoclicker'),
        costhtml: document.getElementById('autoclickercost'),
        amounthtml: document.getElementById('autoclickeramount'),
    },

    clickbait: {
        cost: 1010,
        amount: 0,
        production: 1,
        persecond: 10,
        html: document.getElementById('clickbait'),
        amounthtml: document.getElementById('clickbaitamount'),
        costhtml: document.getElementById('clickbaitcost'),
    },

    clickfarm: {
        cost: 11010,
        amount: 0,
        production: 1,
        persecond: 100,
        html: document.getElementById('clickfarm'),
        amounthtml: document.getElementById('clickfarmamount'),
        costhtml: document.getElementById('clickfarmcost'),
    },

    clickcomputer: {
        cost: 101101,
        amount: 0,
        production: 10,
        persecond: 1000,
        html: document.getElementById('clickcomputer'),
        amounthtml: document.getElementById('clickcomputeramount'),
        costhtml: document.getElementById('clickcomputercost'),
    }
};

class Acheivment {
    constructor(name, description, requirement, reward) {
        this.name = name;
        this.description = description;
        this.requirement = requirement;
        this.reward = reward;
        this.unlocked = false;
    }

    checkUnlock(requirementMet) {
        if (!this.unlocked && requirementMet) {
            this.unlocked = true;
            // Notify player
            if (this.reward) {
                // Reward
            }
        }
    }
}

let productionProperties = Object.keys(Game).filter(key => 
    key.endsWith('lvl') || key.endsWith('click') || key.endsWith('farm') || key.endsWith('computer')
);

setInterval(() => {
    save();
}, 10000);

setInterval(() => {
    displayStuff();
    autoclickerLVLup();
    clickbaitLVLup();
    clickfarmLVLup();
    clickcomputerLVLup();
}, 1);

const savedGame = JSON.parse(localStorage.getItem('Game'));

if (savedGame) {
    Game.click = savedGame.click;
    Game.clickRate = savedGame.clickRate;
    Game.autoclicker.cost = savedGame.autoclicker.cost;
    Game.autoclicker.amount = savedGame.autoclicker.amount;
    Game.autoclicker.production = savedGame.autoclicker.production
    Game.clickbait.cost = savedGame.clickbait.cost;
    Game.clickbait.amount = savedGame.clickbait.amount;
    Game.clickbait.production = savedGame.clickbait.production;
    Game.clickcomputer.cost = savedGame.clickcomputer.cost;
    Game.clickcomputer.amount = savedGame.clickcomputer.amount;
    Game.clickcomputer.production = savedGame.clickcomputer.production;
    Game.clickfarm.cost = savedGame.clickfarm.cost;
    Game.clickfarm.amount = savedGame.clickfarm.amount;
    Game.clickfarm.production = savedGame.clickfarm.production;
    Game.cursor.exp = savedGame.cursor.exp;
    Game.cursor.expgain = savedGame.cursor.expgain;
    Game.cursor.level = savedGame.cursor.level;
    Game.cursor.exptotallvlup = savedGame.cursor.exptotallvlup;
    Game.clickpersecond = savedGame.clickpersecond;
    Game.autoclickerlvl.exp = savedGame.autoclickerlvl.exp;
    Game.autoclickerlvl.exptotallvlup = savedGame.autoclickerlvl.exptotallvlup;
    Game.autoclickerlvl.level = savedGame.autoclickerlvl.level;
    Game.autoclickerlvl.expgain = savedGame.autoclickerlvl.expgain;
    Game.clickbaitlvl.exp = savedGame.clickbaitlvl.exp;
    Game.clickbaitlvl.exptotallvlup = savedGame.clickbaitlvl.exptotallvlup;
    Game.clickbaitlvl.level = savedGame.clickbaitlvl.level;
    Game.clickbaitlvl.expgain = savedGame.clickbaitlvl.expgain;
    Game.clickfarmlvl.exp = savedGame.clickfarmlvl.exp;
    Game.clickfarmlvl.exptotallvlup = savedGame.clickfarmlvl.exptotallvlup;
    Game.clickfarmlvl.level = savedGame.clickfarmlvl.level;
    Game.clickfarmlvl.expgain = savedGame.clickfarmlvl.expgain;
    Game.computerlvl.exp = savedGame.computerlvl.exp;
    Game.computerlvl.exptotallvlup = savedGame.computerlvl.exptotallvlup;
    Game.computerlvl.level = savedGame.computerlvl.level;
    Game.computerlvl.expgain = savedGame.computerlvl.expgain;
    Game.autoclicker.persecond = savedGame.autoclicker.persecond;
    Game.clickbait.persecond = savedGame.clickbait.persecond;
    Game.clickfarm.persecond = savedGame.clickfarm.persecond;
    Game.clickcomputer.persecond = savedGame.clickcomputer.persecond;
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
    } else if (number >= 1e9 && number < 1e12) {
        return (number / 1e9).toFixed(1)
    } else if (number >= 1e12 && number < 1e15) {
        return (number / 1e12).toFixed(1)
    } else if (number >= 1e15 && number < 1e18) {
        return (number / 1e15).toFixed(1)
    }
}

function formatLetterForNumber() {
    if (Game.click < 1e3) {
        return "";
    } else if (Game.click >= 1e3 && Game.click < 1e6) {
        return " Thousand" + " clicks"
    } else if (Game.click >= 1e6 && Game.click < 1e9) {
        return " Million" + " clicks"
    } else if (Game.click >= 1e9 && Game.click < 1e12) {
        return " Billion" + " clicks"
    } else if (Game.click >= 1e12 && Game.click < 1e15) {
        return " Trillion" + " clicks"
    } else if (Game.click >= 1e15 && Game.click < 1e18) {
        return " Quadrillion" + " clicks"
    }
};

function formatNumber(number) {
    if (number < 1e3) {
        return number;
    } else if (number >= 1e3 && number < 1e6) {
        return (number / 1e3).toFixed(1) + " Thousand";
    } else if (number >= 1e6 && number < 1e9) {
        return (number / 1e6).toFixed(1) + " Million";
    } else if (number >= 1e9 && number < 1e12) {
        return (number / 1e9).toFixed(1) + " Billion";
    } else if (number >= 1e12 && number < 1e15) {
        return (number / 1e12).toFixed(1) + " Trillion";
    } else if (number >= 1e15 && number < 1e18) {
        return (number / 1e15).toFixed(1) + " Quadrillion";
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

    document.getElementById('persecondautoclicker').innerHTML = 'Per Second: ' + formatNumber(Game.autoclicker.persecond) + ' clicks';
    document.getElementById('persecondclickbait').innerHTML = 'Per Second: ' + formatNumber(Game.clickbait.persecond) + ' clicks';
    document.getElementById('persecondclickfarm').innerHTML = 'Per Second: ' + formatNumber(Game.clickfarm.persecond) + ' clicks';
    document.getElementById('persecondclickcomputer').innerHTML = 'Per Second: ' + formatNumber(Game.clickcomputer.persecond) + ' clicks';

    Game.autoclicker.costhtml.innerHTML = formatNumber(Game.autoclicker.cost) + ' clicks';
    Game.autoclicker.amounthtml.innerHTML = Game.autoclicker.amount;
    Game.clickbait.costhtml.innerHTML = formatNumber(Game.clickbait.cost) + ' clicks';
    Game.clickbait.amounthtml.innerHTML = Game.clickbait.amount;
    Game.clickfarm.costhtml.innerHTML = formatNumber(Game.clickfarm.cost) + ' clicks';
    Game.clickfarm.amounthtml.innerHTML = Game.clickfarm.amount;
    Game.clickcomputer.costhtml.innerHTML = formatNumber(Game.clickcomputer.cost) + ' clicks';
    Game.clickcomputer.amounthtml.innerHTML = Game.clickcomputer.amount
    Game.cursor.lvlhtml.innerHTML = "Level: " + formatNumber(Game.cursor.level);
    Game.cursor.exphtml.innerHTML = 'Exp: ' + formatNumber(Game.cursor.exp) + "/" + formatNumber(Game.cursor.exptotallvlup);
    Game.autoclickerlvl.lvlhtml.innerHTML = "Level: " + formatNumber(Game.autoclickerlvl.level);
    Game.autoclickerlvl.exphtml.innerHTML = "Exp: " + formatNumber(Game.autoclickerlvl.exp) + "/" + formatNumber(Game.autoclickerlvl.exptotallvlup);
    Game.clickbaitlvl.lvlhtml.innerHTML = "Level: " + formatNumber(Game.clickbaitlvl.level)
    Game.clickbaitlvl.exphtml.innerHTML = "Exp: " + formatNumber(Game.clickbaitlvl.exp) + "/" + formatNumber(Game.clickbaitlvl.exptotallvlup);
    Game.clickfarmlvl.lvlhtml.innerHTML = "Level: " + formatNumber(Game.clickfarmlvl.level);
    Game.clickfarmlvl.exphtml.innerHTML = "Exp: " + formatNumber(Game.clickfarmlvl.exp) + "/" + formatNumber(Game.clickfarmlvl.exptotallvlup);
    Game.computerlvl.lvlhtml.innerHTML = "Level: " + formatNumber(Game.computerlvl.level);
    Game.computerlvl.exphtml.innerHTML = "Exp: " + formatNumber(Game.computerlvl.exp) + "/" + formatNumber(Game.computerlvl.exptotallvlup);

    Game.clickpersecondhtml.innerHTML = 'Per Second: ' + formatNumber(Game.clickpersecond);
}

let popupColor = 'black';

function popupClickRate() {
    let div = document.createElement("div");
    div.setAttribute('id', 'clickRatePopUp');
    div.innerHTML = "+" + formatNumber(Game.clickRate);
    div.style.position = 'absolute';
    div.style.color = popupColor;
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

let autoclickerinterval;

function autoclickerproducing() {
    let interval = 1000 / Game.autoclicker.amount;
    if (interval <= 1) {
        setInterval(() => {
            Game.click += Game.autoclicker.amount;
            Game.autoclickerlvl.exp += Game.autoclickerlvl.expgain;
            autoclickerLVLup();
        }, interval);
    } else if (Game.autoclicker.amount >= 1) {
        clearInterval(autoclickerinterval)
        autoclickerinterval = setInterval(() => {
            Game.click += Game.autoclicker.production;
            Game.autoclickerlvl.exp += Game.autoclickerlvl.expgain;
            autoclickerLVLup();
        }, interval);
    }
}

autoclickerproducing();

function buyautoclicker() {
    if (Game.click >= Game.autoclicker.cost) {
        Game.click -= Game.autoclicker.cost;
        Game.autoclicker.amount += 1;
        Game.autoclicker.cost *= 1.15;
        Game.autoclicker.cost = Math.ceil(Game.autoclicker.cost);
        Game.clickpersecond += Game.autoclicker.persecond;
        autoclickerproducing();
    }
}


Game.autoclicker.html.addEventListener("click", () => {
    buyautoclicker();
});

let clickbaitinterval;

function clickbaitproducing() {
    let interval = 1000 / Game.clickbait.persecond / Game.clickbait.amount;
    if (interval <= 1) {
        setInterval(() => {
            Game.click += Game.clickbait.production;
            Game.clickbaitlvl.exp += Game.clickbaitlvl.expgain;
        }, interval)
    } else if (Game.clickbait.amount >= 1) {
        clearInterval(clickbaitinterval);
        clickbaitinterval = setInterval(() => {
            Game.click += Game.clickbait.production;
            Game.clickbaitlvl.exp += Game.clickbaitlvl.expgain;
        }, interval);
    }
}

clickbaitproducing();

function buyclickbait() {
    if (Game.click >= Game.clickbait.cost) {
        Game.click -= Game.clickbait.cost;
        Game.clickbait.amount += 1;
        Game.clickbait.cost *= 1.15;
        Game.clickbait.cost = Math.ceil(Game.clickbait.cost);
        Game.clickpersecond += Game.clickbait.persecond;
        clickbaitproducing();
    }
}

Game.clickbait.html.addEventListener("click", () => {
    buyclickbait();
});

let clickfarminterval;

function clickfarmproducing() {
    let interval = 1000 / Game.clickfarm.persecond / Game.clickfarm.amount;
    if (interval <= 1) {
        setInterval(() => {
            Game.click += Game.clickfarm.production;
            Game.clickfarmlvl.exp += Game.clickfarmlvl.expgain;
        }, interval)
    } else if (Game.clickfarm.amount >= 1) {
        clearInterval(clickfarminterval);
        clickfarminterval = setInterval(() => {
            Game.click += Game.clickfarm.production;
            Game.clickfarmlvl.exp += Game.clickfarmlvl.expgain;
        }, interval);
    }
}

clickfarmproducing();

function buyclickfarm() {
    if (Game.click >= Game.clickfarm.cost) {
        Game.click -= Game.clickfarm.cost;
        Game.clickfarm.amount += 1;
        Game.clickfarm.cost *= 1.15;
        Game.clickfarm.cost = Math.ceil(Game.clickfarm.cost);
        Game.clickpersecond += Game.clickfarm.persecond;
        clickfarmproducing();
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

let cursorwidth = 210;

Game.button.addEventListener("mouseover", () => {
    cursorwidth += 10;
    Game.button.style.height = '210px';
    Game.button.style.width = cursorwidth + 'px';
})

Game.button.addEventListener("mouseout", () => {
    cursorwidth -= 10;
    Game.button.style.height = '200px';
    Game.button.style.width = cursorwidth + 'px';
})

function autoclickerLVLup() {
    const gainpercent = (Game.autoclickerlvl.exp / Game.autoclickerlvl.exptotallvlup) * 100;
    Game.autoclickerlvl.proggressbar.style.width = gainpercent + '%';
    if (Game.autoclickerlvl.exp >= Game.autoclickerlvl.exptotallvlup) {
        Game.autoclickerlvl.exp = 0;
        let percentincrease = Math.random() * (5 - 3) + 3;
        Game.autoclickerlvl.exptotallvlup *= percentincrease;
        Game.autoclickerlvl.exptotallvlup = Math.floor(Game.autoclickerlvl.exptotallvlup);
        Game.autoclickerlvl.level += 1;
        Game.autoclicker.production *= 2;
        Game.autoclicker.persecond *= 2; 
        Game.clickpersecond = Game.autoclicker.amount * Game.autoclicker.persecond;
    }
}

function clickbaitLVLup() {
    const gainpercent = (Game.clickbaitlvl.exp / Game.clickbaitlvl.exptotallvlup) * 100;
    Game.clickbaitlvl.proggressbar.style.width = gainpercent + '%';
    if (Game.clickbaitlvl.exp >= Game.clickbaitlvl.exptotallvlup) {
        Game.clickbaitlvl.exp = 0;
        let percentincrease = Math.random() * (5 - 3) + 3;
        Game.clickbaitlvl.exptotallvlup *= percentincrease;
        Game.clickbaitlvl.exptotallvlup = Math.floor(Game.clickbaitlvl.exptotallvlup);
        Game.clickbaitlvl.level += 1;
        Game.clickbait.production *= 2;
        Game.clickbait.persecond *= 2; 
        Game.clickpersecond = Game.clickbait.amount * Game.clickbait.persecond;
    }
}

function clickfarmLVLup() {
    const gainpercent = (Game.clickfarmlvl.exp / Game.clickfarmlvl.exptotallvlup) * 100;
    Game.clickfarmlvl.proggressbar.style.width = gainpercent + '%';
    if (Game.clickfarmlvl.exp >= Game.clickfarmlvl.exptotallvlup) {
        Game.clickfarmlvl.exp = 0;
        let percentincrease = Math.random() * (5 - 3) + 3;
        Game.clickfarmlvl.exptotallvlup *= percentincrease;
        Game.clickfarmlvl.exptotallvlup = Math.floor(Game.clickfarmlvl.exptotallvlup);
        Game.clickfarmlvl.level += 1;
        Game.clickfarm.production *= 2;
        Game.clickfarm.persecond *= 2; 
        Game.clickpersecond = Game.clickfarm.amount * Game.clickfarm.persecond;
    }
}

function clickcomputerLVLup() {
    const gainpercent = (Game.computerlvl.exp / Game.computerlvl.exptotallvlup) * 100;
    Game.computerlvl.proggressbar.style.width = gainpercent + '%';
    if (Game.computerlvl.exp >= Game.computerlvl.exptotallvlup) {
        Game.computerlvl.exp = 0;
        let percentincrease = Math.random() * (5 - 3) + 3;
        Game.computerlvl.exptotallvlup *= percentincrease;
        Game.computerlvl.exptotallvlup = Math.floor(Game.computerlvl.exptotallvlup);
        Game.computerlvl.level += 1;
        Game.clickcomputer.production *= 2;
        Game.clickcomputer.persecond *= 2; 
        Game.clickpersecond = Game.clickcomputer.amount * Game.clickcomputer.persecond;
    }
}

Game.autoclicker.html.addEventListener('mousemove', function(event) {
    let mouseY = event.pageY;
    document.getElementById('autoclickerabout').style.top = mouseY + 'px';
    document.getElementById('autoclickerabout').style.display = 'block';
})

Game.autoclicker.html.addEventListener('mouseleave', function() {
    document.getElementById('autoclickerabout').style.display = 'none'
})

Game.clickbait.html.addEventListener('mousemove', function(event) {
    let mouseY = event.pageY;
    document.getElementById('clickbaitabout').style.top = mouseY + 'px';
    document.getElementById('clickbaitabout').style.display = 'block';
})

Game.clickbait.html.addEventListener('mouseleave', function() {
    document.getElementById('clickbaitabout').style.display = 'none';
})

Game.clickfarm.html.addEventListener('mousemove', function(event) {
    let mouseY = event.pageY;
    document.getElementById('clickfarmabout').style.top = mouseY + 'px';
    document.getElementById('clickfarmabout').style.display = 'block';
})

Game.clickfarm.html.addEventListener('mouseleave', function() {
    document.getElementById('clickfarmabout').style.display = 'none'
})

Game.clickcomputer.html.addEventListener('mousemove', function(event) {
    let mouseY = event.pageY;
    document.getElementById('clickcomputerabout').style.top = mouseY + 'px';
    document.getElementById('clickcomputerabout').style.display = 'block';
})

Game.clickcomputer.html.addEventListener('mouseleave', function() {
    document.getElementById('clickcomputerabout').style.display = 'none';
})

document.getElementById('levelinfo').addEventListener('click', () => {
    let levelaboutElement = document.getElementById('levelabout');

    if (levelaboutElement.style.display === 'block') {
        levelaboutElement.style.display = 'none';
    } else {
        levelaboutElement.style.display = 'block';
    }
})

let clickcomputerinterval;

function clickcomputerproducing() {
    let interval = 1000 / Game.clickcomputer.persecond / Game.clickcomputer.amount;
    if (interval <= 1) {
        setInterval(() => {
            Game.click += Game.clickcomputer.production;
            Game.computerlvl.exp += Game.computerlvl.expgain;
        }, interval)
    } else if (Game.clickcomputer.amount >= 1) {
        clearInterval(clickcomputerinterval);
        clickcomputerinterval = setInterval(() => {
            Game.click += Game.clickcomputer.production;
            Game.computerlvl.exp += Game.computerlvl.expgain;
        }, interval);
    }
}

clickcomputerproducing();

function buyclickcomputer() {
    if (Game.click >= Game.clickcomputer.cost) {
        Game.click -= Game.clickcomputer.cost;
        Game.clickcomputer.amount += 1;
        Game.clickcomputer.cost *= 1.15;
        Game.clickcomputer.cost = Math.ceil(Game.clickcomputer.cost);
        Game.clickpersecond += Game.clickcomputer.persecond;
        clickcomputerproducing();
    }    
}

Game.clickcomputer.html.addEventListener("click", () => {
    buyclickcomputer();
});