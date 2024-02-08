let mainclickbutton = document.getElementById('mainclickbutton');
let displayclick = document.getElementById('displayclick');

let click = parseInt(localStorage.getItem('click')) || 0;
let clickRate = parseInt(localStorage.getItem('clickRate')) || 1;

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
}, 1)