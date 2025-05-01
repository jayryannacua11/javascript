const ball = document.getElementById('ball');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const reverse = document.getElementById('reverse');

let speed = 1;
const speedUp = document.getElementById('speed-up');
const slowDown = document.getElementById('slow-down');

const rollAnimation = [
    {
        transform: 'rotate(0) translate3D(-50%, -50%, 0)',
        color: 'white',
    },
    {
        color: 'blue',
        offset: 0.3
    },
    {
        transform: 'rotate(360deg) translate3D(-50%, -50%, 0)',
        color: 'white'
    }
];

const rollOptions = {
    duration: 3000,
    iterations: Infinity
}

const roll = ball.animate(rollAnimation, rollOptions);

const showSpeed = (speed) => {
    const speedText = document.querySelector('h1 span');
    speedText.textContent = speed;
}

play.addEventListener('click', () => {
    roll.playbackRate = 1;
    roll.play();
});
pause.addEventListener('click', () => roll.pause());
reverse.addEventListener('click', () => roll.reverse());
speedUp.addEventListener('click', () => {
    if(roll.playbackRate < 8){
        roll.playbackRate *= 2;
        if(speed === -2){
            speed = 0;
        }
        speed++;
    }
    showSpeed(speed);
});
slowDown.addEventListener('click', () => {
    if(roll.playbackRate > 0.125){
        roll.playbackRate *= .5;
        if(speed === 1){
            speed = -1;
        }
        speed--;
    }

    showSpeed(speed);
});