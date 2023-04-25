const gridBase = document.querySelector('.container');

gridCount = 32;

for (i = 0; i < gridCount; i++){

    gridHorizontal = document.createElement('div');

    gridHorizontal.classList.add('horizontal')

    gridBase.appendChild(gridHorizontal);

    for (e = 0; e < gridCount; e++){

        gridVertical = document.createElement('div');

        gridHorizontal.appendChild(gridVertical);
    
    }

}

const grid = document.querySelectorAll('.horizontal div');

grid.forEach((div) => {

    div.addEventListener('mouseover', () => {

        div.style.backgroundColor = 'violet';

    });

});

