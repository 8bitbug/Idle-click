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