const gridBase = document.querySelector('.container');

function createGrid(num){
    
    for (i = 0; i < num; i++){

    gridHorizontal = document.createElement('div');

    gridHorizontal.classList.add('horizontal')

    gridBase.appendChild(gridHorizontal);

    for (e = 0; e < num; e++){

        gridVertical = document.createElement('div');

        gridHorizontal.appendChild(gridVertical);
    
    }

}

}


const gridChange = document.querySelector('button');

gridChange.textContent = 'Change Grid Block Amount';

gridChange.addEventListener('click', () => {

    gridCount = prompt("How Much Blocks do You Want?");

    if(gridCount>100){gridCount=100}

        removeAllChild(gridBase);

        createGrid(gridCount);

        const grid = document.querySelectorAll('.horizontal div');

        grid.forEach((div) => {

            div.addEventListener('mouseover', () => {
    
                var randomColor = Math.floor(Math.random()*16777215).toString(16);

                div.style.backgroundColor = "#" + randomColor;
    
            });

            div.addEventListener('mouseout', () => {

                div.style.backgroundColor = "white";
    
            });
    
    
        });

});

function removeAllChild(parent){

    while(parent.firstChild){

        parent.removeChild(parent.firstElementChild);

    }

}
