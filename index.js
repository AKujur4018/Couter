const dayElement = document.querySelector(".days");
const hourElement = document.querySelector(".hours");
const minuteElement = document.querySelector(".minutes");
const secondElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");

const second = 1000
,minute = 60 * second
,hour = 60 * minute
,day = 24 * hour;

const timerFunction = ()=> {


    const now = new Date();
    let dd = String(now.getDate()).padStart(2, "0");
    let mm = String(now.getMonth() + 1).padStart(2, "0");
    let yyyy = String(now.getFullYear());

    const enteredday = prompt("Enter Day").padStart(2, "0");
    const enteredMonth = prompt("Enter Month").padStart(2, "0");
    const enteredYear = prompt("Enter Year").padStart(2, "0");

    const targetDate = `${enteredMonth}/${enteredday151}/${enteredYear}`;

    console.log(targetDate);
    
    const intervalId = setInterval(() => {
        
        const timer = new Date(targetDate).getTime();
        const today = new Date().getTime();
        const difference = timer - today;
        const leftDay = Math.floor(difference/day);
        const leftHour = Math.floor((difference % day) / hour);
        const leftMinute = Math.floor((difference % hour ) /minute);
        const leftSecond= Math.floor((difference % minute ) / second);

        dayElement.innerText = leftDay;
        hourElement.innerText = leftHour;
        minuteElement.innerText = leftMinute;
        secondElement.innerText = leftSecond;

        if(difference < 0) {
            counterTimer.style.display = "none";
            heading.innerText = "Time Up";
            clearInterval(intervalId);
        }
    }, 1000);
};

timerFunction();