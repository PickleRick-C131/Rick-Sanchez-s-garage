images.forEach((img) => {
    // 随机计算出left和top值
    const left = Math.floor(Math.random() * container.offsetWidth);
    const top = Math.floor(Math.random() * container.offsetHeight);
    
    // 随机计算出旋转角度
    const rotate = Math.floor(Math.random() * 360);
  
    // 设置图片的定位、位置和旋转角度
    img.style.position = 'absolute';
    img.style.left = left + 'px';
    img.style.top = top + 'px';
    img.style.transform = `rotate(${rotate}deg)`;
  });