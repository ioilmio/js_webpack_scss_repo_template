const createElementDiv = function createD() {
  const div = document.createElement('div');
  div.textContent = 'Hello ';
  document.body.appendChild(div);
};

createElementDiv();