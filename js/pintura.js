
let currentColor = '#00ff00';
function setColor(color) {
  currentColor = color;
}
window.onload = () => {
  document.querySelectorAll('.paintable').forEach(el => {
    el.addEventListener('click', () => {
      el.setAttribute('fill', currentColor);
    });
  });
};
