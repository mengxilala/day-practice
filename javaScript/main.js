var myHeading = document.querySelector('h1');
// myHeading.innerHTML="Hello World";
var myImg = document.querySelector('img');
var myButton = document.querySelector('button');
myImg.onclick = function () {
    var mySrc = myImg.getAttribute('src');
    if (mySrc == 'img/img.png') {
        myImg.setAttribute('src', 'img/selected.png');
    } else {
        myImg.setAttribute('src', 'img/img.png')
    }
}


// prompt() 方法用于显示可提示用户进行输入的对话框。
function setUserName() {
    var myName = prompt('please enter your name');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}

