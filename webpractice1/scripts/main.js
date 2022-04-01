//将对象存储在变量里

//document.querySelector('html').onclick = function() {
    // alert('别戳我，我怕疼。');
//}
//等价于 let myHTML=document.querySelector('html')
//  myHTML.oncick=function(){alert('')};
//图像切片器
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/page1.JPG') {
      myImage.setAttribute('src', 'images/page2.JPG');
    } else {
      myImage.setAttribute('src', 'images/page1.JPG');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
 }