var popupLogin = document.getElementById("popupform");
var close = document.getElementById("closeBtn");

window.addEventListener("load", function () {
    setTimeout(function () {
        popupLogin.classList.add('anyname')
    }, 3000)
})

close.addEventListener("click", function () {
    popupLogin.classList.remove('anyname')
})