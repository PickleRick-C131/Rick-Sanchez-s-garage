const img = document.querySelector('#USD100');
const tooltip = document.querySelector('.text_USD100');

img.addEventListener('mousemove', function(e) {
  tooltip.style.display = 'block';
  tooltip.style.top = e.pageY + 'px';
  tooltip.style.left = (e.pageX + 20) + 'px';
});

img.addEventListener('mouseout', function() {
  tooltip.style.display = 'none';
});