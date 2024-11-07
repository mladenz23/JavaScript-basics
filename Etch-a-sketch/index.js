const container = document.querySelector('#container');

const createDivs = function () {
  for (let i = 1; i < 17; i++) {
    const div = document.createElement('div');
    div.classList.add('outerDiv');
    container.appendChild(div);

    for (let j = 1; j < 17; j++) {
      const div2 = document.createElement('div');
      div2.classList.add('innerDiv');
      div.appendChild(div2);

      div2.addEventListener('mouseenter', function (e) {
        div2.style.backgroundColor = 'black';
      });
      div2.addEventListener('mouseleave', function () {
        div2.style.backgroundColor = 'white';
      });
    }
  }
};

createDivs();
