var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var randomize = document.getElementById('randomize');

function setGradient() {
  body.style.background =
    'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

  css.textContent = body.style.background + ';';
}

function onLoadBody() {
  setGradient();
  css.textContent = body.style.background + ';';
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function randomizeValues() {
  color1.value = rgbToHex(
    getRandomInt(255),
    getRandomInt(255),
    getRandomInt(255)
  );

  color2.value = rgbToHex(
    getRandomInt(255),
    getRandomInt(255),
    getRandomInt(255)
  );

  setGradient();
}

window.addEventListener('load', onLoadBody);

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

randomize.addEventListener('click', randomizeValues);
