
let currentColor = '#00ff00';

function setColor(color) {
    currentColor = color;
    const svgDoc = document.getElementById('svgObject').contentDocument;
    svgDoc.querySelectorAll('[paintable]').forEach(el => {
        el.addEventListener('click', () => {
            el.style.fill = currentColor;
        });
    });
}
