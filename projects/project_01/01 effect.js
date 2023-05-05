const container = document.querySelector('.images-box');
const images = container.querySelectorAll('img');

function showCongrats(){
  alert("Sing with me, All the single ladies, All the single ladies, All the single ladies!")
}


images.forEach((img) => {
  const containerRect = container.getBoundingClientRect();
  const containerLeft = containerRect.left;
  const containerTop = containerRect.top;
  const containerRight = containerLeft + container.offsetWidth;
  const containerBottom = containerTop + container.offsetHeight;
  
  // 随机计算出left和top值，限制在容器元素内
  const left = Math.max(containerLeft, Math.min((containerRight - img.offsetWidth), containerLeft + Math.floor(Math.random() * (container.offsetWidth-300))));
  const top = Math.max(containerTop, Math.min(containerBottom, containerTop + Math.floor(Math.random() * container.offsetHeight)));
  
  // 随机计算出旋转角度
  const rotate = Math.floor(Math.random() * 60) - 30;

  // 设置图片的定位、位置和旋转角度
  img.style.position = 'absolute';
  img.style.left = left + 'px';
  img.style.top = top + 'px';
  img.style.transform = `rotate(${rotate}deg)`;                      
});






// 添加鼠标事件监听器
img.addEventListener('mousedown', (event) => {
  // 将图片置于其他图片之上
  img.style.zIndex = 1000;
  
  // 计算鼠标在图片上的相对位置
  const startX = event.clientX;
  const startY = event.clientY;
  const imgLeft = img.offsetLeft;
  const imgTop = img.offsetTop;
  const offsetX = startX - imgLeft;
  const offsetY = startY - imgTop;
  
  // 定义mousemove事件处理函数
  function moveHandler(event) {
  // 计算新的图片位置
  const newLeft = event.clientX - offsetX;
  const newTop = event.clientY - offsetY;  
  // 将图片限制在容器元素内
img.style.left = Math.max(containerLeft, Math.min(containerRight - img.offsetWidth, newLeft)) + 'px';
img.style.top = Math.max(containerTop, Math.min(containerBottom - img.offsetHeight, newTop)) + 'px';
}

// 添加mousemove事件监听器
document.addEventListener('mousemove', moveHandler);

// 定义mouseup事件处理函数
function upHandler(event) {
// 将图片恢复到原来的z-index值
img.style.zIndex = zIndex;
// 移除事件监听器
document.removeEventListener('mousemove', moveHandler);
document.removeEventListener('mouseup', upHandler);
}

// 添加mouseup事件监听器
document.addEventListener('mouseup', upHandler);
});

// 添加click事件监听器
img.addEventListener('click', () => {
// 如果没有拖动，则将图片放下
if (img.dataset.dragging !== 'true') {
img.style.zIndex = zIndex;
}
});

// 添加dragstart事件监听器
img.addEventListener('dragstart', (event) => {
// 防止图片被拖动
event.preventDefault();
});
