import moonSwitch from '../components/moonSwitch .js';
import sunSwitch from '../components/sunSwitch.js';

document.addEventListener("DOMContentLoaded", function () {

const storageTheme = localStorage.getItem('theme');
const systemColorSheme = window.matchMedia('(prefers-color-sheme:dark)').matches ? 'dark' : 'light';

const newTheme = storageTheme ?? systemColorSheme;
document.documentElement.setAttribute('data-theme', newTheme);

document.querySelector('.main__dark').innerHTML = moonSwitch;
document.querySelector('.main__light').innerHTML = sunSwitch;



    const switcherTheme = document.querySelector(".main__check");
    const root = document.documentElement;


    if (root.getAttribute('data-theme') === 'dark') {
        switcherTheme.checked = true;
    }

    switcherTheme.addEventListener("click", toggleTheme);

    function toggleTheme() {
        const setTheme = switcherTheme.checked ? 'dark' :
            'light';

        root.setAttribute('data-theme', setTheme);
        localStorage.setItem('theme', setTheme);
    }







});



