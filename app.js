const cards = document.querySelectorAll('.card');
const cols = document.querySelectorAll('.col');
let currentCard = null;

for(card of cards) {
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
}

for(col of cols) {
    col.addEventListener('dragover', dragOver);
    col.addEventListener('dragenter', dragEnter);
    col.addEventListener('dragleave', dragLeave);
    col.addEventListener('drop', dragDrop);
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className = 'col hovered';
}

function dragLeave(e) {
    this.className = 'col';
}

function dragDrop(evt) {
    this.className = 'col';
    this.append(currentCard)
    currentCard = null;
}

function dragStart(evt) {
    // console.log(evt.target)
    currentCard = evt.target;

    this.className += ' hold';
    setTimeout(() => {
        this.className = 'invisible';
    }, 0);
}

function dragEnd(evt) {
    // console.log(evt.target)

    this.className = 'card';
}