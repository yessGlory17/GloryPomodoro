import { ThemeList } from './lib/theme/ThemeList.js';
import ThemeChanger from './lib/ThemeChanger.js';

window.onload = () => {

    ThemeChanger.loadTheme();

    //document.getElementById("main").style.backgroundColor = ThemeChanger.getTheme()["background"];

    let startButton = document.getElementById("start-button");
    startButton.addEventListener('click', () => {
        ThemeChanger.setTheme(ThemeList.Blue1);
    })

    console.log(ThemeChanger.getTheme()["background"]);

}