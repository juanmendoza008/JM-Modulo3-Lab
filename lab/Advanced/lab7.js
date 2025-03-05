class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
}
display() {
let date = new Date();
//create 3 variables in one go using array destructuring
let [hours, mins, secs] = [
    date.getHours(), 
    date.getMinutes(), 
    date.getSeconds()
];

if (hours < 10) hours = '0' + hours; 
if (mins < 10) mins = '0' + mins;
if (secs < 10) secs = '0' + secs;
console.log(`${this.prefix} ${hours}:${mins}:${secs}`); }
stop() { clearInterval(this.timer);
}
start() {
        this.display();
this.timer = setInterval(() => this.display(), 1000); }
}
//const myClock = new DigitalClock('my clock:') 
//myClock.start()

//a)
class PrecisionClock extends DigitalClock { 
    constructor(prefix,precision) {
        super(prefix);
        this.precision = precision ? precision : 1000;
    }

    start() {
        this.display();
this.timer = setInterval(() => this.display(), this.precision); }

}

const precisionClock = new PrecisionClock('Interval:',5000) 
precisionClock.start()

//b)
class AlarmClock extends DigitalClock {
    constructor(prefix,wakeupTime) {
        super(prefix);
        this.wakeupTime = wakeupTime ? wakeupTime : "07:00";
    }

    checkTime() {
        let date = new Date();
        let [hours, mins] = [
            date.getHours(), 
            date.getMinutes(),
        ];

        const alarmTime = this.wakeupTime.split(":");
        const [alarmTimeHours, alarmTimeMinutes] = [
            alarmTime[0],
            alarmTime[1]
        ];

        if (hours == Number(alarmTimeHours) && mins == Number(alarmTimeMinutes)) {
            console.log("Wake up!");
            this.stop();
        }
        else {
            this.display();
        }
    }

    start() {
        this.checkTime();
        this.timer = setInterval(() => this.checkTime(), 1000); 
    }

}

const alarmClock = new AlarmClock('Time:',"18:13") 
alarmClock.start()