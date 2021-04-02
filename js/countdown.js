const countDown = document.getElementById('countdown');

//if number is greater than -1 and less than 10 it will add a zero infront of the param. and return it as a string.
let addZero = (number) => {
    if(number > -1 && number < 10) {
        let twoDigit = "0" + number;
        return twoDigit.toString();
    } else {
        return number.toString();
    }
}

let updateCount = setInterval(() => {
    let countDownDate = new Date('Dec 21, 2022 00:00:01').getTime();
    let currentTime = new Date().getTime();
    let distance = countDownDate - currentTime;

    let days = addZero(Math.floor(distance / (1000 * 60 * 60 * 24)));
    let hours = addZero(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    let mins = addZero(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    let sec = addZero(Math.floor((distance % (1000 * 60)) / 1000));

    countDown.innerHTML = `Approx. Time Left Before AOT Season 4 Part 2: ${days}:${hours}:${mins}:${sec}`;

    if (distance < 0) {
        clearInterval(updateCount);
        countDown.innerHTML = 'Attack on Titan Season 4 Part 2 Releases SOON!';
    }
}, 1000);


