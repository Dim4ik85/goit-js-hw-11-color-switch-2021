const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];


  const body = document.querySelector('body');
  const startBtn = document.querySelector('[data-action="start"]');
  const stopBtn = document.querySelector('[data-action="stop"]');

  startBtn.addEventListener('click', buttonStartClick);
  stopBtn.addEventListener('click', buttonStopClick);

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let timerId;
  function buttonStartClick() {
    startBtn.disabled = true;
    timerId = setInterval(
        chooseColor, 1000);
              
}
//const
function buttonStopClick() {
    clearInterval(timerId);
    startBtn.disabled = false;
    
    console.log("setInterval stopped!");
  }

function chooseColor() {
    let color = randomIntegerFromInterval(0, colors.length + 1);
    body.style.backgroundColor = colors[color];
    console.log(body.style.backgroundColor);
}