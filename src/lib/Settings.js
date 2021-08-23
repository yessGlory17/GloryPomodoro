import { ThemeList } from './theme/ThemeList.js';
import ThemeChanger from './ThemeChanger.js';
window.onload = () => {
    ThemeChanger.loadTheme();

    loadThemeList();
}


function loadThemeList() {

    //alert(".")
    let list = Object.values(ThemeList).map((values) => [values]);
    console.log(list);

    let themeList = document.getElementById("theme-list");

    list.forEach((theme) => {
        let themeBox = document.createElement('div');
        themeBox.className = "theme-box";
        console.log(theme[0].background);
        themeBox.setAttribute("data-theme", theme[0].background);
        themeBox.style.backgroundColor = themeBox.getAttribute("data-theme");

        if (theme[0].background == ThemeChanger.getTheme()) {
            themeBox.style.border = "3px solid #0CA940";
        }

        themeBox.addEventListener('click', (e) => {
            ThemeChanger.setTheme(e.currentTarget.getAttribute("data-theme"));

        })
        themeList.appendChild(themeBox);

    });
}

function setTheme() {

}