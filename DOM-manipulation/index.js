const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redText = document.createElement('p');
redText.style.color = 'red';
redText.textContent = "Hey I'm red";
container.appendChild(redText);

const blueText = document.createElement('h3');
blueText.style.color = 'blue';
blueText.textContent = "I'm a blue h3!";
container.appendChild(blueText);

const colorful = document.createElement('div');
colorful.classList.add('class1');
colorful.setAttribute(
  'style',
  'border: 1px solid black; background-color: pink'
);

const newH1 = document.createElement('h1');
newH1.textContent = "I'm in a div";
colorful.appendChild(newH1);

const newP = document.createElement('p');
newP.textContent = 'ME TOO!';
colorful.appendChild(newP);

container.appendChild(colorful);
