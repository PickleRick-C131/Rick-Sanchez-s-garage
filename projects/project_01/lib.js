

//USD100
const img = document.querySelector('.USD100');
const tooltip = document.querySelector('.text_USD100');

img.addEventListener('mousemove', function(e) {
  tooltip.style.display = 'block';
  tooltip.style.top = e.pageY + 'px';
  tooltip.style.left = (e.pageX + 20) + 'px';
});

img.addEventListener('mouseout', function() {
  tooltip.style.display = 'none';
});
//USD100


//USD50
const img_USD50 = document.querySelector('.USD50');
const tooltip_USD50 = document.querySelector('.text_USD50');

img_USD50.addEventListener('mousemove', function(e) {
  tooltip_USD50.style.display = 'block';
  tooltip_USD50.style.top = e.pageY + 'px';
  tooltip_USD50.style.left = (e.pageX + 20) + 'px';
});

img_USD50.addEventListener('mouseout', function() {
  tooltip_USD50.style.display = 'none';
});
//USD50

//USD20
const img_USD20 = document.querySelector('.USD20');
const tooltip_USD20 = document.querySelector('.text_USD20');

img_USD20.addEventListener('mousemove', function(e) {
  tooltip_USD20.style.display = 'block';
  tooltip_USD20.style.top = e.pageY + 'px';
  tooltip_USD20.style.left = (e.pageX + 20) + 'px';
});

img_USD20.addEventListener('mouseout', function() {
  tooltip_USD20.style.display = 'none';
});
//USD20

//USD10
const img_USD10 = document.querySelector('.USD10');
const tooltip_USD10 = document.querySelector('.text_USD10');

img_USD10.addEventListener('mousemove', function(e) {
  tooltip_USD10.style.display = 'block';
  tooltip_USD10.style.top = e.pageY + 'px';
  tooltip_USD10.style.left = (e.pageX - 600) + 'px';
});

img_USD10.addEventListener('mouseout', function() {
  tooltip_USD10.style.display = 'none';
});
//USD10


//USD5
const img_USD5 = document.querySelector('.USD5');
const tooltip_USD5 = document.querySelector('.text_USD5');

img_USD5.addEventListener('mousemove', function(e) {
  tooltip_USD5.style.display = 'block';
  tooltip_USD5.style.top = e.pageY + 'px';
  tooltip_USD5.style.left = (e.pageX - 600) + 'px';
});

img_USD5.addEventListener('mouseout', function() {
  tooltip_USD5.style.display = 'none';
});
//USD10