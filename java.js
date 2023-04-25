const gridBase = document.querySelector('.container');

for (i = 0; i < 16; i++){

    gridHorizontal = document.createElement('div');

    gridHorizontal.textContent = 'test';

    gridBase.appendChild(gridHorizontal);

}

for (i = 1; i < 16; i++){

    gridVertical = document.createElement('div');

    gridVertical.textContent = 'gai';

    gridHorizontal.appendChild(gridVertical);

}