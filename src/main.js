import { ThemeList } from './lib/theme/ThemeList.js';
import ThemeChanger from './lib/ThemeChanger.js';
import { inputControl, counter } from './lib/Counter.js';

window.onload = () => {

    ThemeChanger.loadTheme();


    inputControl();

    counter();

    console.log(ThemeChanger.getTheme()["background"]);

    

}


