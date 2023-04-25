const gridBase = document.querySelector('.container');

for (i = 0; i < 16; i++){

    gridHorizontal = document.createElement('div');

    gridHorizontal.classList.add('horizontal')

    gridBase.appendChild(gridHorizontal);

    for (e = 0; e < 16; e++){

        gridVertical = document.createElement('div');
    
        gridVertical.textContent = 'test';
    
        gridHorizontal.appendChild(gridVertical);
    
    }

}

const grid = document.querySelectorAll('.horizontal div');

grid.forEach((div) => {

    div.addEventListener('mouseover', () => {

        div.style.color = 'red';

    });

});

