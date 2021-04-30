const cards = document.querySelectorAll('.card');
const cols = document.querySelectorAll('.col');
let currentCard = null;
let dragOverCard = null;
let mousePosition = 0;

// document.onmousemove = (evt) => {
//     mousePosition = evt.clientY;
//     console.log(mousePosition)
// }

for(card of cards) {
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
    card.addEventListener('dragenter', dragEnterCard)
    card.addEventListener('dragleave', dragLeaveCard)
}

for(col of cols) {
    col.addEventListener('dragover', dragOver);
    col.addEventListener('dragenter', dragEnter);
    col.addEventListener('dragleave', dragLeave);
    col.addEventListener('drop', dragDrop);
}

function dragEnterCard(e) {
    e.preventDefault();
    dragOverCard = e.target;
    // console.log('dragEnterCard: ', dragOverCard)
}

function dragLeaveCard(e) {
    e.preventDefault();
    dragOverCard = null;
    // console.log('dragLeaveCard: ', dragOverCard)

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

    if(dragOverCard != null) {
        // setCurrentCard(dragOverCard, currentCard);

        dragOverCard.insertAdjacentElement('beforebegin', currentCard);
        dragOverCard = null;
    } else {
        this.append(currentCard)        
    }

    currentCard = null;
}

function dragStart(evt) {
    currentCard = evt.target;

    this.className += ' hold';
    setTimeout(() => {
        this.className = 'invisible';
    }, 0);
}

function dragEnd(evt) {
    this.className = 'card';
}

// function setCurrentCard(dragOverCard, currentCard) {
//     console.log('---------------------')
//     console.log('card: ', dragOverCard.offsetTop)
//     console.log('mouse:', mousePosition)
// }