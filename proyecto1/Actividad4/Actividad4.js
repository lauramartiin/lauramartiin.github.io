var parrafoApintar=0;

function conseguirColor(){
    var conseguirColor = document.getElementById("color").value;

    var parrafos   = document.querySelectorAll("p");

        parrafos[parrafoApintar%parrafos.length].style.color = conseguirColor;
        parrafoApintar++
}