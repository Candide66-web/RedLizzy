const text = document.querySelector('h2');

function getChrono(){

    const now = new Date().getTime();
    const countdownDate = new Date("January 1, 2025");

    const distanceBase = countdownDate - now;

    const day = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
    // console.log(day);

    const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60));
    const secondes = Math.floor((distanceBase % (1000 * 60)) / (1000));
    console.log(day, hours, minutes, secondes);

    text.innerHTML = day + "j " + hours + "h " + minutes + "m " + secondes + "s ";

}

const countDownInterval = setInterval(() => {
    getChrono()
}, 1000);