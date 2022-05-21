const boxAfter = document.querySelector('.demo__inner--after');
const slider = document.querySelector('.slider__indicator');
const handler = document.querySelector('.slider__handler');




export default () => {
    if (!slider)
        return;

    initMouse();
    initKeyboard();
    initToggler();
    initLabels();
};



function initMouse() {
    const mouseSmoothing = 0.20;

    handler.addEventListener('mousedown', () => {
        document.addEventListener('mousemove', onMouseMove);
    });

    document.addEventListener('mouseup', (evt) => {
        document.removeEventListener('mousemove', onMouseMove);
    });

    function onMouseMove(evt) {
        move(evt.movementX * mouseSmoothing);
    }
}

function initKeyboard() {
    const STEP = 1;

    handler.addEventListener('keydown', (evt) => {
        switch (evt.key.toLowerCase()) {
            case 'arrowleft':
                move(-STEP);
                evt.preventDefault();
                break;
            case 'arrowright':
                move(STEP);
                evt.preventDefault();
                break;
        }
    });
}

function initToggler() {
    const toggler = document.querySelector('.demo__toggler');
    toggler.addEventListener('click', () => {
        toggler.classList.toggle('demo__toggler--after');

        boxAfter.style.width =
            boxAfter.style.width === '0%' ? setOffset(100) : setOffset(0);
    });
}
function initLabels() {
    const btnBefore = document.querySelector('.demo__label--before');
    const btnAfter = document.querySelector('.demo__label--after');

    btnBefore.addEventListener('click', () => {
        boxAfter.style.transition = 'width 0.3s';
        setOffset(0);
        setTimeout(removeTransition, 300);
    });

    btnAfter.addEventListener('click', () => {
        boxAfter.style.transition = 'width 0.3s';
        setOffset(100);
        setTimeout(removeTransition, 300);
    });

    function removeTransition() {
        boxAfter.style.transition = '';
    }
}



function move(value) {
    let current = Number.parseFloat(boxAfter.style.width);
    current = Math.max(Math.min(current + value, 100), 0);
    setOffset(current);
}

function setOffset(value) {
    boxAfter.style.width = value + '%';
    slider.style.width = value + '%';
}
