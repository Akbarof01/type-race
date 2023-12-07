const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "Life is like a box of chocolates, you never know what you're gonna get.",
  "To be or not to be, that is the question.",
  "All that glitters is not gold.",
  "Actions speak louder than words."
];

let currentSentence;
let startTime;

const sentenceDisplay = document.getElementById('sentenceDisplay');
const typedValue = document.getElementById('typedValue');
const result = document.getElementById('result');

function startGame() {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  currentSentence = sentences[randomIndex];
  sentenceDisplay.textContent = currentSentence;
  typedValue.value = '';
  typedValue.disabled = false;
  typedValue.focus();
  result.textContent = '';

  startTime = new Date().getTime();
  typedValue.addEventListener('input', checkTypedValue);
}

function checkTypedValue() {
  const text = text.value;
  if (text === currentSentence) {
    const endTime = new Date().getTime();
    const elapsedTime = (endTime - startTime) / 1000;
    const words = typedText.split(' ').length;
    const speed = Math.round((words / elapsedTime) * 60);
    result.textContent = `You typed at ${speed} words per minute!`;
    text.disabled = true;
    typedValue.removeEventListener('input', checkTypedValue);
  }
}
