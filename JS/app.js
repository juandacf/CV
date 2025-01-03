var mainButton = document.getElementById("menuMobile")
var actualMenu =  document.getElementById("pageFeaturesContainer")

mainButton.onclick = function () {
    if(actualMenu.style.display==="flex"){
        actualMenu.style.display="none"
    } else {
        actualMenu.style.display="flex"
    }
}