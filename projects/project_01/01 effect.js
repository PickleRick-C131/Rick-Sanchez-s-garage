const container = document.querySelector('.images-box');
const images = container.querySelectorAll('img');




images.forEach((img) => {
  const containerRect = container.getBoundingClientRect();
  const containerLeft = containerRect.left;
  const containerTop = containerRect.top;
  const containerRight = containerLeft + container.offsetWidth;
  const containerBottom = containerTop + container.offsetHeight;
  
  // 随机计算出left和top值，限制在容器元素内
  const left = Math.max(containerLeft, Math.min(containerRight, containerLeft + Math.floor(Math.random() * container.offsetWidth)));
  const top = Math.max(containerTop, Math.min(containerBottom, containerTop + Math.floor(Math.random() * container.offsetHeight)));
  
  // 随机计算出旋转角度
  const rotate = Math.floor(Math.random() * 60) - 30;

  // 设置图片的定位、位置和旋转角度
  img.style.position = 'absolute';
  img.style.left = left + 'px';
  img.style.top = top + 'px';
  img.style.transform = `rotate(${rotate}deg)`;
});
  