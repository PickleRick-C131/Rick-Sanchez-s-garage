var container = document.getElementById("images");
var images = container.getElementsByTagName("img");

for (var i = 0; i < images.length; i++) {
  var leftPos = Math.floor(Math.random() * (container.offsetWidth - images[i].width));
  var topPos = Math.floor(Math.random() * (container.offsetHeight - images[i].height));
  images[i].style.position = "absolute";
  images[i].style.top = topPos + "px";
  images[i].style.left = leftPos + "px";
}