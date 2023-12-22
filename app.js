const daysElement = document.querySelector(".days .number");
const hoursElement = document.querySelector(".hours .number");
const minutesElement = document.querySelector(".minutes .number");
const secondsElement = document.querySelector(".seconds .number");
const website = document.querySelector(".website");

let prevDays = null;
let prevHours = null;
let prevMinutes = null;
let prevSeconds = null;

const generateSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    website.appendChild(snowflake);

    const randomSize = Math.random() * 1 + 0.2;
    const randomLeft = Math.random() * 100;
    const animationDuration = 5 + Math.random() * 5;

    snowflake.style.width = `${randomSize}vw`;
    snowflake.style.height = `${randomSize}vw`;
    snowflake.style.left = `${randomLeft}vw`;
    snowflake.style.animationDuration = `${animationDuration}s`;

    snowflake.addEventListener('animationiteration', () => {
        snowflake.remove();
        generateSnowflake(); 
    });
};

const createSnowflakes = () => {
    for (let i = 0; i < 100; i++) { 
        generateSnowflake();
    }
};

createSnowflakes();
const newYears = "1 Jan 2024";
const images = ["snow (1980 x 1320).jpg", 
                "snow2 (1980 x 1320).jpg", 
                "snow3 (1980 x 1320).jpg"];

let currentImageIndex = 0;

const countdown = () => {
    const newYears = "1 Jan 2024";
    

    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSecondsLeft = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSecondsLeft / 3600 / 24);
    const hours = Math.floor(totalSecondsLeft / 3600) % 24;
    const minutes = Math.floor(totalSecondsLeft / 60) % 60;
    const seconds = Math.floor(totalSecondsLeft) % 60;

    const newDays = formatTime(days);
    const newHours = formatTime(hours);
    const newMinutes = formatTime(minutes);
    const newSeconds = formatTime(seconds);

    updateAndAnimate(daysElement, newDays, prevDays);
    updateAndAnimate(hoursElement, newHours, prevHours);
    updateAndAnimate(minutesElement, newMinutes, prevMinutes);
    updateAndAnimate(secondsElement, newSeconds, prevSeconds);

    prevDays = newDays;
    prevHours = newHours;
    prevMinutes = newMinutes;
    prevSeconds = newSeconds;

    changeBackgroundImage();
};
const updateDays = (newDays) => {
    if (prevDays !== null && prevDays !== newDays) {
        daysElement.classList.remove('flip-clock');
        void daysElement.offsetWidth; 
        daysElement.innerText = newDays;
        daysElement.classList.add('flip-clock');
    }
    prevDays = newDays;
};

const updateHours = (newHours) => {
    if (prevHours !== null && prevHours !== newHours) {
        hoursElement.classList.remove('flip-clock');
        void hoursElement.offsetWidth; 
        hoursElement.innerText = newHours;
        hoursElement.classList.add('flip-clock');
    }
    prevHours = newHours;
};

const updateMinutes = (newMinutes) => {
    if (prevMinutes !== null && prevMinutes !== newMinutes) {
        minutesElement.classList.remove('flip-clock');
        void minutesElement.offsetWidth; 
        minutesElement.innerText = newMinutes;
        minutesElement.classList.add('flip-clock');
    }
    prevMinutes = newMinutes;
};

const updateSeconds = (newSeconds) => {
    if (prevSeconds !== null && prevSeconds !== newSeconds) {
        secondsElement.classList.remove('flip-clock');
        void secondsElement.offsetWidth;
        secondsElement.innerText = formatTime(newSeconds);
        secondsElement.classList.add('flip-clock');
    }
    prevSeconds = newSeconds;
};
const updateAndAnimate = (element, newValue) => {
    if (element.innerText !== newValue) {
        element.classList.remove('flip-clock');
        void element.offsetWidth; 
        element.innerText = newValue;
        element.classList.add('flip-clock');
    }
};

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
};

const changeBackgroundImage = () => {
    website.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
};

countdown();
changeBackgroundImage();

setInterval(changeBackgroundImage, 5000);
setInterval(countdown, 1000);

const countdownContainer = document.querySelector(".countdown-container");
setTimeout(() => {
    website.classList.add("show");
}, 500);

setTimeout(() => {
    countdownContainer.style.opacity = 1;
}, 1000);


