let extrabuttons = {
    settings: document.getElementById('settingsButton'),
    info: document.getElementById('infoButton'),
    stats: document.getElementById('statsButton'),
    prestige: document.getElementById('prestigeButton'),
};

let content = {
    extra: document.getElementById('levelArea'),

    settings: {
        settingscontent: document.getElementById('settingscontent'),
        saveButton: document.getElementById('saveButton'),
        deletesaveButton: document.getElementById('deletesaveButton'),
        darkmodeButton: document.getElementById('darkmodeButton'),
        lightmodeButton: document.getElementById('lightmodeButton'),
    },
}

function opensettings() {
    if (content.settings.settingscontent.style.display == 'block') {
        content.settings.settingscontent.style.display = 'none';
        content.extra.style.display = 'block';
    } else {
        content.settings.settingscontent.style.display = 'block';
        content.extra.style.display = 'none';
    }
};

extrabuttons.settings.addEventListener("click", () => {
    opensettings();
})

content.settings.saveButton.addEventListener("click", () => {
    save();
})

content.settings.deletesaveButton.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
})

extrabuttons.info.addEventListener('click', () => {
    alert("Not yet implemented");
});

extrabuttons.prestige.addEventListener('click', () => {
    alert("Not yet implemented");
});

extrabuttons.stats.addEventListener('click', () => {
    alert("Not yet implemented");
});

if (screen.height < 1000 && screen.width < 1000) {
    document.body.innerHTML = '';
    document.write('Looks like you are on mobile and this game is not made for mobile')
    document.write(' and im not planning to make it for mobile any time soon')
}

let darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

function applyDarkMode() {
        function invertColors() {
            var allElements = document.querySelectorAll('*');
        
            for (var i = 0; i < allElements.length; i++) {
                var element = allElements[i];
                var bgColor = getComputedStyle(element).backgroundColor;
                var color = getComputedStyle(element).color;
        
                
                if (bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
                    element.style.backgroundColor = invertColor(bgColor);
                }
        
                
                element.style.color = invertColor(color);
        
                
                var borderColor = getComputedStyle(element).borderColor;
                if (borderColor !== 'rgba(0, 0, 0, 0)' && borderColor !== 'transparent') {
                    element.style.borderColor = invertColor(borderColor);
                }
            }
        }
        
        function invertColor(color) {
            color = color.trim();
            if (color.match(/^#[0-9A-Fa-f]{6}$/)) {
                // Invert hex color
                color = (Number(`0x${color.slice(1)}`) ^ 0xFFFFFF).toString(16);
                color = '#' + ('000000' + color).slice(-6);
            } else if (color.startsWith('rgb')) {
                var parts = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)$/);
                if (parts) {
                    color = 'rgb(' + (255 - parseInt(parts[1], 10)) + ',' + (255 - parseInt(parts[2], 10)) + ',' + (255 - parseInt(parts[3], 10)) + ')';
                }
            }
        
            return color;
        }
    
        invertColors();
        
        cursorwidth = 140;
        
        document.getElementById('levelinfo').style.borderColor = 'white';
        document.getElementById('middleSection').style.borderColor = 'white'
        Game.button.src = 'images/click.jpg';
        Game.button.style.width = '140px';
        document.getElementById('cursorIcon').src = 'images/cursor.jpg';
        document.getElementById('autoclickerlvlicon').src = 'images/autoclickerlvldark.jpg';
        document.getElementById('clickfarmlvlicon').src = 'images/clickfarmlvldark.jpg';
        document.getElementById('autoclickericon').src = 'images/autoclickericondark.jpg';
        document.getElementById('clickfarmicon').src = 'images/clickfarmdark.jpg';
        document.getElementById('clickcomputericon').src = 'images/computerdark.jpg';
        document.getElementById('computerlvlicon').src = 'images/computerlvldark.jpg';
        document.getElementById('computerLvL').style.borderColor = 'white';
        document.getElementById('cursor').style.borderColor = 'white';
        document.getElementById('autoclickerLvL').style.borderColor = 'white';
        document.getElementById('clickbaitLvL').style.borderColor = 'white';
        document.getElementById('clickfarmLvL').style.borderColor = 'white';
        document.getElementById('uititle').style.borderColor = 'white';
        popupColor = 'white';
        darkModeEnabled = true;
}

function applyLightMode() {
    function invertColors() {
        var allElements = document.querySelectorAll('*');
    
        for (var i = 0; i < allElements.length; i++) {
            var element = allElements[i];
            var bgColor = getComputedStyle(element).backgroundColor;
            var color = getComputedStyle(element).color;
    
            
            if (bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
                element.style.backgroundColor = invertColor(bgColor);
            }
    
            
            element.style.color = invertColor(color);
    
            
            var borderColor = getComputedStyle(element).borderColor;
            if (borderColor !== 'rgba(0, 0, 0, 0)' && borderColor !== 'transparent') {
                element.style.borderColor = invertColor(borderColor);
            }
        }
    }
    
    function invertColor(color) {
        color = color.trim();
        if (color.match(/^#[0-9A-Fa-f]{6}$/)) {
            // Invert hex color
            color = (Number(`0x${color.slice(1)}`) ^ 0xFFFFFF).toString(16);
            color = '#' + ('000000' + color).slice(-6);
        } else if (color.startsWith('rgb')) {
            var parts = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)$/);
            if (parts) {
                color = 'rgb(' + (255 - parseInt(parts[1], 10)) + ',' + (255 - parseInt(parts[2], 10)) + ',' + (255 - parseInt(parts[3], 10)) + ')';
            }
        }
    
        return color;
    }

    invertColors();
    
    cursorwidth = 210;
    
    document.getElementById('levelinfo').style.borderColor = 'black';
    document.getElementById('middleSection').style.borderColor = 'black'
    Game.button.src = 'https://cdn-icons-png.flaticon.com/512/1828/1828166.png';
    Game.button.style.width = '200px';
    document.getElementById('cursorIcon').src = 'images/cursorlvl.png';
    document.getElementById('autoclickerlvlicon').src = 'images/autoclickerlvlicon.png';
    document.getElementById('clickfarmlvlicon').src = 'images/clickfarmlvlicon.png';
    document.getElementById('autoclickericon').src = 'https://cdn4.iconfinder.com/data/icons/pixel-web-part-1/512/pointer2-512.png';
    document.getElementById('clickfarmicon').src = 'https://t4.ftcdn.net/jpg/02/42/06/43/360_F_242064318_vuiZTMFZduikjlkEBcb2wSpmIQd67Ams.jpg';
    document.getElementById('clickcomputericon').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU5rBT0NkcHRYiGPNyhhhFJYCwIbIGVGZ4HcbNg3NhoQ&s';
    document.getElementById('computerlvlicon').src = 'images/clickcomputer.png';
    document.getElementById('cursor').style.borderColor = 'black';
    document.getElementById('autoclickerLvL').style.borderColor = 'black';
    document.getElementById('clickbaitLvL').style.borderColor = 'black';
    document.getElementById('clickfarmLvL').style.borderColor = 'black';
    document.getElementById('computerLvL').style.borderColor = 'black';
    document.getElementById('uititle').style.borderColor = 'black';
    popupColor = 'black';
    darkModeEnabled = false;
}

document.addEventListener('DOMContentLoaded', () => {
    let darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

    if (darkModeEnabled) {
        applyDarkMode();
    } else {}
});

content.settings.darkmodeButton.addEventListener('click', () => {
    if (!darkModeEnabled) {
        applyDarkMode();
        darkModeEnabled = true;
    }

    localStorage.setItem('darkModeEnabled', darkModeEnabled);
});

content.settings.lightmodeButton.addEventListener('click', () => {
    if (darkModeEnabled) {
        applyLightMode();
        darkModeEnabled = false;
    }

    localStorage.setItem('darkModeEnabled', darkModeEnabled);
});