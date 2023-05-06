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

        // 添加mousemove和mouseup事件监听器
    document.addEventListener('mousemove', moveHandler);
    document.addEventListener('mouseup', upHandler);

    // 定义mousemove事件处理函数
    function moveHandler(event) {
      // 计算新的图片位置
      const newLeft = event.clientX - offsetX;
      const newTop = event.clientY - offsetY;

      // 将图片限制在容器元素内
      img.style.left = Math.max(containerLeft, Math.min(containerRight - img.offsetWidth, newLeft)) + 'px';
      img.style.top = Math.max(containerTop, Math.min(containerBottom - img.offsetHeight, newTop)) + 'px';
    }

    // 定义mouseup事件处理函数
    function upHandler(event) {
      dragging = false; // 标记为没有拖动

      // 将图片恢复到原来的z-index值
      img.style.zIndex = zIndex;

      // 移除事件监听器
      document.removeEventListener('mousemove', moveHandler);
      document.removeEventListener('mouseup', upHandler);
    }
  });

  // 添加click事件监听器
  img.addEventListener('click', () => {
    if (!dragging) {
      // 如果没有拖动，则将图片放下
      img.style.zIndex = zIndex;
    }
  });