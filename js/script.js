function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});

"use strict"
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()||
                isMobile.BlackBerry()|| 
                isMobile.iOS()|| 
                isMobile.Opera() || 
                isMobile.Windows());
    }
};

if (isMobile.any()){
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

//===================<Event Counter>======================================

const monthsEl = document.getElementById('months');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


const newYears = '1 Jan 2022';

function countDown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSec=(newYearsDate - currentDate) / 1000;

    const months = Math.floor(totalSec / 3600 / 24 / 30);
    const days = Math.floor(totalSec / 3600 / 24) %30;
    const hours = Math.floor(totalSec / 3600) %24;
    const minutes = Math.floor(totalSec / 60) % 60;
    const seconds =  Math.floor(totalSec) % 60;

    monthsEl.innerHTML = formatTime(months);
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

    // console.log('sec: '+ seconds, 'min: '+ minutes, 'hrs: '+ hours, 'day: '+ days, 'mth: '+ months);
}

function formatTime(time){
    return time < 10 ?(`0${time}`) : time;
}
//initial call
countDown();
setInterval(countDown, 1000);

