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