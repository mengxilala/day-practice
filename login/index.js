
function focusInput(e) {
    var c = "";

    if (e.target.className == "user")
        c = "u";
    else if (e.target.className == "pass")
        c = "p";

    e.target.parentElement.classList.add(c);
}

function blurInput(e) {
    var c = "";

    if (!e.target.value) {
        if (e.target.className == "user")
            c = "u";
        else if (e.target.className == "pass")
            c = "p";

        e.target.parentElement.classList.remove(c);
    }
}
// chrome 记住密码后页面一进来就填充了账号密码
function onInputChangeOncePass() {
    var inputUser = document.querySelector(".login-tabs > .account > .user"),
        inputPass = document.querySelector(".login-tabs > .account > .pass");

    focusInput({ target: inputUser });
    focusInput({ target: inputPass });
    blurInput({ target: inputUser });
    blurInput({ target: inputPass });

    inputPass.removeEventListener("change", onInputChangeOncePass);
}