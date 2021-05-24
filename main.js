const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRamdomColor = colorsArr => {
  return colorsArr[randomIntegerFromInterval(0, colorsArr.length - 1)];
};

const onStartButtonClicked = () => {
  startButtonRef.disabled = true;
  stopButtonRef.disabled = false;

  startButtonRef.removeEventListener('click', onStartButtonClicked);
  stopButtonRef.addEventListener('click', onStopButtonClicked);

  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRamdomColor(colors);
  }, 1000);
};

const onStopButtonClicked = () => {
  startButtonRef.disabled = false;
  stopButtonRef.disabled = true;

  stopButtonRef.removeEventListener('click', onStopButtonClicked);
  startButtonRef.addEventListener('click', onStartButtonClicked);

  clearInterval(timerId);
};

const startButtonRef = document.querySelector('button[data-action="start"]');
const stopButtonRef = document.querySelector('button[data-action="stop"]');

let timerId = null;
startButtonRef.addEventListener('click', onStartButtonClicked);
stopButtonRef.disabled = true;
