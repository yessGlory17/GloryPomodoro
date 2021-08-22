import { ThemeList } from './lib/theme/ThemeList.js';
import ThemeChanger from './lib/ThemeChanger.js';


window.onload = () => {

    ThemeChanger.loadTheme();

    //document.getElementById("main").style.backgroundColor = ThemeChanger.getTheme()["background"];

    let startButton = document.getElementById("start-button");
    startButton.addEventListener('click', () => {
        //alert()
        ThemeChanger.setTheme(ThemeList.Parliament);
        let counter = document.getElementById("counter");
        let time = counter.textContent.split(":");
        let minute = time[0];
        let seconds = time[1];
        setInterval(() => {

            minute--;
            console.log(minute);
            let currentTime = minute + ":" + seconds;
            counter.textContent = currentTime;

        }, 1000)
    })

    console.log(ThemeChanger.getTheme()["background"]);



}