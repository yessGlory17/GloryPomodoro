
class ThemeChanger {

    static loadTheme() {
        //alert(this.getTheme()["background"]);
        document.body.style.backgroundColor = this.getTheme();
    }

    static setTheme(theme) {
        localStorage.setItem("theme", JSON.stringify(theme));
        document.body.style.backgroundColor = this.getTheme()["background"];
        location.reload();
    }

    static getTheme() {
        return JSON.parse(localStorage.getItem("theme"));
    }

    static clearTheme() {
        localStorage.removeItem("theme");
    }
}

export default ThemeChanger;