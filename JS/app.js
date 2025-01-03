var mainButton = document.getElementById("menuMobile")
var actualMenu =  document.getElementById("pageFeaturesContainer")
var menuMediaQuery = window.matchMedia('(min-width: 772px)')




mainButton.onclick = function () {
    if(actualMenu.style.display==="flex"){
        actualMenu.style.display="none"
    } else {
        actualMenu.style.display="flex"
    }
}