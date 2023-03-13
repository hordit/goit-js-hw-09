const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    background: document.querySelector('body'),
};
const BACKGROUND_DELAY = 1000;
let timerId = null;

refs.startBtn.addEventListener('click', startChangeBackgroundColor);
refs.stopBtn.addEventListener('click', stopChangeBackgroundColor);
refs.stopBtn.disable = true;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  
function startChangeBackgroundColor() {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
        timerId = setInterval(() => {
            refs.background.style.backgroundColor = getRandomHexColor();
        }, BACKGROUND_DELAY);
      console.log('Меняй цвет фона!!!');
  };

function stopChangeBackgroundColor(){
    refs.stopBtn.disabled = true;
    refs.startBtn.disabled = false;
    clearInterval(timerId);
    console.log('Остановись!!!');
  };
