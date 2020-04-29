let tjohejMiddle = "Tjohej";
let shuffleBtn = document.querySelector('.shuffle-button');
const cells = document.querySelectorAll('.cell-text');
let resetBtn = document.querySelector('.reset-button');
let circle = document.querySelectorAll('.circle');
const grid = document.querySelector('.grid');

for (let i = 0, len = grid.children.length; i < len; i++){
    grid.children[i].addEventListener('click', () => {
        circle[i].style.display = 'block';
    })
}

function Reset () {
    for(let i = 0; i < circle.length; i++){
        circle[i].style.display = 'none';
    }
}

function Fill () {
    for (let i = 0; i < tjohej.length; i++) {
        let j = Math.floor(Math.random() * tjohej.length);
        let temp = tjohej[i];
        tjohej[i] = tjohej[j];
        tjohej[j] = temp;
    }
    for(let i = 0; i < cells.length; i++){
        if(i===12)
            cells[12].textContent = tjohejMiddle;
        else
            cells[i].textContent = tjohej[i];
    }
}
Fill();
resetBtn.addEventListener('click', () => {
    Reset();
});

shuffleBtn.addEventListener('click', () => {
    Reset();
    Fill();
}); 
