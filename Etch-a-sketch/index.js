const container = document.querySelector('#container');
const btn = document.querySelector('#btn');

let div;
let div2;
const innerDivs = [];

const contStyles = window.getComputedStyle(container);
const contWidth = contStyles.getPropertyValue('width');
const contHeight = contStyles.getPropertyValue('height');

let popup = 16;

const createDivs = function () {
  for (let i = 0; i < popup; i++) {
    div = document.createElement('div');
    div.classList.add('outerDiv');
    container.appendChild(div);

    for (let j = 0; j < popup; j++) {
      div2 = document.createElement('div');
      div2.classList.add('innerDiv');
      div.appendChild(div2);

      innerDivs.push(div2);
    }
  }
};

const changeSquareNumber = function () {
  btn.addEventListener('click', function () {
    popup = +prompt('Enter the number of squares per line (MAX 100): ');
    createDivs();

    const squareWidth = (div2.style.width =
      parseFloat(contWidth) / popup).toString();
    const squareHeight = (div2.style.height =
      parseFloat(contHeight) / popup).toString();

    // Fix stacking of grids on multiple button entries
    innerDivs.forEach(div => {
      div.setAttribute(
        'style',
        `width: ${squareWidth}px; height: ${squareHeight}px;`
      );

      // div.addEventListener('mouseenter', function () {
      //   div.style.backgroundColor = 'black';
      // });
      // div.addEventListener('mouseleave', function () {
      //   div.style.backgroundColor = 'white';
      // });
    });
  });
};

changeSquareNumber();
