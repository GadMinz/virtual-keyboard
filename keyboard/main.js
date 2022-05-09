import Keyboard from './Keyboard.js';

const KEYBOARD = new Keyboard();
let pressed = null;

window.addEventListener('mousedown', (e) => {
    if (e.target.tagName === 'BUTTON') {
        KEYBOARD.press(e.target.dataset.code);
        pressed = e.target.dataset.code;
    }
});

window.addEventListener('mouseup', () => {
    if (pressed) {
        KEYBOARD.unpress(pressed);
        pressed = null;
    }
});

window.addEventListener('keydown', (e) => {
    KEYBOARD.press(e.code);
    e.preventDefault();
});

window.addEventListener('keyup', (e) => {
    KEYBOARD.unpress(e.code);
    e.preventDefault();
});
