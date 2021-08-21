
class ThemeChanger {

    static loadTheme() {
        document.getElementById("main").style.backgroundColor = this.getTheme()["background"];
    }

    static setTheme(theme) {
        localStorage.setItem("theme", JSON.stringify(theme));
        document.getElementById("main").style.backgroundColor = this.getTheme()["background"];
    }

    static getTheme() {
        return JSON.parse(localStorage.getItem("theme"));
    }

    static clearTheme() {
        localStorage.removeItem("theme");
    }
}

export default ThemeChanger;