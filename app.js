const daysElement = document.querySelector(".days .number");
const hoursElement = document.querySelector(".hours .number");
const minutesElement = document.querySelector(".minutes .number");
const secondsElement = document.querySelector(".seconds .number");
const website = document.querySelector(".website");

let prevDays = null;
let prevHours = null;
let prevMinutes = null;
let prevSeconds = null;

const formatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
};

const updateAndAnimate = (element, newValue, prevValue) => {
    if (prevValue !== newValue) {
        element.classList.remove('flip-clock');
        void element.offsetWidth; // Trigger reflow to restart the animation
        element.innerText = newValue;
        element.classList.add('flip-clock');
    }
};

const countdown = () => {
    const newYears = "1 Jan 2024";
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSecondsLeft = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSecondsLeft / 3600 / 24);
    const hours = Math.floor(totalSecondsLeft / 3600) % 24;
    const minutes = Math.floor(totalSecondsLeft / 60) % 60;
    const seconds = Math.floor(totalSecondsLeft) % 60;

    updateAndAnimate(daysElement, formatTime(days), prevDays);
    prevDays = formatTime(days);

    updateAndAnimate(hoursElement, formatTime(hours), prevHours);
    prevHours = formatTime(hours);

    updateAndAnimate(minutesElement, formatTime(minutes), prevMinutes);
    prevMinutes = formatTime(minutes);

    updateAndAnimate(secondsElement, formatTime(seconds), prevSeconds);
    prevSeconds = formatTime(seconds);
};

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

const changeBackgroundImage = () => {
    const images = [
        "snow (1980 x 1320).jpg",
        "snow2 (1980 x 1320).jpg",
        "snow3 (1980 x 1320).jpg"
    ];

    let currentImageIndex = 0;

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
