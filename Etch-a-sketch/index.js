const container = document.querySelector('#container');
const btn = document.querySelector('#btn');
const contStyles = window.getComputedStyle(container);
const contWidth = contStyles.getPropertyValue('width');
const contHeight = contStyles.getPropertyValue('height');

const innerDivs = [];
let div;
let div2;
let popup = 16;

const drawOnGrid = function (divEl) {
  divEl.addEventListener('mouseenter', function () {
    const rand1 = Math.trunc(Math.random() * 256);
    const rand2 = Math.trunc(Math.random() * 256);
    const rand3 = Math.trunc(Math.random() * 256);

    if (!divEl.style.backgroundColor) {
      divEl.style.backgroundColor = `rgb(${rand1}, ${rand2}, ${rand3})`;
      divEl.style.opacity = 0.1;
    } else {
      divEl.style.opacity = +divEl.style.opacity + 0.1;
    }
  });
};

const createDivs = function () {
  container.innerHTML = '';

  for (let i = 0; i < popup; i++) {
    div = document.createElement('div');
    div.classList.add('outerDiv');
    container.appendChild(div);

    for (let j = 0; j < popup; j++) {
      div2 = document.createElement('div');
      div2.classList.add('innerDiv');
      div.appendChild(div2);

      innerDivs.push(div2);
      drawOnGrid(div2);
    }
  }
};

createDivs();

const changeSquareNumber = function () {
  btn.addEventListener('click', function () {
    popup = +prompt('Enter the number of squares per line (MAX 100): ');
    if (popup <= 100) {
      createDivs();

      const squareWidth = (div2.style.width =
        parseFloat(contWidth) / popup).toString();
      const squareHeight = (div2.style.height =
        parseFloat(contHeight) / popup).toString();

      innerDivs.forEach(div => {
        div.setAttribute(
          'style',
          `width: ${squareWidth}px; height: ${squareHeight}px;`
        );
        drawOnGrid(div);
      });
    } else {
      alert('Maximum number of squares per row is 100. Please try again.');
    }
  });
};

changeSquareNumber();
