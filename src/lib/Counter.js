export function inputControl() {
    let counter = document.getElementById("counter");

    let currentTime = counter.textContent.split(":");
    let minute = currentTime[0];
    let second = currentTime[1];
    counter.addEventListener('input', () => {

        minute = parseInt(minute);
        second = parseInt(second);

        if (minute > 60) {
            console.log(".....");
            minute = 59;
            counter.textContent = minute.toString() + ":" + "00";
        }


    })
}



export function counter() {
    let startButton = document.getElementById("start-button");
    let alarmSound = document.getElementById("alarm-sound");
    const audioContext = new AudioContext();
    const source = audioContext.createMediaElementSource(alarmSound);
    startButton.addEventListener('click', () => {
        //alert()
        //ThemeChanger.setTheme(ThemeList.Parliament);
        let counter = document.getElementById("counter");
        let time = counter.textContent.split(":");
        let minute = time[0];
        let seconds = time[1];

        //if (minute => 60) minute = 59;
        var pomodoro = setInterval(() => {



            source.connect(audioContext.destination)

            if (seconds == 0) {
                minute--;
                seconds = 59;
                counter.textContent = minute + ":" + seconds;
            } else if (seconds > 0) {

                seconds--;
                if (seconds < 10) seconds = "0" + seconds;
            } else {
                seconds = 0;
            }

            if (minute == 0 && seconds == 0) {
                //alert("Pomodoro Bitti");
                alarmSound.play();

                setTimeout(() => {
                    if (confirm("Pomodoro is Finished!")) {
                        alarmSound.pause();
                    }
                }, 3000)

                clearInterval(pomodoro);
            }

            //minute--;
            console.log(minute);
            let currentTime = minute + ":" + seconds;
            counter.textContent = currentTime;

        }, 1000)
    });
}