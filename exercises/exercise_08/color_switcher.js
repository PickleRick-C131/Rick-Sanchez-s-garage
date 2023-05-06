let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

// 3 -- Write an event handler to change the color of the page when each circle is pressed.

function switchTobtn1() {
    let body = document.querySelector("body");
    body.style.backgroundColor = '#f4dab1';
    body.style.color = '#f4dab1';
}
  
  function switchTobtn2() {
      let body = document.querySelector("body");
      body.style.backgroundColor = '#e7f4b1';
      body.style.color = '#e7f4b1';
    }
  
  function switchTobtn3() {
    let body = document.querySelector("body");
    body.style.backgroundColor = '#b1f4cf';
    body.style.color = '#b1f4cf';
  }
  
  function switchTobtn4() {
    let body = document.querySelector("body");
    body.style.backgroundColor = '#b1cdf4';
    body.style.color = '#b1cdf4';
  }
  // 2 -- Add an event listener to each circle
  btn1.addEventListener("click", switchTobtn1);
  btn2.addEventListener("click", switchTobtn2);
  btn3.addEventListener("click", switchTobtn3);
  btn4.addEventListener("click", switchTobtn4);